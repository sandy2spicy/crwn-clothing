import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/user.action";
import { connect } from "react-redux";

const SignIn = ({ signInWithEmail, signInWithGoogle }) => {
  const [userCredentials, setUserCredentials] = useState({email: '', password:''});

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    signInWithEmail(email, password);
    setUserCredentials({ email: "", password: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          required
          value={email}
          handleChange={handleChange}
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          required
          value={password}
          handleChange={handleChange}
          label="Password"
        />
        <div className="options">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToStates = (dispatch) => {
  return {
    signInWithGoogle: () => {
      dispatch(googleSignInStart());
    },
    signInWithEmail: (email, password) => {
      dispatch(emailSignInStart({ email, password }));
    },
  };
};

export default connect(null, mapDispatchToStates)(SignIn);
