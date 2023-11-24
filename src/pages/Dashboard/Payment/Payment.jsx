import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway)
const Payment = () => {
    return (
        <div>
            <SectionTitle heading='PAYMENT HISTORY' subHeading='At a Glance!'></SectionTitle>

            <Elements stripe={stripePromise} >
                <CheckOutForm></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;