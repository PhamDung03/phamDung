import {CircularProgress , styled } from "@mui/material"

const Loading = () => {
    return <StyledCircularProgress  />
}; 

const StyledCircularProgress = styled(CircularProgress)({
    color: "var(--app-color)"
}); 

export default Loading; 

