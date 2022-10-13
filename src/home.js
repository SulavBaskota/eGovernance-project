import {
  Button,
  Typography,
  Card,
  CardActions,
  CardMedia,
  CardContent,
} from "@mui/material";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <Card sx={{ maxWidth: "md" }}>
        <CardMedia
          component="img"
          height="100%"
          image="/assests/id_card.jpg"
          alt="welcome"
        />
        <CardContent>
          <Typography variant="h4">
            Welcome To FINEID Registration Portal
          </Typography>
          <Typography variant="body1">
            Now you can easily register your FINEID card using this portal
            without having to visit your local police station.
          </Typography>
          <Typography variant="body1">
            So what are you waiting for? Get yours registered today using the
            link below.
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="outlined" component={Link} to="/faq">
            Learn more
          </Button>
          <Button variant="contained" component={Link} to="/apply">
            Apply
          </Button>
        </CardActions>
      </Card>
    </Fragment>
  );
};

export default Home;
