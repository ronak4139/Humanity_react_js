// key_id: 'rzp_test_BJdRUVZXzLFsKD',
// key_secret: 'dMNRMkijizOgqr0p8eCExGzH',

const express = require('express');
const bodyParser = require('body-parser');
const Razorpay = require('razorpay');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(cors()); // Add this line to enable CORS for all routes

const razorpay = new Razorpay({
    key_id: '',
    key_secret: '',
});

// Route to create Razorpay order
app.post('/create-order', async (req, res) => {
  const { amount } = req.body;
  
  try {
    const options = {
      amount: amount * 100, // Convert to paise
      currency: 'INR',
      receipt: 'order_rcptid_' + Math.floor(Math.random() * 1000),
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Route to verify payment
app.post('/verify-payment', async (req, res) => {
  const { payment_id, order_id } = req.body;

  try {
    const payment = await razorpay.payments.fetch(payment_id);
    if (payment.status === 'captured' && payment.order_id === order_id) {
      // Payment is successful, perform necessary actions
      res.json({ success: true });
    } else {
      res.status(400).json({ error: 'Payment verification failed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to verify payment' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
