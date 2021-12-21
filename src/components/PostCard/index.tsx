import React from 'react';
import { Box, Typography } from '@mui/material';

interface PostCardProps {
  title: string;
}

const CardStyles = {
  width: '100%',
  borderRadius: '4px',
  padding: '12px 10px',
  backgroundColor: '#FAF2EC',
  display: 'flex',
  minHeight: '178px',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  boxShadow: '-5px 5px 20px rgba(0, 0, 0, 0.12)',
};

const PostCard: React.FC<PostCardProps> = ({ title }) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ ...CardStyles, zIndex: 1 }}></Box>
      <Box
        sx={{
          ...CardStyles,
          position: 'absolute',
          top: '-4px',
          right: '-4px',
        }}
      >
        <Typography sx={{ fontSize: 20, fontWeight: 400, color: '#333438' }}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default PostCard;
