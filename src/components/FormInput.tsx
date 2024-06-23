// src/components/FormInput.tsx
import React from 'react';

interface FormInputProps {
    label: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, name, value, onChange, type = 'text' }) => {
    return (
        <div>
            <label htmlFor={name}>{label}:</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default FormInput;