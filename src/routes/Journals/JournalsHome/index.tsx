import React, { useState, useEffect } from 'react';
import { Add } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

import api from '../../../services/api';
import { useUser } from '../../../context/user';
import Button from '../../../components/Button';
import Link from '../../../components/Link';
import JournalCard from '../../../components/JournalCard';

import Logo from '../../../assets/logo';
import JournalsEmptyImg from '../../../assets/journals-empty-img';
import { Journal } from '../../../interfaces/journal.interface';

const JournalsHome: React.FC = () => {
  const navigate = useNavigate();
  const { getUserData } = useUser();

  const [journals, setJournals] = useState<Journal[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const hasJournals = journals.length;

  const userData = getUserData();
  const userId = userData?.id || '';

  useEffect(() => {
    if (userId) {
      const handleGetJournals = async () => {
        try {
          const { journals }: { journals: Journal[] } = await api.get(
            `/journals/${userId}`
          );

          if (!journals) {
            throw new Error();
          }

          setJournals(journals);
        } catch (err) {
          toast.error('Please, try again later!', {
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
      handleGetJournals();
    }
  }, [userId]);

  return (
    <Box component="section">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: hasJournals ? '40px' : '250px',
        }}
      >
        <Logo />
        {!!hasJournals && (
          <Button
            variant="outlined"
            startIcon={<Add />}
            onClick={() => navigate('/journals/create')}
          >
            Add Journal
          </Button>
        )}
      </Box>
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
          {!hasJournals ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box sx={{ marginBottom: '80px' }}>
                <JournalsEmptyImg />
              </Box>
              <Box>
                <Link href="create">Create a journal</Link>
              </Box>
            </Box>
          ) : (
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {journals.map((item, index) => (
                <Grid
                  sx={{ cursor: 'pointer' }}
                  item
                  xs={2}
                  sm={4}
                  md={3}
                  key={index}
                  onClick={() => navigate(`/journals/${item.id}/posts`)}
                >
                  <JournalCard
                    content={item.title}
                    index={index}
                    journalVariant="primary"
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      )}
    </Box>
  );
};

export default JournalsHome;
