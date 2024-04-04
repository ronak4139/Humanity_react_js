import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Input, Img, Text } from "../../components";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header1";
// import "../Donationnow/donationow.css";

import useRazorpay from 'react-razorpay';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


import { getDatabase, ref, push } from 'firebase/database';
// Import Firebase configuration from config.js
import { app } from '../../components/googleSignin/config';


export default function DonationnowPage() {

  const navigate = useNavigate();

  const [Razorpay] = useRazorpay();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const [orderId, setOrderId] = useState('');

  const handlePayment = async () => {
    try {
      // Create order on backend
      const response = await axios.post('http://localhost:5001/create-order', { amount });
      const { id } = response.data;
      setOrderId(id);

      // Initialize Razorpay
      const options = {
        key: '', // Replace with your actual Razorpay key
        amount: amount * 100, // Amount in paise
        currency: 'INR',
        name: ' ',
        description: 'Donation',
        order_id: id,
        handler: function (response) {
          // Payment success callback
          alert('Payment successful');

          const database = getDatabase(app);
          const donationsRef = ref(database, 'DonationsData');
          const newDonationRef = donationsRef;
          push(newDonationRef, {
            name: name,
            email: email,
            number: number,
            amount: amount,
            paymentDateTime: new Date().toISOString(),
            orderId: orderId // Include orderId in the database
          }).key;
          
          navigate("/pymentsuccess");
          // Send payment details to backend for verification
        },
        prefill: {
          name: name, // Pre-filled donor name
          email: email, // Pre-filled donor email
          contact: number, // Pre-filled donor mobile number
        },
        theme: {
          color: '#3399cc', // Razorpay checkout button color
        },
      };
      const razorpay = new Razorpay(options);
      razorpay.open();

    } catch (error) {
      console.error('Error:', error);
      alert('Payment failed. Please try again later.');
    }
  }

  // Function to save donation details to Firebase
    // Initialize Firebase

    // Reference to your Firebase Realtime Database
  
  return (
    <>
      <Helmet>
        <title>Humanity</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-0 bg-white-A700">
        <Header1 className="flex flex-col items-center justify-center w-full gap-[25px]" />
            <Text size="xl" as="p" className="mt-[30px] ml-[0px] !text-red-300 !font-sueellenfrancisco">Donate now</Text>
            <Heading size="4xl" as="h2" className="ml-[0px] mb-[10px]">Helping by your donation</Heading>
            
        <div className="flex flex-col items-center justify-start w-full ml-[82%]">
          <div className="flex flex-col items-start justify-start w-full">
                      
    <div className="flex justify-center items-center min-h-screen ">
      <div className="max-w-md w-full">
        <div className="bg-white shadow-md rounded px-8 py-6">
          <h2 className="text-2xl font-semibold mb-6">Make a Donation</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="number" className="block text-gray-700 text-sm font-bold mb-2">Mobile Number</label>
              <input
                type="text"
                id="number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">Donation Amount</label>
                <input
                  type="number"
                  className="shadow appearance-none border rounded mt-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Custom Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
            </div>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handlePayment}
            >
              Donate
            </button>
          </form>
        </div>
      </div>
    </div>

          </div>
        </div>
            <Footer className="flex justify-center items-center w-full bg-black-900" />
      </div>
    </>
  );
}
