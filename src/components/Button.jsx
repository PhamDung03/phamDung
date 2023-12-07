import StyledButton from "./Button.Styled";

const Button = (props) => {
    const { textBg = 'gray' , text = 'Button', margin = 0 , onClick , type} = props;
    return(
        <StyledButton className="Button_Account" style={{backgroundColor: textBg , margin: margin}} onClick={onClick} type={type} >
            {text}
        </StyledButton>
    )
}

export default Button ; 