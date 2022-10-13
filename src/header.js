import {
  Container,
  Box,
  Button,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ position: "fixed", top: 0, left: 0, right: 0 }}>
      <Paper
        elevation={4}
        sx={{
          height: 60,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="xl">
          <Stack direction="row" justifyContent="space-between">
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                textTransform: "none",
                color: "inherit",
              }}
            >
              FINEID | Case Study
            </Typography>
            <Stack direction="row" justifyContent="flex-end" spacing={1}>
              <Button component={Link} to="/">
                Home
              </Button>
              <Button component={Link} to="/about-us">
                About us
              </Button>
              <Button component={Link} to="/faq">
                FAQ
              </Button>
              <Button variant="contained" component={Link} to="/apply">
                Apply
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Paper>
    </Box>
  );
};

export default Header;
