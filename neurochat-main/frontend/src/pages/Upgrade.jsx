import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useRazorpay } from '../hooks/useRazorpay';
import { createOrder, verifyPayment } from '../services/paymentService';
import { openRazorpayCheckout } from '../utils/razorpay';
import { getRoleFromToken } from '../utils/jwt';
import '../styles/upgrade.css';

export default function Upgrade() {
  const navigate = useNavigate();
  const { token, logout } = useAuth();
  useRazorpay();

  function handleUpgrade() {
    if (!token) {
      alert('Please register first');
      navigate('/register');
      return;
    }

    const role = getRoleFromToken(token);

    if (role === 'PRO') {
      alert('You are already PRO 🚀');
      return;
    }

    pay();
  }

  async function pay() {
    try {
      const order = await createOrder();

      openRazorpayCheckout(order, async (response) => {
        await verifyPayment(response);
        alert('🎉 Payment successful!');
        logout();
        navigate('/login');
      });
    } catch {
      alert('Payment failed');
    }
  }

  return (
    <div className="upgrade-page">
      <div className="upgrade-card">
        <h2>🚀 Upgrade to PRO</h2>
        <div className="upgrade-price">₹500</div>
        <ul className="upgrade-features">
          <li>Unlimited Chat Access</li>
          <li>Faster AI Responses</li>
          <li>No Rate Limits</li>
          <li>Priority Support</li>
        </ul>
        <button type="button" onClick={handleUpgrade}>
          Upgrade Now
        </button>
        <Link className="upgrade-back" to="/chat">
          ← Back to Chat
        </Link>
      </div>
    </div>
  );
}
