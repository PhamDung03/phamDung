import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import BannerBegin from "./components/BannerBegin";
import { styled, Box } from "@mui/material";
import { Products } from "../../components";
import Categories from "./components/Categories";
import { HomeProvider } from "../../providers/home-provider";
const Home = () => {
  return (
    <HomeProvider>
      <StyledHome>
        <Header />
        <BannerBegin />
        <Categories />
        <Products />
        <Footer />
      </StyledHome>
    </HomeProvider>
  );
};

const StyledHome = styled(Box)({});

export default Home;
