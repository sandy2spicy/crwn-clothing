import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.action";
import "./sign-up.styles.scss";
import { connect } from "react-redux";

const SignUp = ({ createUserProfile }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    try {
      createUserProfile(email, password, displayName);
      setUserCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          required
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
        />
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
        <FormInput
          name="confirmPassword"
          type="password"
          required
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUserProfile: (email, password, displayName) =>
      dispatch(signUpStart({ email, password, displayName })),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
