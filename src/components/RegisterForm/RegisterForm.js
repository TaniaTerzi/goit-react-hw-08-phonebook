import { useState } from "react";
import { useAuth } from "hooks/index";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import PasswordStrengthBar from 'react-password-strength-bar';
import css from './RegisterForm.module.css';

function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isRegError } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();    
    dispatch(register({ name, email, password }));
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>Name</label>
        <input
          className={css.input}
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}  
        />
        <label className={css.label}>Email</label>
        <input
          className={css.input}
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}  
        />
        <label className={css.label}>Password</label>
        <input
          className={css.input}
          type="password" 
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div><PasswordStrengthBar password={password} /></div>
        {isRegError && <div className={css.error}>Not correct login or password</div>} <br />
        <button className={css.button} type="submit">Register</button>
      </form>    
    </div>
  )
}

export default RegisterPage;