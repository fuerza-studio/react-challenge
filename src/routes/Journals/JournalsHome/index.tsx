import React, { useState } from 'react';
import { Add } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Button from '../../../components/Button';
import Link from '../../../components/Link';
import JournalCard from '../../../components/JournalCard';

import Logo from '../../../assets/logo';
import JournalsEmptyImg from '../../../assets/journals-empty-img';

const JournalsHome: React.FC = () => {
  const navigate = useNavigate();
  const [journals] = useState([
    { id: '1', content: 'Journal 1' },
    { id: '2', content: 'Journal 2' },
    { id: '3', content: 'Journal 3' },
    { id: '4', content: 'Journal 4' },
    { id: '5', content: 'Journal 5' },
    { id: '6', content: 'Journal 6' },
  ]);

  const hasJournals = journals.length;

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
                onClick={() => navigate(`/jornals/${item.id}/posts`)}
              >
                <JournalCard
                  content={item.content}
                  index={index}
                  journalVariant="primary"
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default JournalsHome;
