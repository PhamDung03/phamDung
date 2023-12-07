import { styled, Box, Typography , Rating } from "@mui/material";
import { formatImg } from "../utils/imgHelpers";

const Product = ({ product }) => {
  return (
    <StyledProduct>
      <img src={formatImg(product.productImage)} alt="" />
      <Rating value={product.ratingStar || 0} readOnly/>
      <Typography>{product.productName}</Typography>
      <Typography>{product.productPrice}</Typography>
    </StyledProduct>
  );
};

const StyledProduct = styled(Box)({
  img: {
    width: "100%",
  },
});

export default Product;
