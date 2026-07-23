import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

const AuthLayout = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit,reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = (data) => {
    console.log('Form Submitted Data:', data);
    reset();
  }
    ;

  // Helper styles matching your original code
  const inputBase = "w-full bg-white/[0.05] text-[#f5eee6] placeholder-[#c9bfe0]/40 text-sm px-4 py-3 rounded-xl border outline-none transition-all duration-200 focus:bg-white/[0.08]";
  const fieldBorder = (error) => error ? "border-[#e8637a] focus:border-[#e8637a]" : "border-white/10 focus:border-[#e8b975]/60";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .font-body { font-family: 'Inter', sans-serif; }

        @keyframes drift1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.08); } }
        @keyframes drift2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-35px,25px) scale(1.05); } }
        @keyframes driftSlow { 0%,100% { transform: translate(0,0); } 50% { transform: translate(20px,15px); } }
        .orb-1 { animation: drift1 16s ease-in-out infinite; }
        .orb-2 { animation: drift2 20s ease-in-out infinite; }
        .orb-3 { animation: driftSlow 24s ease-in-out infinite; }

        @keyframes cardRise {
          0% { opacity: 0; transform: translateY(28px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fieldRise {
          0% { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes crestFade {
          0% { opacity: 0; transform: translateY(-6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-6px); }
          40%, 80% { transform: translateX(6px); }
        }
        .card-enter { animation: cardRise 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        .crest-enter { animation: crestFade 0.6s ease-out 0.1s both; }
        .field-enter-1 { animation: fieldRise 0.5s ease-out 0.25s both; }
        .field-enter-2 { animation: fieldRise 0.5s ease-out 0.35s both; }
        .field-enter-3 { animation: fieldRise 0.5s ease-out 0.45s both; }
        .field-enter-4 { animation: fieldRise 0.5s ease-out 0.55s both; }
        .shake-on-error { animation: shake 0.4s ease-in-out; }

        @media (prefers-reduced-motion: reduce) {
          .orb-1, .orb-2, .orb-3, .card-enter, .crest-enter,
          .field-enter-1, .field-enter-2, .field-enter-3, .field-enter-4,
          .shake-on-error { animation: none; }
        }
      `}</style>

      {/* Main Grid Wrapper */}
      <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-3 gap-6 p-4 sm:p-6 relative overflow-hidden bg-[#150b28] items-center">
        
        {/* Ambient aurora backdrop */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="orb-1 absolute -top-32 -left-20 w-[26rem] h-[26rem] rounded-full blur-[100px] opacity-50"
            style={{ background: 'radial-gradient(circle, #7c3f61, transparent 70%)' }}
          />
          <div
            className="orb-2 absolute top-1/3 -right-24 w-[24rem] h-[24rem] rounded-full blur-[100px] opacity-40"
            style={{ background: 'radial-gradient(circle, #3b1256, transparent 70%)' }}
          />
          <div
            className="orb-3 absolute -bottom-24 left-1/4 w-[22rem] h-[22rem] rounded-full blur-[110px] opacity-30"
            style={{ background: 'radial-gradient(circle, #e8b975, transparent 70%)' }}
          />
        </div>

        {/* --- DIV 1: Mobile me hidden | Desktop me 2 Columns space --- */}
        <div className="hidden md:flex md:col-span-2 items-center justify-center relative z-10 p-8 rounded-[1.75rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl h-full min-h-[400px]">
          <div className="text-center space-y-3">
            <span className="font-body text-xs tracking-[0.25em] uppercase text-[#e8b975]">
              Feature Spotlight
            </span>
            <h1 className="font-display text-4xl text-[#f5eee6] font-medium">
              Crafted with Precision
            </h1>
            <p className="font-body text-sm text-[#c9bfe0]/70 max-w-md mx-auto">
              Explore our curated collection of timeless design elements and interactive interfaces.
            </p>
          </div>
        </div>

        {/* --- DIV 2: Mobile me Visible | Desktop me 1 Column space --- */}
        <div className="col-span-1 w-full max-w-md mx-auto relative z-10">
          <div
            className="card-enter relative rounded-[1.75rem] p-8 sm:p-9 border border-white/[0.14] shadow-2xl backdrop-blur-2xl"
            style={{
              background: 'linear-gradient(160deg, rgba(255,255,255,0.09), rgba(255,255,255,0.02))',
              boxShadow: '0 30px 80px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.15)'
            }}
          >
            <div className="mb-7 crest-enter">
              <span className="font-body text-[0.65rem] tracking-[0.25em] uppercase text-[#e8b975]/80">
                The Atelier
              </span>
              <h2 className="font-display text-3xl sm:text-[2.1rem] text-[#f5eee6] mt-2 leading-tight">
                Welcome back
              </h2>
              <p className="font-body text-sm text-[#c9bfe0]/70 mt-2">
                Sign in to pick up your cart and saved pieces.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-body" noValidate>
              {/* Email */}
              <div className="field-enter-1">
                <label className="block text-xs font-medium tracking-wide text-[#c9bfe0]/80 mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="jordan@example.com"
                  className={`${inputBase} ${fieldBorder(errors.email)} ${errors.email ? 'shake-on-error' : ''}`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Enter a valid email address'
                    }
                  })}
                />
                {errors.email && (
                  <p className="text-[#e8637a] text-xs mt-1.5">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div className="field-enter-2">
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-medium tracking-wide text-[#c9bfe0]/80">
                    Password
                  </label>
                  <span className="text-xs text-[#e8b975]/80 cursor-pointer hover:underline">
                    Forgot password?
                  </span>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className={`${inputBase} ${fieldBorder(errors.password)} pr-11 ${errors.password ? 'shake-on-error' : ''}`}
                    {...register('password', { required: 'Password is required' })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#c9bfe0]/60 hover:text-[#e8b975]/90 text-xs transition-colors"
                    tabIndex={-1}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-[#e8637a] text-xs mt-1.5">{errors.password.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="field-enter-3 w-full mt-2 font-body font-semibold text-[#1a1035] py-3 rounded-xl transition-all duration-200 disabled:opacity-50 hover:brightness-105 active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #f0c78e, #e8b975)',
                  boxShadow: '0 8px 24px -6px rgba(232,185,117,0.5)'
                }}
              >
                {isSubmitting ? 'Signing in…' : 'Sign in'}
              </button>

              <p className="field-enter-4 text-center text-xs text-[#c9bfe0]/50 pt-1">
                New here?{' '}
                <span
                  className="text-[#e8b975]/90 cursor-pointer hover:underline"
                  onClick={() => navigate('/register')}
                >
                  Create an account
                </span>
              </p>
            </form>
          </div>
        </div>

        {/* --- DIV 3: Mobile me hidden | Desktop me Niche Full Width (3 Columns) --- */}
        <div className="hidden md:block md:col-span-3 text-center py-4 relative z-10 border-t border-white/[0.08]">
          <p className="text-xs text-[#c9bfe0]/40 font-body">
            © 2026 The Atelier. All rights reserved. • Privacy Policy • Terms of Service
          </p>
        </div>

      </div>
    </>
  );
};

export default AuthLayout;