import { Typography, Box } from "@mui/material";
import { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <Box>
        <Typography variant="h2" align="center">
          About Us
        </Typography>
        <Typography variant="h6" sx={{ mt: 4 }}>
          ""The electronic citizen ID card was first used on December 1, 1999,
          following research from 1995 to 1997. The Finnish National Electronic
          Identification Card is the ambitious initiative. The existing citizen
          identification card will be replaced by a smart card that has new
          technical capabilities in addition to carrying out all the functions
          of the current identity card. The goal of the FINEID card is to act as
          a global source of authentication and identity. It gains from
          enhancing a current citizen ID card. The government thus saw the
          implementation of the eID card as only a continuation of its duty to
          provide the foundation for the information society as well as to
          improve and support electronic services.
        </Typography>
        <Typography variant="h6" sx={{ mt: 4 }}>
          The website developed for this case study demonstrates the citizen
          portal to apply for the Finnish Electronic Identification (FINEID)
          Card. The homepage demonstrates the portal entry for the citizens to
          apply for the FINEID card. About us section contains the information
          about the FINEID card, it's scope and the necessary contacts. All the
          possible queries are answered in the FAQ section. A citizen has the
          option to provide necessary credentials in the form provided in order
          for them to obtain a virtual eID card personalized for them. This card
          can be used in acquiring different services that requires insight of
          the identity of a citizen.""
        </Typography>
      </Box>
    </Fragment>
  );
};

export default About;
