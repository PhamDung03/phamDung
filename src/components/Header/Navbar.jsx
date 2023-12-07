import { Link, useNavigate } from "react-router-dom";
import StyledHeader from "./Navbar.Styled";
import { Stack, Container, Badge } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useMediaQuery, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useUser } from "../../providers/user-provider";
import { HiOutlineLogout } from "react-icons/hi";

const Navbar = (props) => {
  const navigator = useNavigate();
  const isMobileView = useMediaQuery("(max-width:831px)");
  const onClickUser = () => {
    navigator("/login");
  };

  const { user, setUser } = useUser();
  const onClickLogout = () => {
    setUser();
  };

  return (
    <StyledHeader direction="row" justifyContent="space-between" {...props}>
      <Container className="navbar_box" maxWidth="xl">
        <h1 className="navbar_brand">My shop.</h1>

        <Stack direction="row">
          {!isMobileView && (
            <>
              <ul>
                <li className="navbar_list_item">
                  <Link to="/">Home</Link>
                </li>
                {/* Ẩn hiện Admin */}
                {user?.isAdmin === 1 && (
                  <li className="navbar_list_item">
                    <Link to="/admin">Admin</Link>
                  </li>
                )}
                <li className="navbar_list_item">
                  <Link>About us</Link>
                </li>
                <li className="navbar_list_item">
                  <Link>Blog</Link>
                </li>
                <li className="navbar_list_item">
                  <Link>Contact us</Link>
                </li>
              </ul>
              <Stack direction="row" spacing={4}>
                {!user ? (
                  <AccountCircleIcon onClick={onClickUser} />
                ) : (
                  <HiOutlineLogout
                    className="navbar_logout"
                    onClick={onClickLogout}
                  />
                )}

                <Badge
                  className="header__icon--shop"
                  badgeContent={1}
                  color="primary"
                >
                  <ShoppingCartIcon color="#fff" />
                </Badge>
              </Stack>
            </>
          )}
        </Stack>

        {isMobileView && (
          <IconButton>
            <Menu />
          </IconButton>
        )}
      </Container>
    </StyledHeader>
  );
};

export default Navbar;
