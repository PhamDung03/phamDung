import { Stack, styled } from "@mui/material";

const StyledNavbar = styled(Stack)({
    color: "white",
    "& .navbar_box": {
        display: "flex",
        justifyContent: "space-between" , 
        alignItems: "center",
        padding: "24px"
    },

    "& .navbar_brand": {
        fontSize: "32px", 
        fontWeight: "bold", 
        cursor: "pointer",
    }, 

    "& ul": {
        display: "flex" ,
    },

    "& ul li": {
        listStyle: "none",
    },

    "& ul li a": {
        color: "#bdc3c9",
        textDecoration: "none",
        fontSize: "20px",
        padding: "8px 24px",
        position: "relative" ,
    }, 

    "& ul li a::before":{
        content: "''",
        position: "absolute",
        top: 0, 
        left: 0,
        width: "100%",
        height: "2px",
        backgroundColor: "#fff",
        transform: "scaleX(0) ",
        transformOrigin: "left" ,
        transition: "all 0.5s" ,
    }, 

    "& ul li a::after":{
        content: "''",
        position: "absolute",
        bottom: 0, 
        left: 0,
        width: "100%",
        height: "2px",
        backgroundColor: "#fff",
        transform: "scaleX(0) ",
        transformOrigin: "right" ,
        transition: "all 0.5s" ,
    }, 

    "& ul li a:hover":{
        color: "#fff", 
    }, 

    "& ul li a:hover::before":{
        transform: "scaleX(1)",
    },

    "& ul li a:hover::after":{
        transform: "scaleX(1)",
    }, 
    ".navbar_logout":{
        fontSize: 24,
    }

});

export default StyledNavbar; 