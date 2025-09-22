const express = require("express")
const got = require('got')
require('dotenv').config()
const router = express.Router()

const getAccessToken = async()=>{
    try{

      const response = await got(`${process.env.PAYPAL_BASEURL}/v1/oauth2/token`, {
    method: "POST",
    form: {
        grant_type: "client_credentials",
    },
    username: process.env.CLIENT_ID,
    password: process.env.SECRET_ID,
});

    const data = JSON.parse(response.body)
    const newAccessToken = data.access_token;
    return newAccessToken

    }catch(err){
        console.log(err)
    }

}

const createOrder = async(req,res)=>{
    try{

        const accessToken = await getAccessToken();

        const response = await got.post(`${process.env.PAYPAL_BASEURL}/v2/checkout/orders`,{
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${accessToken}`
            },
            json:{

                intent:"CAPTURE",
                purchase_units:[

                    {

                        items:[
                           {
                             name:'Volatility Grid',
                             description:' Volatility description ',
                             quantity:"1",
                             unit_amount:{
                                currency_code:"USD",
                                value:'50.00'
                             }
                           }
                        ],
                        amount:{
                            currency_code:"USD",
                                value:'50.00',
                                breakdown:{
                                    item_total:{
                                        currency_code:"USD",
                                value:'50.00'
                                    }
                                }
                        }


                    }





                ],

                payment_source:{
                    paypal:{
                        experience_context:{
                            payment_method_preference:"IMMEDIATE_PAYMENT_REQUIRED",
                            payment_method_selected:"PAYPAL",
                            brand_name:"zaki",
                            shipping_preference:"NO_SHIPPING",
                            locale:'en-US',
                            user_action:"PAY_NOW",
                        }
                    }
                }









            },

            responseType:"json"


        })


        

        const orderId = response?.body?.id

        return res.status(200).json({orderId:orderId})

    }catch(err){
        console.log(err)
    }
}


router.post('/create/order',createOrder)



module.exports = router


