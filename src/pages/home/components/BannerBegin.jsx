import { Stack, Container, Grid } from "@mui/material";
import StyledBannerBegin from "./BannerBegin.styled";
import banner1 from "../../../img/banner1.jpg";
import banner2 from "../../../img/Giay1.webp";
import banner3 from "../../../img/banner4.jpg"
const BannerBegin = () => {
  return (
    <StyledBannerBegin>
      <Container maxWidth="lg" className="container">
        
        <Grid className="row" container>

        <Grid item lg={7} m={"0 0 0 30%"}>
            <Stack className="banner__item banner__item--first">
              <div className="banner__item--img">
                <img src={banner1} alt="" className="banner1-img" />
              </div>

              <div className="banner__item--text">
                <h2>Clothing Collections 2024</h2>
                <a href="/">SHOP NOW</a>
              </div>
            </Stack>
          </Grid>

          <Grid item lg={5} mt="-75px">
            <Stack className="banner__item banner__item--middle">
              <div className="banner__item--img">
                <img src={banner2} alt="" className="banner2-img" />
              </div>

              <div className="banner__item--text">
                <h2>Accessories</h2>
                <a href="/">SHOP NOW</a>
              </div>
            </Stack>
          </Grid>
          <Grid item lg={7} >
            <Stack className="banner__item banner__item--end">
              <div className="banner__item--img">
                <img src={banner3} alt="" className="banner-img" />
              </div>

              <div className="banner__item--text">
                <h2>Shoes Spring 2024</h2>
                <a href="/">SHOP NOW</a>
              </div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </StyledBannerBegin>
  );
};

export default BannerBegin;
