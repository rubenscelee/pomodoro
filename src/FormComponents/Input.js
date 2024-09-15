const Input = ({type, name, labelText, placeholder, handleOnchange}) => {
    return (
        <div>
            {labelText && 
                <label htmlFor={name}>{labelText}</label>
            }
            <input 
                name={name} 
                id={name}  
                type={type} 
                placeholder={placeholder} 
                onChange={handleOnchange}
            />
        </div>
    );
}

export default Input;