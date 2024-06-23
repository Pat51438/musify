
import { useState } from 'react';

export const useForm = <T>(initialState: T) => {
    const [values, setValues] = useState<T>(initialState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const resetForm = (newValues: T) => {
        setValues(newValues);
    };

    return { values, handleChange, resetForm };
};