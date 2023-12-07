import { Stack, styled } from "@mui/material";
import baby from "../../img/img5.png"; 

const StyledHeader = styled(Stack)({
    background: `#4682B4 url('${baby}') no-repeat center center`, 
    backgroundSize: "cover", 
})

export default StyledHeader; 