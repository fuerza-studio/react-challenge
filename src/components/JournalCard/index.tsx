import React from 'react';
import {
  styled,
  Box,
  BoxProps,
  Typography,
  TypographyProps as MaterialTypographyProps,
} from '@mui/material';

interface JournalCardProps extends BoxProps {
  journalVariant?: 'primary' | 'secondary';
  content?: string;
  index?: number;
}

interface TypographyProps extends MaterialTypographyProps {
  journalVariant?: 'primary' | 'secondary';
  index?: number;
}

const RightBox = styled(Box)<JournalCardProps>(
  ({ theme, journalVariant, index = 0 }) => ({
    borderRadius: '0px 16px 16px 0px',
    padding: '10px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: journalVariant === 'primary' ? '160px' : '260px',
    height: journalVariant === 'primary' ? '200px' : '330px',
    backgroundColor:
      journalVariant === 'primary'
        ? index % 2 === 0
          ? theme.palette.secondary.light
          : theme.palette.secondary.dark
        : 'transparent',
    boxShadow: `inset 0px -4px 4px ${
      journalVariant === 'primary'
        ? index % 2 === 0
          ? theme.palette.secondary.light
          : theme.palette.secondary.dark
        : 'rgba(0, 0, 0, 0.25)'
    }, inset -2px -2px 2px rgba(0, 0, 0, 0.1)`,
  })
);

const LeftBox = styled(Box)<JournalCardProps>(({ journalVariant, theme }) => ({
  borderRadius: '2px 0px 0px 2px',
  minWidth: journalVariant === 'primary' ? '12px' : '19px',
  height: journalVariant === 'primary' ? '200px' : '330px',
  backgroundColor:
    journalVariant === 'primary' ? theme.palette.secondary.main : 'transparent',
  boxShadow: 'inset 3px -3px 2px rgb(0 0 0 / 5%), 4px 0px 4px rgb(0 0 0 / 10%)',
}));

const Content = styled(Typography)<TypographyProps>(
  ({ index = 0, journalVariant }) => ({
    fontSize: 24,
    fontFamily: 'Abhaya Libre',
    fontWeight: 700,
    color:
      journalVariant === 'primary'
        ? index % 2 === 0
          ? '#000'
          : '#fff'
        : '#000',
  })
);

const JournalCard: React.FC<JournalCardProps> = ({
  journalVariant = 'primary',
  content = 'Card content',
  index = 0,
  ...rest
}) => {
  return (
    <Box sx={{ display: 'flex', cursor: 'pointer' }} {...rest}>
      <LeftBox journalVariant={journalVariant} />
      <RightBox
        journalVariant={journalVariant}
        index={index}
        sx={{ wordBreak: 'break-all' }}
      >
        <Content journalVariant={journalVariant} index={index}>
          {content}
        </Content>
      </RightBox>
    </Box>
  );
};

export default JournalCard;
