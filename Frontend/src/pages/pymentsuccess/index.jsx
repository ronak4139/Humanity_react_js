import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function PaymentSuccessPage() {
  const history = useNavigate();

  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    setShowAnimation(true);

    // Navigate to home page after 3 seconds
    const timer = setTimeout(() => {
      history("/homepage");
    }, 3000);

    // Cleanup function
    return () => clearTimeout(timer);
  }, [history]);

  return (
    <>
      <Helmet>
        <title>Payment Successful</title>
        <meta name="description" content="Payment completed successfully" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full min-h-screen bg-white-A700 mt-[15%]">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div
            className={`bg-green-500 text-white font-bold rounded-lg shadow-lg p-10 transform transition-transform duration-1000 ${
              showAnimation ? "scale-100" : "scale-0"
            }`}
          >
            <p className="text-3xl">Payment Successful!</p>
            <p className="text-lg mt-4">Thank you for your donation.</p>
          </div>
        </div>
      </div>
    </>
  );
}
