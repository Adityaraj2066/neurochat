import { Navigate, Route, Routes } from 'react-router-dom';
import Chat from '../pages/Chat';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Payment from '../pages/Payment';
import Upgrade from '../pages/Upgrade';
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/chat" replace />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/upgrade" element={<Upgrade />} />
      <Route path="*" element={<Navigate to="/chat" replace />} />
    </Routes>
  );
}
