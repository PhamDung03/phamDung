import styled from "styled-components";

const Main = styled.div`
    .input_label{
    margin: 8px ;
    }
`

const StyledInput = styled.div`
    input{
        outline: none;
        width: 100%;
        padding: 8px;
        border-radius: 8px;
        box-sizing: border-box;
        border: 1px solid #888;
        box-shadow: 2px 1px #888;
    }
`

const StyledSelect = styled.select`
    width: 100%;
    background-color: #fff;
    padding: 8px;
    border-radius: 8px ;
    box-shadow: 2px 1px #888;
    outline: none;
`

export {StyledInput , StyledSelect , Main};