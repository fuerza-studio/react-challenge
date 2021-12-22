import React, { useState, useEffect } from 'react';
import { Add } from '@mui/icons-material';
import { Box, Typography, Grid, CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import api from '../../../services/api';
import Button from '../../../components/Button';
import Link from '../../../components/Link';
import PostCard from '../../../components/PostCard';

import Logo from '../../../assets/logo';
import JournalsEmptyImg from '../../../assets/journals-empty-img';
import { Entry } from '../../../interfaces/entry.interface';

const PostsHome: React.FC = () => {
  const navigate = useNavigate();
  const { journalId } = useParams();

  const [journalTitle, setJournalTitle] = useState<string>('');
  const [posts, setPosts] = useState<Entry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const hasPosts = posts.length;

  useEffect(() => {
    if (journalId) {
      const handleGetPosts = async () => {
        try {
          const {
            entries,
            journalTitle,
          }: { entries: Entry[]; journalTitle: string } = await api.get(
            `/journals/entries/${journalId}`
          );

          if (!Response) {
            throw new Error();
          }

          setPosts(entries);
          setJournalTitle(journalTitle);
        } catch (err) {
          toast.error(`Journal with ${journalId} id not found`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } finally {
          setIsLoading(false);
        }
      };
      handleGetPosts();
    }
  }, [journalId]);

  return (
    <Box component="section">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: hasPosts ? '30px' : '130px',
        }}
      >
        <Logo />
      </Box>
      {!!hasPosts && (
        <Box
          sx={{
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{ cursor: 'pointer', display: 'flex', flexDirection: 'row' }}
            onClick={() => navigate('/journals')}
          >
            <ArrowBackIosIcon sx={{ marginRight: '20px' }} />
            <Typography>{journalTitle}</Typography>
          </Box>

          <Button
            variant="outlined"
            startIcon={<Add />}
            onClick={() => navigate(`/journals/${journalId}/posts/create`)}
          >
            Add Note
          </Button>
        </Box>
      )}
      {isLoading ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          {!hasPosts ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box sx={{ marginBottom: '66px' }}>
                <Typography
                  sx={{
                    fontFamily: 'Abhaya Libre',
                    fontSize: 24,
                    fontWeight: 700,
                  }}
                >
                  {journalTitle}
                </Typography>
              </Box>
              <Box sx={{ marginBottom: '80px' }}>
                <JournalsEmptyImg />
              </Box>
              <Box>
                <Link href={`/journals/${journalId}/posts/create`}>
                  Create a note
                </Link>
              </Box>
            </Box>
          ) : (
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {posts.map((item, index) => (
                <Grid
                  sx={{ cursor: 'pointer' }}
                  item
                  xs={2}
                  sm={4}
                  md={3}
                  key={index}
                  onClick={() =>
                    navigate(`/jornals/${journalId}/posts/${item.id}`)
                  }
                >
                  <PostCard title={item.title} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      )}
    </Box>
  );
};

export default PostsHome;
