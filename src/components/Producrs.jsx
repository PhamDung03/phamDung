import { styled, Box, Grid, Container, Pagination, Stack } from "@mui/material";
import Product from "./Product";
import { useEffect, useState } from "react";
import { apiGetProducts } from "../services/products";
import Loading from "./Loading";
import { useHome } from "../providers/home-provider";
const Products = () => {
  const [product, setProduct] = useState([]);
  const { selectCategory } = useHome();
  const [metaData, setMetaData] = useState({
    limit: 8,
    page: 1,
    sreach: "",
  });
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiGetProducts(
      metaData.page,
      metaData.limit,
      metaData.sreach,
      selectCategory
    )
      .then((res) => {
        let data = res?.data;
        setProduct(data?.data);
        setTotal(data?.metadata?.total || 0);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [metaData , selectCategory]);

  const onChangePagination = (value) => {
    setMetaData({ ...metaData, page: value });
  };

  return (
    <StyledProducts>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {product.map((p, i) => (
            <Grid item sm={6} md={3}>
              <Product product={p} />
            </Grid>
          ))}
        </Grid>
        <Stack alignItems="center">
          {loading && <Loading />}
          <Pagination
            count={Math.ceil(total / metaData.limit)}
            onChange={(e, value) => onChangePagination(value)}
          />
        </Stack>
      </Container>
    </StyledProducts>
  );
};

const StyledProducts = styled(Box)({});

export default Products;
