// import './form-input.styles.scss';
import { FormInputContainer, GroupContainer, FormInputLabel } from './form-input.styles';
import React from 'react';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <GroupContainer>
        <FormInputContainer  onChange={handleChange} {...otherProps}/>
        {
            label ? 
            (<FormInputLabel className = {otherProps.value.length ? 'shrink ' : '' }>
                {label}
            </FormInputLabel>)
            : null
        }
    </GroupContainer>
)

export  default FormInput;