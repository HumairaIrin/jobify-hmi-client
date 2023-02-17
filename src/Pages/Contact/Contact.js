import React from 'react';

const Contact = () => {
    return (
        <div className='w-[90%] p-5 mx-auto text-[18px] rounded-lg'>
              <div className=" body-font relative">
                        <div className=" px-5 mb-3 mx-auto">
                            <div className="flex flex-col text-center w-full mb-8">
                            <h3 className='text-[2rem] lg:text-[3rem] font-bold text-accent'>Contact Form</h3>
                                <p className="w-4/5 lg:w-[45%] mx-auto leading-relaxed text-[12px] lg:text-sm">Please use this form to submit a question for our staff to review.
                                 We will respond to your question/comment as soon as possible.</p>
                            </div>
                            <div className="mx-auto">
                                <div className="flex flex-wrap -m-2">
                                    <div className="p-2 w-[90%] lg:w-[80%] mx-auto">
                                        <div className="relative">
                                            <label htmlFor="name" className="leading-7 text-sm font-[600]">Full Name</label>
                                            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-[90%] lg:w-[80%] mx-auto">
                                        <div className="relative">
                                            <label htmlFor="email" className="leading-7 text-sm font-[600]">E-Mail address</label>
                                            <input type="text" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-[90%] lg:w-[80%] mx-auto">
                                        <div className="relative">
                                            <label htmlFor="message" className="leading-7 text-sm font-[600]">Message:</label>
                                            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-gray-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <button type="submit" className=" flex items-center mx-auto text-white font-medium bg-accent border-0 py-2 px-10 focus:outline-none hover:bg-gradient-to-r from-primary to-accent rounded text-lg">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default Contact;