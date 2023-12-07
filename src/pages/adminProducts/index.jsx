import { Products } from "./components";
import { styled, Box } from "@mui/material";

const AdminProducts = () => {
 
  return (
    <StyleAdminProducts>
      <Products />
    </StyleAdminProducts>
  );
};

const StyleAdminProducts = styled(Box)({});

export default AdminProducts;
