import { Stack, styled } from "@mui/material";
const StyledBanner = styled(Stack)({
    height: "74vh",
    "& .banner__container":{
        display: "flex",
        justifyContent: "space-between" , 
        alignItems: "center",
        padding: "24px"
    }, 

    "& .text__title":{
        color: "#fff",
        width: 540
    }, 

    "& .text__title h1":{
        fontSize: 56,
        fontWeight: 700,
        marginBottom: 32,
    }, 

    "& .text__title p": {
        lineHeight: "32px" , 
        fontSize: "14px" , 
        color: "#b4acac",
    }, 

    "& .title__btn": {
        display: "flex",
    }, 

    "& .title__btn button": {
        padding: "12px 30px",
        margin: "8px 16px",
        borderRadius: "16px", 
    }, 

    "& .title__btn .title__btn--shop": {
        backgroundColor: "#FFFDD0",
        color: "#000"
    }, 

    "& .title__btn .title__btn--explore": {
        backgroundColor: "#426EB4",
        border: "2px solid #FFFDD0",
        color: "#fff"
    }


    
});

export default StyledBanner ; 