import type { FC } from 'react';
import type { PageLayoutProps } from './PageLayout.types.tsx';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';

const PageLayout: FC<PageLayoutProps> = ({ title, children }) => {
  return (
    <Box display="flex">
      <AppBar component="nav">
        <Toolbar>
          <Stack direction="row" alignItems="center" spacing={3}>
            <Button component={Link} to="/" variant="outlined">
              <Typography variant="h3" fontWeight={700} color="white">
                HOME
              </Typography>
            </Button>

            <Typography variant="h6" component="div" flexGrow={1}>
              {title}
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box component="main" width="100%" p={3}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default PageLayout;
