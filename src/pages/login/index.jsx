import {
  styled,
  Box,
  Container,
  TextField,
  Stack,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Navbar, Footer, AppButton } from "../../components";
import { string, object } from "yup";
import { useFormik } from "formik";
import { login } from "../../services/accounts";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../providers/user-provider";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

let loginSchema = object({
  username: string().required(),
  password: string().required(),
});

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitLogin = (values) => {
    login(values)
      .then((res) => {
        console.log(res);
        navigate("/");
        setUser(res.data?.data);
      })
      .catch((err) => {
        console.log(err);
        formik.setErrors({ root: err?.response?.data?.msg });
      });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: onSubmitLogin,
    // validate: validate,
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <StyledLogin>
      <Navbar bgcolor="var(--app-color)" />
      <Container maxWidth="sm" className="container">
        <form className="login_from" onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <Typography className="from_title">Login</Typography>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={!!formik.errors.username}
              helperText={formik.errors.username}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
              value={formik.values.password}
              type={showPassword? "text" : "password"}
              onChange={formik.handleChange}
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
            {formik.errors.root && (
              <p style={{ color: "red" }}>{formik.errors.root}</p>
            )}

            <AppButton type="submit">Login</AppButton>
            <Link to="/signup">SignUp</Link>
          </Stack>
        </form>
      </Container>
      <Footer />
    </StyledLogin>
  );
};

const StyledLogin = styled(Box)({
  ".login_from": {
    width: "100%",
  },
  ".container": {
    height: "calc(100vh - 160px)",
    display: "flex",
    alignItems: "center",
  },
  ".error_text": {
    color: "red",
  },
});

export default Login;
