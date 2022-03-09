import React, {useContext} from 'react'
import SignUpContext from "./context/SignUpContext";

const SignIn = () => {

  const { isShowLogin} = useContext(SignUpContext);
  return (
    
    <div className={`${isShowLogin ? "wrapper active" : "wrapper show"}`}>
    <div className="logo"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBaBeWUm0iqq5coqOVQDlRKVjJ8D9wEiNqDza-ukz1IrFQXSY8-aXHOtwVtmFvp_nYZQ&usqp=CAU" alt=""/> </div>
    <div className="text-center mt-4 name"> FOTOBASE </div>
    <form className="p-3 mt-3">
        <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span> <input type="text" name="userName" id="userName" placeholder="Username"/> </div>
        <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span> <input type="password" name="password" id="pwd" placeholder="Password"/> </div> <button className="btn mt-3">Login</button>
    </form>
    <div className="text-center fs-6"> <a href="#">Forget password?</a> or <a href="#">Sign up</a> </div>
</div>
  )
}

export default SignIn