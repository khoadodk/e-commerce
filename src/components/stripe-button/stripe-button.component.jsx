import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_uoiGGbYkZ2vrQMT9FAjBX5pg00b8rsbJxw';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <div>
            <StripeCheckout 
                label='Pay Now'
                name='Crown Clothing LTd.'
                billingAddress
                shippingAddres
                image=''
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />
        </div>
    )
}

export default StripeCheckoutButton;
