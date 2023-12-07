import StyledFooter from "./Footer.styled";
import { Container, Stack, Grid, TextField, Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { GrSend } from "react-icons/gr";

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="xl">
        <Grid className="footer__input--send" container>
          <Grid spacing={1.5} item>
            <Stack direction="row" spacing={2}>
              <MailOutlineIcon />
              <h2>Subscribe to Newsletter</h2>
            </Stack>
            <Stack direction="row" spacing={2} mt={2}>
              <TextField
                className="outlined-basic"
                id="outlined-basicc"
                label="Enter your name"
                variant="outlined"
              />
              <TextField
                className="outlined-basic"
                id="outlined-basicc"
                label="Enter your email"
                variant="outlined"
              />
              <Button variant="contained" endIcon={<GrSend />}>
                Send
              </Button>
            </Stack>
          </Grid>
          {/* Ảnh */}
          <Grid direction="row" spacing={3} mt={2}></Grid>
        </Grid>

        <Grid container mt={10} className="footer__detail">
          <Grid item xs={4} className="footer__detail--tittle">
            <h1>My Shop</h1>

            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate v elit imperdiet dolor tempor tristique. Pellentesque
              habitant
            </p>
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                  <FacebookIcon style={{ margin: "6px 0" }} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <TwitterIcon style={{ margin: "6px 0" }} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <InstagramIcon style={{ margin: "6px 0" }} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <FacebookIcon style={{ margin: "6px 0" }} />
                </a>
              </li>
            </ul>
          </Grid>

          <Grid item xs={8} className="footer__detail--links" container>
            <Grid item xs={3}>
              <ul>
                <li>About us</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact us</li>
              </ul>
            </Grid>
            <Grid item xs={3}>
              <ul>
                <li>Support</li>
                <li>Knowledge base</li>
                <li>Live chat</li>
              </ul>
            </Grid>
            <Grid item xs={3}>
              <ul>
                <li>Jobs</li>
                <li>Our team</li>
                <li>Leadership</li>
                <li>Privacy Policy</li>
              </ul>
            </Grid>
            <Grid item xs={3}>
              <ul>
                <li>Nordic Chair</li>
                <li>Kruzo Aero</li>
                <li>Ergonomic Chair</li>
              </ul>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          className="footer__address"
          direction={"row"}
          justifyContent={""}
        >
          <Grid item xs={6}>
            <p>
              Copyright ©2023. All Rights Reserved. — Designed with love by
              Untree.co Distributed By ThemeWagon
            </p>
          </Grid>
          <Grid item xs={6} className="footer__address--links">
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
