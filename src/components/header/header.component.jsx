import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { HeaderContainer, LinkOption, LogoContainer, OptionsContainer } from "./header.styles";
import { signOutStart } from "../../redux/user/user.action";

const Header = ({ currentUser, hidden, signOutUser }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <Logo className="logo"></Logo>
        </Link>
      </LogoContainer>
      <OptionsContainer>
        <LinkOption to="/shop">
          SHOP
        </LinkOption>
        <LinkOption to="/shop">
          CONTACT
        </LinkOption>
        {currentUser ? (
          <LinkOption
            as="div"
            onClick={signOutUser}
          >
            SIGN OUT
          </LinkOption>
        ) : (
          <LinkOption to="/signin">
            SIGN IN
          </LinkOption>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signOutUser: () => dispatch(signOutStart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
