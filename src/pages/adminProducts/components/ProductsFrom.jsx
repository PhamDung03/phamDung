import {
  styled,
  Box,
  TextField,
  Stack,
  Typography,
  Autocomplete,
} from "@mui/material";
import { useFormik } from "formik";
import { object, string, number } from "yup";
import { AppButton } from "../../../components";
import { formatImg } from "../../../utils/imgHelpers";
import {
  apiCreateProduct,
  apiGetProductCategories,
  apiUpdateProduct,
} from "../../../services/products";
import { useEffect, useState } from "react";

let productSchema = object({
  productName: string(),
  productPrice: string(),
  productInfo: string(),
  productImage: string(),
  categoryId: object(),
});

const ProductFrom = (prop) => {
  const [categorys, setCategorys] = useState([]);
  const { selectedProduct, onCloseEditPopup, refreshProducts } = prop;

  const onSubmitProduct = (values) => {
    const newValues = {
      ...values,
      categoryId: values.categoryId.value
    }
    apiUpdateProduct(selectedProduct?.productId, newValues)
      .then((res) => {
        onCloseEditPopup();
        refreshProducts();
      })
      .catch((err) => console.log(err));
  };

  const onSubmitCreateProduct = (values) => {
    const newValues = {
      ...values,
      categoryId: values.categoryId.value
    }
    apiCreateProduct(newValues)
      .then((res) => {
        onCloseEditPopup();
        refreshProducts();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formatCategory = () => {
    return categorys.map((category) => ({
      value: category.categoryId,
      label: category.categoryName,
    }));
  };

  const test = () => {
    const result =  categorys.find(itme => {
      return itme.value == selectedProduct?.categoryId
    })
    console.log('result la :::', result)
    return result
  }

  const formik = useFormik({
    initialValues: {
      productName: selectedProduct?.productName || "",
      productPrice: selectedProduct?.productPrice || "",
      productInfo: selectedProduct?.productInfo || "",
      productImage: selectedProduct?.productImage || "",
      categoryId: selectedProduct?.categoryId ? test() : "",
    },

    validationSchema: productSchema,
    onSubmit: selectedProduct?.productId
      ? onSubmitProduct
      : onSubmitCreateProduct,
  });

  // call api for Category
  useEffect(() => {
    apiGetProductCategories()
      .then((res) => {
        const newData = (res?.data?.data || []).map((category) => ({
          value: category.categoryId,
          label: category.categoryName,
        }))
        setCategorys(newData || []);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(()=>{
    formik.setFieldValue('categoryId', test())
    formik.setValues({
      ...selectedProduct,
      categoryId: {label: 't', value: 1}
    })
  },[selectedProduct])

  console.log(formik.values)
  return (
    <StyleProductFrom>
      <Stack spacing={2} component="form" onSubmit={formik.handleSubmit}>
        <Typography align="center">
          {selectedProduct?.productId ? "Update product" : "Create new product"}
        </Typography>
        <TextField
          label="Product name"
          name="productName"
          placeholder="Enter product name"
          value={formik.values.productName}
          onChange={formik.handleChange}
          error={!!formik.errors.productName}
          helperText={formik.errors.productName}
        />
        <TextField
          label="Product Info"
          name="productInfo"
          placeholder="Enter product info"
          value={formik.values.productInfo}
          onChange={formik.handleChange}
          error={!!formik.errors.productInfo}
          helperText={formik.errors.productInfo}
        />
        <TextField
          label="Product price"
          name="productPrice"
          placeholder="Enter product price"
          value={formik.values.productPrice}
          onChange={formik.handleChange}
          error={!!formik.errors.productPrice}
          helperText={formik.errors.productPrice}
        />

        <Autocomplete
          // disablePortal
          id="combo-box-demo"
          name="categoryId"
          options={categorys}
          sx={{ width: "100%" }}
          onChange={(e, newValue)=>{
            console.log(newValue)
            // formik.handleChange(newValue)
            formik.handleChange(e)
            formik.setFieldValue('categoryId', newValue)
          }}
          // onChange={formik.handleChange}
          error={!!formik.errors.categoryId}
          value={formik.values.categoryId}
          // inputValue={formik.values.categoryId}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Category"
            />
          )}
        />

        <label className="product_img" htmlFor="file_img">
          <img
            src={formatImg(formik.values.productImage)}
            alt="img"
            id="product_img_preview"
          />
        </label>

        <input
          type="file"
          id="file_img"
          onChange={(e) => {
            console.log(e.target?.files[0]);
            console.log(e.target.files);
            var reader = new FileReader();
            reader.onload = function (e) {
              let productImg = document.getElementById("product_img_preview");
              productImg.setAttribute("src", e.target.result);
            };
            reader.readAsDataURL(e.target?.files[0]);
            formik.setFieldValue("productImage", e.target?.files[0]);
          }}
        />

        <AppButton type="submit">Submit</AppButton>
      </Stack>
    </StyleProductFrom>
  );
};

const StyleProductFrom = styled(Box)({
  padding: 40,
  ".product_img": {
    width: "100%",
    height: 248,
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    cursor: "pointer",
  },
  "#file_img": {
    display: "none",
  },
});

export default ProductFrom;
