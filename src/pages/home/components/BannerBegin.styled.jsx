import { Stack, styled } from "@mui/material";

const StyledBannerBegin = styled(Stack)({
  padding: "120px 0",
  "& .container": {
    ".banner__item": {
      height: 440,
      position: "relative",
      overflow: "hidden",
      ".banner1-img": {
        width: 400,
        height: 440,
        float: "right",
      },
      ".banner__item--text": {
        maxWidth: 320,
        position: "absolute",
        color: "#0f7173",
        h2: {
          fontWeight: 600,
          lineHeight: "48px",
          margin: "0 0 4px 0",
          fontSize: "40px",
        },
        a: {
          display: "inline-block",
          fontSize: 16,
          letterSpacing: 4,
          textTransform: "uppercase",
          padding: "8px 0",
          position: "relative",
          textDecoration: "none",
        },
        "a:after": {
          content: "''",
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "2px",
          transform: "scaleX(0) ",
          transformOrigin: "left",
          transition: "all 0.5s",
          backgroundColor: "#000",
        },
        "a:hover:after": {
          transform: "scaleX(1)",
        },
      },
    },
    // item first
    ".banner__item--first": {
      position: "relative",
      ".banner__item--img": {
        position: "absolute",
        left: 200,
      },
      ".banner__item--text": {
        left: 0,
        top: 160,
      },
    },

    // item middle
    ".banner__item--middle": {
      position: "relative",
      height: "100%",
      ".banner__item--img": {
        float: "left",
      },
      ".banner__item--text": {
        bottom: 50,
      },
    },

    // item end
    ".banner__item--end": {
      margin: "100px 0 0 0 ",
      position: "relative",
      ".banner-img": {
        // position: "absolute",
        width: 400,
        height: 440,
        float: "right",
      },
      ".banner__item--text": {
        position: "absolute",
        left: 80,
        top: 160,
      },
    },

    img: {
      maxWidth: "100%",
    },
  },
});

export default StyledBannerBegin;
