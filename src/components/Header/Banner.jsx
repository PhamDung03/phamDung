import { Container, Button, Grid } from "@mui/material";
import StyledBanner from "./Banner.styled";

const Banner = () => {
  return (
    <StyledBanner direction="row">
      <Container className="banner__container" maxWidth="xl">
        <Grid container>
          <Grid className="text__title" item md={5}>
            <h1>Diverse modern style clothing</h1>

            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique
            </p>

            <div className="title__btn">
              <Button variant="contained" className="title__btn--shop">
                Shop now
              </Button>
              <Button variant="contained" className="title__btn--explore">
                Explore
              </Button>
            </div>
          </Grid>
          <Grid md={7}>
            <img src="" alt="" />
          </Grid>
        </Grid>
      </Container>
    </StyledBanner>
  );
};

export default Banner;
