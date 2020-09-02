import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';




const  StripeCheckoutButton = ({ price })=>{
    const priceForStripe = price*100;
    const publishablekey= 'pk_test_n13Wdw21W2mUTqUxQA2pZQxi';
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('Payment failed, please use the provided credit card')
        })
    };
    return (
        <StripeCheckout 
        label='Pay Now'
        name='Infinty Clothing'
        billingAddress
        shippingAddress
        description ={`Your total is $${price}`}
        amount ={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;