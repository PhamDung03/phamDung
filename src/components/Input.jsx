import {StyledInput , StyledSelect , Main} from "./Input.Styled";

const Input = ({label , placeholder , type="text" , options=[] , value , onChange = () => {}}) =>{
    
   
    return(
        <Main>
            <p className="input_label">{label}</p>
            {type === "text" &&(
                <StyledInput>
                    <input placeholder={placeholder} value={value} onChange={onChange}/>
                </StyledInput>
            )}

            {type === "select" && (
                <StyledSelect 
                    value={value} 
                    onChange={onChange}
                >
                    {options.map((option,i) => (
                        <option key={i} value={option?.value} >{option?.label}</option>
                    ))}
                </StyledSelect>
            )}

        </Main>
    )
}

export default Input; 