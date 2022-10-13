import { Typography, Box } from "@mui/material";
import { Fragment } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const FAQ = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <Fragment>
      <Box>
        <Typography variant="h2" align="center">
          Frequently Asked Questions
        </Typography>
        <Box paddingTop={4}>
          <Accordion
            expanded={expanded}
            onChange={() => setExpanded(!expanded)}
            sx={{ boxShadow: 10 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                What is the application process for obtaining FINEID?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                <b>Step 1:</b> Initially, the applicants need to submit an
                application for an ID card through the FINEID website or a
                police e-service.
              </Typography>
              <Typography variant="body1" mt={1}>
                <b>Step 2:</b> Initially, the applicants need to submit an
                application Next, the application will need to be verified,
                which will be done by taking the person’s valid ID card or a
                passport.
              </Typography>
              <Typography variant="body1" mt={1}>
                <b>Step 3:</b> Initially, the applicants need to submit an
                application Following this, the applicant will have to make
                payment, which can be done through the use of online banking
                services.
              </Typography>
              <Typography variant="body1" mt={1}>
                <b>Step 4:</b> Initially, the applicants need to submit an
                application In case the person is not identified, he/she will
                have to visit the authority in person to establish specimen
                signature.
              </Typography>
              <Typography variant="body1" mt={1}>
                <b>Step 5:</b> Initially, the applicants need to submit an
                application After everything is completed, the identity card can
                be collected from an agreed collection point. The notification
                will be provided through message or email.
              </Typography>
              <Typography variant="body1" mt={1}>
                <b>Step 6:</b> Initially, the applicants need to submit an
                application Finally, the activation code will be delivered to
                the applicant’s address within two weeks of submitting the
                application.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ boxShadow: 10 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                What is FINEID?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                FINEID can be thought of as an Electronic National
                Identification card which serves as a universal source of
                identification and authentication. It is a cumulative service
                platform, the primary purpose of which is to provide platform
                for citizens to access e-government services through simplistic
                manners.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ boxShadow: 10 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                What is the cost for getting a FINEID?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                As of 2015, the initial cost for getting a FINEID card is EUR
                55.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ boxShadow: 10 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                How long is the card valid for?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                The card is valid for 3 years and the renewal charge is EUR 29.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ boxShadow: 10 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                What services does the FINEID provide?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                The FINEID issues features related to digital signature,
                electronic keys for access, data encryption for secure data
                transfer and associating all of the customers cards for any
                payment of any related charges.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Fragment>
  );
};

export default FAQ;
