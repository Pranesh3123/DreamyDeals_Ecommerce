import { useState } from 'react';

const Validation = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phoneNumber: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear the error for the field being edited
    setErrors({ ...errors, [name]: '' });
  };

  const ValidateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } 
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is not valid';
    }

    else if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    else if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
    } 
    else if (formData.phoneNumber.length !== 10 || !/^\d+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Enter a valid 10-digit Phone Number';
    }

    else if (!formData.newPassword) {
      newErrors.newPassword = 'Password is required';
    } 
    else if (formData.newPassword.length < 6) {
      newErrors.newPassword = 'Password must be at least 6 characters long';
    }

    else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }


    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return { formData, setFormData, errors, handleChange, ValidateForm };
};

export default Validation;
