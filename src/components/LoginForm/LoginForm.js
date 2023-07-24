import { useState } from "react";
import { useAuth } from "hooks/index"
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import css from "./LoginForm.module.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLogError } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };

  return (
  <div className={css.container}>
    <form className={css.form} onSubmit={handleSubmit}>
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
      {isLogError && <div className={css.error}>Not correct login or password</div>} <br />
      <button className={css.button} type="submit">Login</button>
    </form>    
  </div>
  )
}

export default LoginForm;