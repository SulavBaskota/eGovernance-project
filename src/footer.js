import { Container, Box, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <Paper
        sx={{
          height: 60,
          display: "flex",
          alignItems: "center",
          backgroundColor: "#ced2d8",
        }}
      >
        <Container maxWidth="xl">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
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
            <Typography variant="body1">
              By Phanindra Nath Panta | Sulav Baskota | Suyog Pradhan
            </Typography>
          </Stack>
        </Container>
      </Paper>
    </Box>
  );
};

export default Footer;
