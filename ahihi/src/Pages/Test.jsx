import React from "react";
import { PayPalButton } from "react-paypal-button-v2";

export default function Test({ totalPrice }) {
    return (
        <div>
            <PayPalButton
                options={{
                    clientId: "AXNKJibNc7TDFHfuRtpL9Fz7XDwro46TMjrXnnPuKNGp4ewc_oPEgubDBRd9coE7xvwXTJ_h6us6F55Y", // Replace with your PayPal client ID
                    currency: "USD",
                }}
                amount={totalPrice}
                onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);
                    console.log({ details, data });
                    // Implement any further logic you need after successful payment
                    // For example, redirecting to a success page, updating the database, etc.
                }}
             />
        </div>
    );
}
