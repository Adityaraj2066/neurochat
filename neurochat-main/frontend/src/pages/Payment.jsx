import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { createOrder, verifyPayment } from '../services/paymentService';
import { useRazorpay } from '../hooks/useRazorpay';
import { openRazorpayCheckout } from '../utils/razorpay';
import '../styles/payment.css';

export default function Payment() {
  useRazorpay();
  const navigate = useNavigate();
  const { token, logout } = useAuth();
  async function pay() {
    if (!token) {
      alert('Please login first');
      navigate('/login');
      return;
    }

    try {
      const order = await createOrder();

      openRazorpayCheckout(order, async () => {
        await verifyPayment();
        alert('Payment successful 🚀 Please login again');
        logout();
        navigate('/login');
      });
    } catch (err) {
      console.log(err);
      alert('Payment failed');
    }
  }

  return (
    <div className="payment-page">
      <div className="payment-box">
        <h2>₹ Upgrade to PRO</h2>
        <p>Unlimited chats for ₹500</p>
        <button type="button" onClick={pay}>
          Pay ₹500
        </button>
      </div>
    </div>
  );
}
