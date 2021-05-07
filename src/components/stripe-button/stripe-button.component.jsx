import { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class StripeButton extends Component {
  onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };
  render() {
    const priceToStripe = this.props.price * 100;
    return (
      <StripeCheckout
        token={this.onToken}
        amount={priceToStripe}
        image="https://sendeyo.com/up/d/f3eb2117da"
        label="Pay Now"
        description="Confirm purchases of items"
        name="CRWN Clothing"
        stripeKey="pk_test_51IoHInSAgc2mv4dEWqdx3EWibwa3oaFJ9xU2uePK5rxosdu9qwQ25VohJDjjmOO29ndTeUW41OlQJtMim8suMkz200YqDXWJRF"
      />
    );
  }
}

export default StripeButton;
