import React, { useRef, useState } from "react";
import {
    CardElement,
    useStripe,
    useElements,
  } from "@stripe/react-stripe-js";
import AuthService from "../../../Services/Auth";
import UserService from "../../../Services/UserService";
import GetTotalPrice from "../../../Utils/GetTotalPrice";
import '../../../Styles/CheckoutInput.css'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { CheckCircleTwoTone  } from '@ant-design/icons';
import { withRouter } from "react-router";
import { notification, PageHeader } from "antd";

function CheckoutForm({setCredits, history}) {
    const [isPaymentLoading, setPaymentLoading] = useState(false);
    const [numberOfCredits, setNumberOfCredits] = useState(2);
    const [checkoutError, setCheckoutError] = useState();
    
    const currentUser = AuthService.getCurrentUser()
    const stripe = useStripe();
    const elements = useElements();

    const form = useRef();
    const checkBtn = useRef();

    const handlePayment = async (e) => {
      e.preventDefault();
      if (!stripe || !elements) {
        return;
      }
      const cardElement = elements.getElement(CardElement);
      
      setPaymentLoading(true);
     
      const paymentInfo = {
          email: currentUser.email,
          name: currentUser.firstname + ' ' + currentUser.lastname
      }
      try {
        const {data: secret } = await UserService.createPaymentIntent(numberOfCredits)

        const paymentMethodReq = await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: paymentInfo
        });
  
        if (paymentMethodReq.error) {
          setCheckoutError(paymentMethodReq.error.message);
          setPaymentLoading(false);
          return;
        }
        const cnfirmCP = await stripe.confirmCardPayment(secret.data, {
          payment_method: paymentMethodReq.paymentMethod.id
        });

        if (cnfirmCP.error) {
          setCheckoutError(cnfirmCP.error.message);
          setPaymentLoading(false);
          return;
        } else {
            const updateCreditsResp = await UserService.updateCredits(numberOfCredits)
            if (updateCreditsResp.data.success === true) {
                setCredits(updateCreditsResp.data.credits)
                notification.open({
                  message: 'Successful payment',
                  icon:  <CheckCircleTwoTone twoToneColor="#52c41a" />,
                  duration:3,
                  description:
                    `Payment operation success, ${numberOfCredits} credits has been added to your account`,
                });
                setTimeout(function(){
                    history.push('/profile')
                }, 2000);
            } else {
                setCheckoutError(updateCreditsResp.data.err);
                notification.open({
                  message: 'Payment Error!',
                  duration:3,
                  description:
                    `Payment operation failed, ${checkoutError}`,
                });
            }
        }
  
      } catch (err) {
        setPaymentLoading(false);
        setCheckoutError(err.message);
      }
    };
  
    return (
      <>
        <PageHeader
      className="site-page-header-responsive"
      onBack={() => window.history.back()}
      subTitle="Go back"
    >
    </PageHeader>
          <div className='w-1/2 mx-auto'>
                <div className="mb-6 px-3">
                  <span className="text-gray-500">Get credits</span>
                  <h3 className="text-2xl font-bold">One time payment</h3>
                </div>
            <Form onSubmit={handlePayment} ref={form}   id="uploadForm">
                  <div className="mb-3 flex p-4 mx-2 bg-gray-50 rounded">
                    <Input className="w-full py-2 pr-52 text-xs bg-gray-50 outline-none"
                    type="text"
                    placeholder="Number of credits"
                    value={numberOfCredits}
                    onChange={(e) => setNumberOfCredits(e.target.value)}
                    style={{"width": "100%"}}
                    />
                  </div>
                <div className="mb-3 flex p-4 mx-2 bg-gray-50 rounded">
                <CardElement
                className="card"
                options={{
                  style: {
                    base: {
                      backgroundColor: "transparent"
                    } 
                  },
                }}
                />
                  </div> 
                  <div className="px-3 text-center">
                    <button
                disabled={isPaymentLoading ||  !stripe || isNaN(numberOfCredits)}
                className=" pay-button mb-2 w-full py-4 bg-moody-blue-600 hover:bg-moody-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">
                    {isPaymentLoading ? "Loading..." :
                isNaN(numberOfCredits) ? 'Error'
                : `Get ${numberOfCredits} credits for ${GetTotalPrice(numberOfCredits)} $`}
                    </button>
                  </div>     
                  <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
                </div>
                </>
    );
  }
  export default withRouter(CheckoutForm);