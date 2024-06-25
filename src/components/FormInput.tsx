import React from 'react';
import styled from 'styled-components';

interface FormInputProps {
    label: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, name, value, onChange, type = 'text' }) => {
    return (
        <FormGroup>
            <FormLabel htmlFor={name}>{label}:</FormLabel>
            <FormInputField
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
        </FormGroup>
    );
};

export default FormInput;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`;

const FormLabel = styled.label`
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
`;

const FormInputField = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s;

    &:focus {
        border-color: #007BFF;
        outline: none;
    }

    &::placeholder {
        color: #999;
    }
`;
