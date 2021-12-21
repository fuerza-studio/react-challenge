import React, { useState } from 'react';
import { Add } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import Button from '../../../components/Button';
import Link from '../../../components/Link';
import PostCard from '../../../components/PostCard';

import Logo from '../../../assets/logo';
import JournalsEmptyImg from '../../../assets/journals-empty-img';

const PostsHome: React.FC = () => {
  const navigate = useNavigate();
  const [posts] = useState([
    { id: '1', content: 'Post 1' },
    { id: '2', content: 'Post 2' },
    { id: '3', content: 'Post 3' },
    { id: '4', content: 'Post 4' },
    { id: '5', content: 'Post 5' },
    { id: '6', content: 'Post 6' },
  ]);

  const journalTitle = 'HTML';
  const hasPosts = posts.length;

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
            onClick={() => navigate('/journals/123123/posts/23123/create')}
          >
            Add Note
          </Button>
        </Box>
      )}
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
              <Link href="/journals/123123/posts/23123/create">
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
                onClick={() => navigate(`/jornals/123/posts/${item.id}`)}
              >
                <PostCard title={item.content} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default PostsHome;
