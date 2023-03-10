import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsVectorPen } from 'react-icons/bs';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    useTitle('Sign Up');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    // const [createdUserEmail, setCreatedUserEmail] = useState('');
    // const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();

    const handleSignup = data => {
        setSignUpError('');
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // toast.success('User created successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(error => console.error(error))
                    navigate('/');
            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message);
            })
    }

    return (
        <section className='md:h-[90vh] flex flex-col md:flex-row items-center justify-evenly'>
            <div className='flex justify-center items-center'>
                <div className='border-2 rounded-xl sm:w-96 p-7'>
                    <h2 className='text-xl text-center font-semibold mb-8'>Create Account Now</h2>
                    <form onSubmit={handleSubmit(handleSignup)}>
                        <div className="form-control mb-2 w-full max-w-xs">
                            <label className="label font-semibold"><span className="label-text">Name</span></label>
                           <div className='relative'>
                           <input type="text" {...register("name", { required: 'Name is required' })} 
                           className="input input-bordered w-full max-w-xs pl-[3em]" />
                           <span className='absolute top-[1.1em] left-[1em]'><BsVectorPen color='gray'/></span>
                           </div>
                            {errors.name && <p className='text-red-400 mt-1'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control mb-2 w-full max-w-xs">
                            <label className="label font-semibold"><span className="label-text">Email</span></label>
                           <div className='relative'>
                           <input type="text" {...register("email", { required: "Email is required" })} 
                            className="input input-bordered w-full max-w-xs pl-[3em]" />
                            <span className='absolute top-[1.1em] left-[1em]'><MdEmail color='gray'/></span>
                           </div>
                            {errors.email && <p className='text-red-400 mt-1'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control mb-2 w-full max-w-xs">
                            <label className="label font-semibold"><span className="label-text">Password</span></label>
                          <div className='relative'>
                          <input type="password"
                                {...register("password",
                                    {
                                        required: "Password is required",
                                        minLength: { value: 6, message: "Password must be atleast 6 characters" },
                                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must have atleast one uppercase,number and special character" }
                                    })
                                }
                                className="input input-bordered w-full max-w-xs pl-[3em]" />
                                <span className='absolute top-[1.1em] left-[1em]'><RiLockPasswordFill color='gray'/></span>
                          </div>
                            {errors.password && <p className='text-red-400 mt-1'>{errors.password?.message}</p>}
                        </div>
                        <input type="submit" value='Sign Up' className='btn btn-primary text-white font-semibold w-full max-w-xs mt-10' />
                    </form>
                    {signUpError && <p className='text-red-400'>{signUpError.slice(10, -1)}</p>}
                    <p className='mt-4 w-4/5 mx-auto text-[13px]'>Already have an account? <Link to='/login' className='text-secondary font-bold'>Login Now</Link> </p>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
