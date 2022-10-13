import {
  Grid,
  Box,
  TextField,
  Typography,
  FormLabel,
  Button,
  CardMedia,
  Paper,
} from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const Apply = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [citizenNumber, setCitizenNumber] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const dob_string =
      " " +
      formData.get("day") +
      "/" +
      formData.get("month") +
      "/" +
      formData.get("year");
    setFirstName(formData.get("firstname"));
    setLastName(formData.get("lastname"));
    setCitizenNumber(formData.get("citizenship_number"));
    setAddress(formData.get("address"));
    setDob(dob_string);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item container xs={6} spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <BadgeIcon sx={{ fontSize: 50 }} color="primary" />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              Enter Your Details
            </Typography>
          </Grid>
          <Grid item container xs={12} spacing={1}>
            <Grid item xs={6}>
              <TextField fullWidth name="firstname" label="Firstname" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth name="lastname" label="Lastname" />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth name="phone_number" label="Phone Number" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="citizenship_number"
              label="Citizenship Number"
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel>Date of Birth</FormLabel>
          </Grid>
          <Grid item container xs={12} spacing={1}>
            <Grid item xs={4}>
              <TextField fullWidth name="day" label="Day" />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth name="month" label="Month" />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth name="year" label="Year" />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                id="gender"
                value={gender}
                label="Gender"
                onChange={handleChange}
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"others"}>Others</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={3}
              name="address"
              label="Address"
            />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="contained" type="submit">
                Generate Card
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={6}
          alignItems="center"
          justifyContent="flex-end"
        >
          <Box sx={{ height: 250, width: 400, border: 1, borderRadius: 1 }}>
            <Paper sx={{ backgroundColor: "#4287f5" }}>
              <Typography variant="h4" align="center">
                FINEID
              </Typography>
            </Paper>
            <Grid container spacing={1} alignItems="center" mt={0.2}>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  image="/assests/profile.png"
                  height="180"
                  width="100"
                  alt="user image"
                />
              </Grid>
              <Grid item container xs={7} spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="body1">
                    Name:{" " + firstname + " " + lastname}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">DOB:{dob}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">Gender: {gender}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">CTN: {citizenNumber} </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">Add: {address}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Apply;
