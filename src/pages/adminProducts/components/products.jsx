import {
  styled,
  // Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Pagination,
  Rating,
  IconButton,
  Dialog,
  Box,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { apiDeleteProduct, apiGetProducts } from "../../../services/products";
import { formatImg } from "../../../utils/imgHelpers";
import ProductFrom from "./ProductsFrom";
import Button from "../../../components/Button";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [metaData, setMetaData] = useState({
    limit: 6,
    page: 1,
  });
  //   const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  //   const [reloadProducts, setReloadProducts] = useState(false);
  const [editPopup, setEditPoup] = useState(false);
  const [selectedProduct, setSelectProduct] = useState();
  const [reloadProducts, setReloadProducts] = useState(false);

  useEffect(() => {
    // setLoading(true);
    setTimeout(() => {
      apiGetProducts(metaData.page, metaData.limit)
        .then((res) => {
          let data = res?.data;
          setProducts(data?.data);
          setTotal(data?.metadata?.total || 0);
          //   setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          //   setLoading(false);
        });
    }, 500);
  }, [metaData, reloadProducts]);

  const handleChange = (event, value) => {
    console.log(event, value);
    setMetaData({ ...metaData, page: value });
  };

  const onClickEdit = (product) => {
    setEditPoup(true);
    setSelectProduct(product);
  };

  const onCloseEditPopup = () => {
    setEditPoup(false);
  };

  const refreshProducts = () => {
    setReloadProducts(!reloadProducts);
  };

  // Delete Product
  const onClickDelete = (product) => {
    console.log(product?.productId);
    apiDeleteProduct(product?.productId)
      .then((res) => {
        refreshProducts();
      })
      .catch((err) => console.log(err));
  };

  const onClickCreate = () => {
    setEditPoup(true);
    setSelectProduct();
  };

  return (
    <StyledProducts>
      <Box margin={"8px 0 0 44px"}>
        <Button
          textBg="var(--app-color)"
          text="Create new account"
          onClick={() => onClickCreate()}
        />
      </Box>
      <Typography align="center" variant="h5" m={"0 0 8px 0"}>
        Admin Products
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Info</TableCell>
            <TableCell>Star</TableCell>
            <TableCell>Categoty</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {products.map((product, id) => (
            <TableRow key={id}>
              <TableCell>{product?.productId}</TableCell>
              <TableCell>{product?.productName}</TableCell>
              <TableCell>{product?.productPrice}</TableCell>
              <TableCell>{product?.productInfo}</TableCell>
              <TableCell>
                <Rating value={product?.ratingStar} readOnly />
              </TableCell>
              <TableCell>{product?.categoryName}</TableCell>
              <TableCell>
                <img
                  src={formatImg(product?.productImage)}
                  alt=""
                  className="product_img"
                />
              </TableCell>
              <TableCell>
                <IconButton
                  onClick={() => onClickEdit(product)}
                  className="Button Button_Edit"
                >
                  Edit
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton
                  onClick={() => onClickDelete(product)}
                  className="Button Button_Delete"
                >
                  Delete
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* </TableContainer> */}

      {/* Phân Trang */}
      <Pagination
        count={Math.ceil(total / metaData.limit)}
        color="primary"
        onChange={handleChange}
        className="pagination"
      />

      {/* <Dialog open={createPopup} onClose={onCloseCreatePopup}></Dialog> */}

      <Dialog
        open={editPopup}
        onClose={onCloseEditPopup}
        PaperProps={{ sx: { width: "100%" } }}
      >
        <ProductFrom
          {...{ selectedProduct, onCloseEditPopup, refreshProducts }}
        />
      </Dialog>
    </StyledProducts>
  );
};

const StyledProducts = styled(TableContainer)({
  maxHeight: 600,
  tableLayout: "auto",
  ".product_img": {
    width: 48,
    height: 48,
    objectFit: "cover",
  },
  ".Button": {
    borderRadius: 5,
    color: "#fff",
    fontSize: 16,
  },
  ".Button_Edit": {
    backgroundColor: "#D6A132",
  },
  ".Button_Delete": {
    backgroundColor: "#AC4E3D",
  },
  ".css-1ex1afd-MuiTableCell-root": {
    padding: "6px 8px",
    border: "1px solid #000",
  },
  // css title table
  ".css-1ygcj2i-MuiTableCell-root": {
    padding: 8,
    border: "1px solid #000",
  },
  ".pagination": {
    margin: "8px 0 0 39% ",
  },
});

export default Products;
