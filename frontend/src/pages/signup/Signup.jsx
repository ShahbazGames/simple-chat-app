import GenderCheckBox from "./GenderCheckBox";

const SignUp =()=> {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>
             Sign Up
            <span className='text-orange-300'> ChatApp</span>
          </h1>

          <form >
            <div>
            <label className='label p-2'>
                        <span className='text-base label-text'>Full Name</span>
                      </label>

                      <input 
                        type='text' 
                        placeholder='name surname' 
                        className='w-full input input-bordered h-10'
                      />

            </div>

            <div>
            <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                      </label>

                      <input 
                        type='text' 
                        placeholder='username' 
                        className='w-full input input-bordered h-10'
                      />

            </div>
            <div>
            <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                      </label>

                      <input 
                        type='text' 
                        placeholder='Enter Password ' 
                        className='w-full input input-bordered h-10'
                      />

            </div>
            <div>
            <label className='label p-2'>
                        <span className='text-base label-text'>Confirm Password</span>
                      </label>

                      <input 
                        type='text' 
                        placeholder='Confirm Password ' 
                        className='w-full input input-bordered h-10'
                      />

            </div>
            <GenderCheckBox/>
            
            <div className='w-full text-left'>
                <a href='#' className=' label p-2 text-sm hover:underline hover:text-blue-600 mt-2 inline-block ' >
                Already have an account? Login
                </a>
                </div>
          </form>
          <div>
                  <button type='submit' className='btn btn-block btn-sm mt-2 border-slate-700'>
                   Sign Up
                  </button>
          </div>
      
      </div>
      
    </div>
  );
};

export default SignUp



//reusable code
// import GenderCheckBox from "./GenderCheckBox";

// const SignUp =()=> {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//       <h1 className='text-3xl font-semibold text-center text-gray-300'>
//              Sign Up
//             <span className='text-orange-300'> ChatApp</span>
//           </h1>

//           <form >
//             <div>
//             <label className='label p-2'>
//                         <span className='text-base label-text'>Full Name</span>
//                       </label>

//                       <input 
//                         type='text' 
//                         placeholder='name surname' 
//                         className='w-full input input-bordered h-10'
//                       />

//             </div>

//             <div>
//             <label className='label p-2'>
//                         <span className='text-base label-text'>Username</span>
//                       </label>

//                       <input 
//                         type='text' 
//                         placeholder='username' 
//                         className='w-full input input-bordered h-10'
//                       />

//             </div>
//             <div>
//             <label className='label p-2'>
//                         <span className='text-base label-text'>Password</span>
//                       </label>

//                       <input 
//                         type='text' 
//                         placeholder='Enter Password ' 
//                         className='w-full input input-bordered h-10'
//                       />

//             </div>
//             <div>
//             <label className='label p-2'>
//                         <span className='text-base label-text'>Confirm Password</span>
//                       </label>

//                       <input 
//                         type='text' 
//                         placeholder='Confirm Password ' 
//                         className='w-full input input-bordered h-10'
//                       />

//             </div>
//             <GenderCheckBox/>
            
//             <div className='w-full text-left'>
//                 <a href='#' className=' label p-2 text-sm hover:underline hover:text-blue-600 mt-2 inline-block ' >
//                 Already have an account? Login
//                 </a>
//                 </div>
//           </form>
//           <div>
//                   <button type='submit' className='btn btn-block btn-sm mt-2 border-slate-700'>
//                    Sign Up
//                   </button>
//           </div>
      
//       </div>
      
//     </div>
//   );
// };

// export default SignUp
