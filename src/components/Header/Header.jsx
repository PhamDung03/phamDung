import Banner from "./Banner";
import Navbar from "./Navbar";
import StyledHeader from "./Header.Styled";

const Header = () => {
    return(
    <StyledHeader>
        <Navbar/>
        <Banner/>
    </StyledHeader>
    )
}

export default Header ; 