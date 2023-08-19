// PaymentComponent.js
import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

const PaymentComponent = () => {
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: '10.00',
                    },
                },
            ],
        });
    };

    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            // Payment is successful
            console.log('Payment successful:', details);

        });
    };

    const onError = (err) => {
        // Implement your logic for error handling
        console.error('Payment error:', err);
    };

    return (
        <PayPalButtons
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
        />
    );
};

export default PaymentComponent;
