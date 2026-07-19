"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState(null); // Kwa ajili ya kuonyesha feedback
  const [loading, setLoading] = useState(false); // Kwa ajili ya loading ya button

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Tunawasha loading
    setMessage(null); // Tunafuta ujumbe wa zamani

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setMessage(data.message); // Tunaonyesha ujumbe kutoka server (kwa rangi)
      
      if (response.status === 201) {
        setFormData({ name: '', email: '', password: '' }); // Tunasafisha form
      }
    } catch (error) {
      setMessage("Kuna tatizo la mtandao, jaribu tena.");
    } finally {
      setLoading(false); // Tunazima loading
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="card w-full max-w-md bg-white shadow-2xl rounded-3xl border border-gray-100">
        <div className="card-body p-8">
          <h2 className="text-3xl font-extrabold text-black-950 text-center mb-6">
            Register
          </h2>
          
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Jina */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <input 
                name="name"
                type="text" 
                value={formData.name} // Hii inafanya input ifutike ikifanikiwa
                placeholder="Ingiza jina lako" 
                className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-blue-500" 
                required 
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input 
                name="email"
                type="email" 
                value={formData.email} // Hii inafanya input ifutike ikifanikiwa
                placeholder="example@mail.com" 
                className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-blue-500" 
                required 
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input 
                name="password"
                type="password" 
                value={formData.password} // Hii inafanya input ifutike ikifanikiwa
                placeholder="********" 
                className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-blue-500" 
                required 
                onChange={handleChange}
              />
            </div>

            {/* Button yenye Loading */}
            <div className="form-control mt-6">
              <button 
                type="submit" 
                disabled={loading} // Inajizima ikirun
                className="btn btn-primary w-full rounded-xl text-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Inasajili..." : "Register"}
              </button>
            </div>

            {/* Sehemu ya kuonyesha ujumbe chini ya button */}
            {message && (
              <p className={`text-center font-bold mt-4 ${message.includes('Hongera') ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </p>
            )}
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            <Link href="/" className="text-blue-600 font-bold hover:underline">
              Back to Home
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}