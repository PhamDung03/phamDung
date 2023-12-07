import { Stack, styled } from "@mui/material";

const StyledFooter = styled(Stack)({
  margin: "100px 0 0 0",
  // backgroundColor: "#333",
  "& .footer__detail": {
    padding: "0 0 80px 0",
    borderBottom: "1px solid #000",
  },

  "& .footer__input--send": {
    "& .outlined-basic .MuiInputBase-root": {
      borderRadius: "16px",
    },
  },

  "& .footer__detail .footer__detail--tittle": {
    h1: {
      marginBottom: 16,
    },

    p: {
      lineHeight: 2.5,
      margin: "0 0 1.5rem 0",
      fontSize: 16,
    },
  },

  "& .footer__detail .footer__detail--tittle ul": {
    display: "flex",
    li: {
      margin: "2px",
      display: "inline-block",
    },
    "li a": {
      width: "40px",
      height: "40px",
      lineHeight: "40px",
      textAlign: "center",
      display: "inline-block",
      background: "#dce5e4",
      color: "#4682B4",
      borderRadius: "50%",
    },
  },

  "& .footer__detail .footer__detail--links": {
    padding: "0 24px",
    margin: "60px 0 0 0 ",
    "ul li": {
      listStyle: "none",
      fontSize: "18px",
      marginBottom: 16,
      color: "#838181",
    },
  },
  "& .footer__address": {
    padding: "24px 0 0 0 ",
    ".footer__address--links": {
      textAlign: "right",
      ul: {
        display: "flex",
        listStyle: "none",
        justifyContent: "flex-end",
        li: {
          margin: "0 16px",
        },
      },
    },
  },
});

export default StyledFooter;
