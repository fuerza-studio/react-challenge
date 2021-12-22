import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import api from '../../../services/api';
import Logo from '../../../assets/logo';
import { Entry } from '../../../interfaces/entry.interface';

const Post = () => {
  const navigate = useNavigate();
  const { journalId, postId } = useParams();
  const [post, setPost] = useState<Entry | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleGetPostData = async () => {
      try {
        const { entrie }: { entrie: Entry } = await api.get(
          `/journals/${journalId}/entries/${postId}`
        );

        if (!entrie) {
          throw new Error();
        }

        setPost(entrie);
      } catch (error) {
        toast.error(`Post with ${postId} id not found`, {
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
    handleGetPostData();
  }, [journalId, postId]);

  return (
    <Box component="section">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
        }}
        onClick={() => navigate(`/journals/${journalId}/posts`)}
      >
        <Logo />
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
        <>
          <Box
            sx={{
              marginBottom: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onClick={() =>
                navigate(
                  post?.id ? `/journals/${journalId}/posts` : '/journals'
                )
              }
            >
              <ArrowBackIosIcon sx={{ marginRight: '20px' }} />
              <Typography
                sx={{
                  fontFamily: 'Abhaya Libre',
                  fontWeight: 700,
                  fontSize: '24px',
                }}
              >
                {post?.title || '-'}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography sx={{ fontSize: '20px', wordBreak: 'break-word' }}>
              {post?.content || 'EMPTY'}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Post;
