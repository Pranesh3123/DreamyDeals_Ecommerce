import React from 'react';
import './Register.css';
import { SiMinutemailer } from 'react-icons/si';
import { RiLockPasswordLine, RiLockPasswordFill } from 'react-icons/ri';
import { FiSmartphone } from 'react-icons/fi';
import { PiUserFocusBold } from 'react-icons/pi';
import Validation from './Validation';

const Register = () => {
  const { formData, errors, handleChange, ValidateForm } = Validation();
  console.log(formData);

  return (
    <div className='rsection'>
      <div className="rform-box">
        <div className="form-value">
          <h2>REGISTRATION</h2>
          {errors.email && <span className='error'>{errors.email}</span>}
          {errors.name && <span className='error'>{errors.name}</span>}
          {errors.phoneNumber && <span className='error'>{errors.phoneNumber}</span>}
          {errors.newPassword && <span className='error'>{errors.newPassword}</span>}
          {errors.confirmPassword && <span className='error'>{errors.confirmPassword}</span>}
          <div className="inputbox">
            <SiMinutemailer className='licons' />
            <input type="email" name='email' value={formData.email} onChange={handleChange} autoComplete='off' required />
            <label htmlFor="email">Email-ID</label>
          </div>
          <div className="inputbox">
            <PiUserFocusBold className="licons" />
            <input type="text" name='name' value={formData.name} onChange={handleChange} autoComplete='off' required />
            <label htmlFor="name">Name</label>
          </div>
          <div className="inputbox">
            <FiSmartphone className="licons" />
            <input type="text" name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} autoComplete='off' required />
            <label htmlFor="phoneNumber">Phone number</label>
          </div>
          <div className="inputbox">
            <RiLockPasswordLine className="licons" />
            <input type="password" name='newPassword' value={formData.newPassword} autoComplete='off' onChange={handleChange} required />
            <label htmlFor="newPassword">New Password</label>
          </div>
          <div className="inputbox">
            <RiLockPasswordFill className="licons" />
            <input type="password" name='confirmPassword' value={formData.confirmPassword} autoComplete='off' onChange={handleChange} required />
            <label htmlFor="confirmpassword">Confirm Password</label>
          </div>
          <button className='rregister' onClick={ValidateForm}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
