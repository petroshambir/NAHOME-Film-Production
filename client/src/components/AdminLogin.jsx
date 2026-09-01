

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // ኢሜይል ንምጽራይ (trim() ንስፔስ የጥፍእ)
    const loginData = { 
      email: email.trim(), 
      password: password 
    };

    try {
      const response = await fetch('https://nahome-film-production.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });

      const data = await response.json();

      if (response.ok) {
        // ሎጊን ምስ ሰለጠ
        localStorage.setItem('token', data.token);
        localStorage.setItem('isAdmin', 'true');
        
        // ናብ Admin Panel ይወስድ
        navigate('/admin-panel');
      } else {
        // ሰርቨርካ "Invalid credentials" እንተ ኢልካዮ እዚ መልእኽቲ ይወጽእ
        alert(data.message || 'Invalid Credentials!');
      }
    } catch (err) {
      console.error("Login Error:", err);
      alert('Server connection error. Make sure the backend is running.');
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center font-sans selection:bg-[#ff6600]/30 selection:text-[#ff6600]">
      <form onSubmit={handleLogin} className="bg-zinc-950 p-10 rounded-2xl border-2 border-[#ff6600]/40 w-96 shadow-2xl">
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#ff6600] font-semibold block mb-2 text-center">
          Admin Portal
        </span>
        <h2 className="text-2xl font-serif text-zinc-100 mb-2 text-center">Admin Login</h2>
        <div className="w-12 h-[1px] bg-[#ff6600]/40 mx-auto mb-6"></div>
        
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-zinc-900 border border-[#ff6600]/50 text-zinc-100 rounded-xl focus:outline-none focus:border-[#ff6600] shadow-inner placeholder-zinc-600 font-light text-sm" 
          placeholder="Email" 
          required
        />
        
        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 bg-zinc-900 border border-[#ff6600]/50 text-zinc-100 rounded-xl focus:outline-none focus:border-[#ff6600] shadow-inner placeholder-zinc-600 font-light text-sm" 
          placeholder="Password" 
          required
        />
        
        <button 
          type="submit" 
          className="w-full bg-[#ff6600] text-white p-3 text-xs uppercase font-bold tracking-[0.2em] rounded-xl hover:bg-[#e05a00] transition-all shadow-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;