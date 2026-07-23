// import React from 'react';
// import { useForm, useWatch } from 'react-hook-form';

// const Register = () => {
//   const {
//     register,
//     handleSubmit,
//     control, // 1. Extract control from useForm
//     formState: { errors, isSubmitting }
//   } = useForm({
//     mode: 'onChange',
//     defaultValues: {
//       name: '',
//       email: '',
//       password: '',
//       confirmPassword: ''
//     }
//   });

//   // 2. Use useWatch explicitly with control
//   const password = useWatch({
//     control,
//     name: 'password',
//     defaultValue: ''
//   });

//   // Live password strength criteria
//   const getPasswordMetrics = (pass = '') => {
//     const hasMinLength = pass.length >= 8;
//     const hasUpper = /[A-Z]/.test(pass);
//     const hasLower = /[a-z]/.test(pass);
//     const hasNumber = /[0-9]/.test(pass);
//     const hasSpecial = /[^A-Za-z0-9]/.test(pass);

//     const score = [hasMinLength, hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;

//     let label = 'Very Weak';
//     let colorClass = 'bg-red-500 text-red-500';
//     let robotMood = '🤖 "Feed me a strong password!"';

//     if (score === 5) {
//       label = 'Strong';
//       colorClass = 'bg-green-500 text-green-600';
//       robotMood = '🤖 "Unbreakable! Perfect job!"';
//     } else if (score >= 3) {
//       label = 'Medium';
//       colorClass = 'bg-yellow-500 text-yellow-600';
//       robotMood = '🤖 "Getting better! Add special symbols or numbers."';
//     } else if (pass.length > 0) {
//       robotMood = '🤖 "Too weak! Need at least 8 chars with mixed cases & numbers."';
//     }

//     return { score, label, colorClass, robotMood };
//   };

//   const strength = getPasswordMetrics(password);

//   const onSubmit = (data) => {
//     console.log('Form Submitted Data:', data);
//     alert('Registration Successful!');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Create an Account
//         </h2>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {/* Full Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Full Name
//             </label>
//             <input
//               type="text"
//               placeholder="John Doe"
//               className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition ${
//                 errors.name
//                   ? 'border-red-500 focus:ring-red-200'
//                   : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
//               }`}
//               {...register('name', { required: 'Name is required' })}
//             />
//             {errors.name && (
//               <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
//             )}
//           </div>

//           {/* Email Address */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               placeholder="john@example.com"
//               className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition ${
//                 errors.email
//                   ? 'border-red-500 focus:ring-red-200'
//                   : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
//               }`}
//               {...register('email', {
//                 required: 'Email is required',
//                 pattern: {
//                   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                   message: 'Enter a valid email address'
//                 }
//               })}
//             />
//             {errors.email && (
//               <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
//             )}
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition ${
//                 errors.password
//                   ? 'border-red-500 focus:ring-red-200'
//                   : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
//               }`}
//               {...register('password', {
//                 required: 'Password is required',
//                 minLength: {
//                   value: 8,
//                   message: 'Password must be at least 8 characters'
//                 }
//               })}
//             />
//             {errors.password && (
//               <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
//             )}
//           </div>

//           {/* Live Password Robot Indicator */}
//           {password && password.length > 0 && (
//             <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs space-y-2">
//               <div className="flex justify-between items-center">
//                 <span className="font-medium text-slate-700">
//                   {strength.robotMood}
//                 </span>
//                 <span className={`font-bold ${strength.colorClass.split(' ')[1]}`}>
//                   {strength.label}
//                 </span>
//               </div>
              
//               <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
//                 <div
//                   className={`h-full transition-all duration-300 ${strength.colorClass.split(' ')[0]}`}
//                   style={{ width: `${(strength.score / 5) * 100}%` }}
//                 />
//               </div>
//             </div>
//           )}

//           {/* Confirm Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition ${
//                 errors.confirmPassword
//                   ? 'border-red-500 focus:ring-red-200'
//                   : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
//               }`}
//               {...register('confirmPassword', {
//                 required: 'Please re-enter your password',
//                 validate: (value) => value === password || 'Passwords do not match'
//               })}
//             />
//             {errors.confirmPassword && (
//               <p className="text-red-500 text-xs mt-1">
//                 {errors.confirmPassword.message}
//               </p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition duration-200 shadow-md hover:shadow-lg disabled:opacity-50"
//           >
//             {isSubmitting ? 'Registering...' : 'Register'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;



// --------------------------------
// --------------------------------
// --------------------------------


import React, { useContext } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Auth } from '../context/AuthContextCreate';
import { toast } from 'react-toastify';

const Register = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const navigate = useNavigate();

  const password = useWatch({ control, name: 'password', defaultValue: '' });

  const getPasswordMetrics = (pass = '') => {
    const hasMinLength = pass.length >= 8;
    const hasUpper = /[A-Z]/.test(pass);
    const hasLower = /[a-z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);
    const hasSpecial = /[^A-Za-z0-9]/.test(pass);

    const score = [hasMinLength, hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;

    let label = 'Very weak';
    let barColor = '#e8637a';
    let glow = 'rgba(232,99,122,0.55)';
    let note = 'Add length, a number, and a symbol.';

    if (score === 5) {
      label = 'Vault-grade';
      barColor = '#e8b975';
      glow = 'rgba(232,185,117,0.65)';
      note = 'This one belongs in the safe.';
    } else if (score >= 4) {
      label = 'Strong';
      barColor = '#c9d97a';
      glow = 'rgba(201,217,122,0.55)';
      note = 'One more touch and it\u2019s flawless.';
    } else if (score >= 3) {
      label = 'Building';
      barColor = '#e0a95e';
      glow = 'rgba(224,169,94,0.5)';
      note = 'Mix in a capital letter or symbol.';
    } else if (pass.length > 0) {
      label = 'Fragile';
      note = 'At least 8 characters, mixed case, a number.';
    }

    return { score, label, barColor, glow, note };
  };

  const strength = getPasswordMetrics(password);

  
  let { registeredUsers, setRegisteredUsers } = useContext(Auth);

  const onSubmit = (data) => {
    console.log('Form Submitted Data:', data);
     const userExists = registeredUsers.some(
    (user) => user.email === data.email
  );

  if (userExists) {
    toast.error("Email already exists!");
    return;
  }

  const newUsers = [...registeredUsers, data];

  setRegisteredUsers(newUsers);
  localStorage.setItem("registeredUsers", JSON.stringify(newUsers));

  toast.success("Registration successful!");
  reset();
  };

  const inputBase =
    'w-full bg-white/[0.06] text-[#f5eee6] placeholder-[#c9bfe0]/40 px-4 py-3 rounded-xl border transition-all duration-200 outline-none focus:bg-white/[0.09] backdrop-blur-sm';

  const fieldBorder = (hasError) =>
    hasError
      ? 'border-[#e8637a]/70 focus:ring-2 focus:ring-[#e8637a]/30'
      : 'border-white/[0.12] focus:border-[#e8b975]/60 focus:ring-2 focus:ring-[#e8b975]/20';

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 relative overflow-hidden bg-[#150b28]">
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
        @media (prefers-reduced-motion: reduce) {
          .orb-1, .orb-2, .orb-3 { animation: none; }
        }
      `}</style>

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

      {/* Glass card */}
      <div className="relative w-full max-w-md">
        <div
          className="relative rounded-[1.75rem] p-8 sm:p-9 border border-white/[0.14] shadow-2xl backdrop-blur-2xl"
          style={{
            background: 'linear-gradient(160deg, rgba(255,255,255,0.09), rgba(255,255,255,0.02))',
            boxShadow: '0 30px 80px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.15)'
          }}
        >
          <div className="mb-7">
            <span className="font-body text-[0.65rem] tracking-[0.25em] uppercase text-[#e8b975]/80">
              The Atelier
            </span>
            <h2 className="font-display text-3xl sm:text-[2.1rem] text-[#f5eee6] mt-2 leading-tight">
              Open your account
            </h2>
            <p className="font-body text-sm text-[#c9bfe0]/70 mt-2">
              Members unlock early access, saved carts, and private sale invitations.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-body">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-medium tracking-wide text-[#c9bfe0]/80 mb-1.5">
                Full name
              </label>
              <input
                type="text"
                placeholder="Jordan Ellery"
                className={`${inputBase} ${fieldBorder(errors.name)}`}
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <p className="text-[#e8637a] text-xs mt-1.5">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium tracking-wide text-[#c9bfe0]/80 mb-1.5">
                Email address
              </label>
              <input
                type="email"
                placeholder="jordan@example.com"
                className={`${inputBase} ${fieldBorder(errors.email)}`}
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
            <div>
              <label className="block text-xs font-medium tracking-wide text-[#c9bfe0]/80 mb-1.5">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className={`${inputBase} ${fieldBorder(errors.password)}`}
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 8, message: 'Password must be at least 8 characters' }
                })}
              />
              {errors.password && (
                <p className="text-[#e8637a] text-xs mt-1.5">{errors.password.message}</p>
              )}
            </div>

            {/* Password strength — glowing gemstone bar */}
            {password && password.length > 0 && (
              <div className="rounded-xl border border-white/[0.1] bg-white/[0.04] p-3.5 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-[#c9bfe0]/70">{strength.note}</span>
                  <span
                    className="text-xs font-semibold tracking-wide"
                    style={{ color: strength.barColor }}
                  >
                    {strength.label}
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${(strength.score / 5) * 100}%`,
                      background: strength.barColor,
                      boxShadow: `0 0 12px ${strength.glow}`
                    }}
                  />
                </div>
              </div>
            )}

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-medium tracking-wide text-[#c9bfe0]/80 mb-1.5">
                Confirm password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className={`${inputBase} ${fieldBorder(errors.confirmPassword)}`}
                {...register('confirmPassword', {
                  required: 'Please re-enter your password',
                  validate: (value) => value === password || 'Passwords do not match'
                })}
              />
              {errors.confirmPassword && (
                <p className="text-[#e8637a] text-xs mt-1.5">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 font-body font-semibold text-[#1a1035] py-3 rounded-xl transition-all duration-200 disabled:opacity-50"
              style={{
                background: 'linear-gradient(135deg, #f0c78e, #e8b975)',
                boxShadow: '0 8px 24px -6px rgba(232,185,117,0.5)'
              }}
            >
              {isSubmitting ? 'Creating account…' : 'Create account'}
            </button>

            <p className="text-center text-xs text-[#c9bfe0]/50 pt-1">
              Already a member?{' '}
              <span 
              onClick={() => navigate('/login')}
              className="text-[#e8b975]/90 cursor-pointer hover:underline">Sign in</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;