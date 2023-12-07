import { Container, Tabs, Tab, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { apiGetProductCategories } from "../../../services/products";
import { useHome } from "../../../providers/home-provider";
const Categories = () => {
  // const [value, setValue] = useState(0);
  const [categories, setCategories] = useState([]);
  const { selectCategory, setSelectCategory } = useHome();

  const handleChange = (event, newValue) => {
    setSelectCategory(newValue);
  };

  useEffect(() => {
    apiGetProductCategories()
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(selectCategory);

  return (
    <Container>
      <Stack alignItems="center">
        <Tabs value={selectCategory} onChange={handleChange}>
          {categories.map((category, i) => (
            <Tab
              label={category.categoryName}
              value={category.categoryId}
              key={category.categoryId}
            />
          ))}
        </Tabs>
      </Stack>
    </Container>
  );
};

export default Categories;
