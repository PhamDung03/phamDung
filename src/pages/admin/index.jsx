import { Footer, Navbar } from "../../components";
import { Container, Stack, Grid, Box, TextField, Button } from "@mui/material";
import AdminStyled from "./adminStyled";
import { useState } from "react";
import AdminAccount from "../adminAccount";
import { Navigate } from "react-router-dom";
import { useUser } from "../../providers/user-provider";
import AdminProducts from "../adminProducts";

const Admin = () => {
  const [select, setSelect] = useState(0);
  const [manufaturer, setManufaturer] = useState(0);
  const { user } = useUser();

  if (user?.isAdmin !== 1) {
    return <Navigate to={"/login"} />;
  }
  const menus = [
    { value: 0, label: "Manufaturer" },
    { value: 1, label: "Category" },
    { value: 2, label: "Product" },
    { value: 3, label: "Account" },
  ];

  const productMenus = [
    { value: 0, label: "Hats" },
    { value: 1, label: "Shirts" },
    { value: 2, label: "Shoes" },
    { value: 3, label: "Pants" },
  ];

  const Content = () => {
    switch (select) {
      case 0:
        return <h1>Tab 3</h1>;
      case 1:
        return <h1>Tab 1</h1>;
      case 2:
        return <AdminProducts />;
      case 3:
        return <AdminAccount />;

      default:
        break;
    }
  };

  const Manufaturer = () => {
    switch (manufaturer) {
      case 0:
        return <h1>Tab1</h1>;
      case 1:
        return <h1>Tab2</h1>;
      case 2:
        return <h1>Tab3</h1>;
      case 3:
        return <h1>Tab4</h1>;

      default:
        break;
    }
  };

  return (
    <AdminStyled>
      <Navbar bgcolor="var(--app-color)" />
      <Container maxWidth="xl" className="container">
        <Grid container spacing={2}>
          <Grid item xs={3} className="container_left">
            <Box className="box box_cotegory">
              <h1 className="item_detail">Danh Mục</h1>
              <Stack className="item item_cotegory">
                {menus.map((menu) => {
                  return (
                    <h3
                      onClick={() => setSelect(menu.value)}
                      style={{
                        color: select === menu.value ? "#000" : "#848080",
                        fontSize: "18px",
                      }}
                      key={menu.value}
                    >
                      {menu.label}
                    </h3>
                  );
                })}
              </Stack>
            </Box>

            <Box className="box box_manufaturer">
              <h1 className="item_detail">Manufaturer</h1>
              <Stack className="item item_manufaturer">
                {productMenus.map((product) => {
                  return (
                    <h3
                      onClick={() => {
                        setManufaturer(product.value);
                      }}
                      style={{
                        color:
                          manufaturer === product.value ? "#000" : "#848080",
                      }}
                      key={product.value}
                    >
                      {product.label}
                    </h3>
                  );
                })}
              </Stack>
            </Box>

            <Box>
              <h1 className="item_detail">Categorys</h1>
              <Stack></Stack>
            </Box>
          </Grid>

          <Grid item xs={9} className="container_right">
            {/* Thanh Sreach */}
            <Stack className="box_top" direction="row">
              <TextField
                id="outlined-basic"
                label="Sreach"
                variant="outlined"
              />
              <Button variant="contained">Sreach</Button>
            </Stack>

            {/* Table details */}
            <Stack className="box_bottom">
              <Content></Content>
              {/* <Manufaturer></Manufaturer> */}
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </AdminStyled>
  );
};

export default Admin;
