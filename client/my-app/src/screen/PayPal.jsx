import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PayPal() {

    const initialOptions = {
        clientId:import.meta.env.VITE_CLIENT_PAYMENT_ID
    }



    const onCreateOrder =async ()=>{
        try{

            const response = await fetch('http://localhost:5000/payment/create/order',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                }
            })

            const result = await response.json()

            console.log(result)
            return result.orderId



        }catch(err){
            console.log(err)
        }
    }

    const onApprove = async()=>{
        try{

        }catch(err){
            console.log(err)
        }
    }

    const onError = async()=>{
            console.log(err)



    }




  return (
    <div>
      <PayPalScriptProvider options={initialOptions} >
        <PayPalButtons
        style={{  shape:'rect',
        layout:'vertical'}}
        createOrder={onCreateOrder}
        onApprove={onApprove}
        onError={onError}







        
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default PayPal;