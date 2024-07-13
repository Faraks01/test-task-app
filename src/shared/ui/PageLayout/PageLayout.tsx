import type {FC} from "react";
import type {PageLayoutProps} from "./PageLayout.types.tsx";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const PageLayout: FC<PageLayoutProps> = ({title, children}) => {
  return (
    <Box display='flex'>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            flexGrow={1}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

      <Box component="main" width='100%' p={3}>
        <Toolbar/>
        {children}
      </Box>
    </Box>
  );
}

export default PageLayout;