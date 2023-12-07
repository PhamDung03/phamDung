import {
  styled,
  Box,
  Container,
  TextField,
  Stack,
  Typography,
  InputAdornment, 
  IconButton
} from "@mui/material";
import { Navbar, Footer } from "../../components";
import { AppButton } from "../../components";
import { useFormik } from "formik";
import { string, object } from "yup";
import { signup } from "../../services/accounts";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

let signupSchema = object({
  username: string().required(),
  fullName: string()
    .required()
    .matches("^[a-zA-Z0-9_.-]*$", "Tên không hợp lệ !"),
  email: string().email().required(),
  password: string().required(),
  password2: string().required(),

  // if(password !=== password2){

  // }
});

const validate = (values) =>{
  const error = {} ; 
  if(values.password !== values.password2){
    error.password2 = "Check password , please !"
  }
  return error ; 
}

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      fullName: "",
      email: "",
      password: "",
      password2: "",
    },
    validationSchema: signupSchema,
    validate, 
    onSubmit: (values) => {
      // console.log(values);
      signup(values)
        .then((res) => {
          console.log(res);
          navigate("/login");
        })
        .catch((err) => {
          formik.setErrors({ root: err?.response?.data?.message });
        });
    },
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <StyledSignup>
      <Navbar bgcolor="var(--app-color)" />
      <Container maxWidth="sm" className="container">
        <form onSubmit={formik.handleSubmit} className="signup_from">
          <Stack spacing={2}>
            <Typography className="from_title">Sign Up</Typography>
            <TextField
              id="outlined-basic"
              label="UserName"
              variant="outlined"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={!!formik.errors.username}
              helperText={formik.errors.username}
            />
            <TextField
              id="outlined-basic"
              label="FullName"
              variant="outlined"
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              error={!!formik.errors.fullName}
              helperText={formik.errors.fullName}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={!!formik.errors.email}
              helperText={formik.errors.email}
            />
            <TextField
              id="outlined-basic"
              label="PassWord"
              variant="outlined"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              type={showPassword? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={!!formik.errors.password}
              helperText={formik.errors.password}
            />
            <TextField
              id="outlined-basic"
              label="Enter the password"
              variant="outlined"
              name="password2"
              value={formik.values.password2}
              onChange={formik.handleChange}
              type={showPassword? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={!!formik.errors.password2}
              helperText={formik.errors.password2}
            />

            {formik.errors.root && (
              <p style={{ color: "red" }}>{formik.errors.root}</p>
            )}

            <AppButton type="submit">SignUp</AppButton>
          </Stack>
        </form>
      </Container>
      <Footer />
    </StyledSignup>
  );
};

const StyledSignup = styled(Box)({
  ".container": {
    height: "calc(100vh - 160px)",
    display: "flex",
    alignItems: "center",
    ".signup_from": {
      width: "100%",
    },
  },
});

export default SignUp;
