import { styled, Box } from "@mui/material";

const AdminStyled = styled(Box)({
  // css main page admin
  ".container": {
    margin: "40px 0",
    ".container_left": {
      ".box": {
        ".item": {
          margin: "8px 0",
          textAlign: "center",
          h3: {
            border: "1px solid #848080",
            padding: "16px",
            width: "80%",
            color: "#848080",
            cursor: "pointer",
          },
        },
      },
    },
    ".container_right": {
      marginTop: "45px",
      ".box_top": {
        marginBottom: "8px",
        border: "1px solid #848080",
        borderRadius: "8px",
        height: "10vh",
        ".MuiFormControl-root": {
          width: "50%",
          height: "62px",
          margin: "10px 0 0 24px",
          ".MuiInputBase-root": {
            height: "50px",
          },
        },
        ".MuiButtonBase-root": {
          backgroundColor: "#2DBF64",
          width: "10%",
          height: "64%",
          margin: "10px 0 0 24px",
        },
      },
      ".box_bottom": {
        border: "1px solid #848080",
        borderRadius: "8px",
        height: "calc(80vh)",
      },
    },
    ".item_detail": {
      fontSize: "24px",
      color: "var(--app-color)",
    },
  },
});

export default AdminStyled;
