
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role) {
      navigate(`/${role}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Leave Management Login</h2>
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <select
          className="w-full border rounded px-3 py-2"
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Choose Role</option>
          <option value="employee">Employee</option>
          <option value="manager">Manager</option>
          <option value="hr">HR</option>
          <option value="admin">Admin</option>
        </select>
        <button
          className="w-full bg-blue-600 text-white rounded px-3 py-2 hover:bg-blue-700"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
