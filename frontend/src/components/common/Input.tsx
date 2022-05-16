import React from 'react';

const Input = (props: any) => {
    const { fieldName, register, placeholder, isRequired, type } = props
    return (
        <input type={type} placeholder={placeholder} {...register(fieldName, {required: {value: isRequired, message: 'Required field'}})}/>
    );
};
export default Input;