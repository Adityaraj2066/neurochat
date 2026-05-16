const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_xxxxx';

export function openRazorpayCheckout(order, onSuccess) {
  const options = {
    key: RAZORPAY_KEY,
    amount: order.amount,
    currency: order.currency,
    name: 'NeuroChat',
    description: 'Pro Upgrade',
    order_id: order.id,
    handler: onSuccess,
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
}
