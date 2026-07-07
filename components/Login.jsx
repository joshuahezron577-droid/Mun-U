"use client";
import Link from 'next/link';
import { loginUser } from "../app/action";
import { useState } from 'react';

export default function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData) {
    setLoading(true);
    setError("");
    
    try {
      const result = await loginUser(formData);
      if (!result.success) {
        setError(result.message);
      }
    } catch (err) {
      setError("Kulikua na tatizo. Jaribu tena!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="card w-full max-w-md bg-white shadow-2xl rounded-3xl border border-gray-100">
        <div className="card-body p-8">
          <h2 className="text-3xl font-extrabold text-blue-950 text-center mb-6">
            Login
          </h2>
          
          <form action={handleSubmit} className="space-y-5">
            {/* Jina */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <input 
                name="name"
                type="text" 
                placeholder="Ingiza jina lako" 
                className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-blue-500" 
                required 
                disabled={loading}
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
                placeholder="example@mail.com" 
                className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-blue-500" 
                required 
                disabled={loading}
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
                placeholder="********" 
                className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-blue-500" 
                required 
                disabled={loading}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="alert alert-error">
                <span>{error}</span>
              </div>
            )}

            {/* Button */}
            <div className="form-control mt-6">
              <button type="submit" disabled={loading} className="btn btn-primary w-full rounded-xl text-lg shadow-md">
                {loading ? "Inaandaa..." : "Login"}
              </button>
            </div>
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