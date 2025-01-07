import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ConfirmRidePopUp = (props) => {
    const [otp, setOtp] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setRidePopUpPanel(false);
                props.setConfirmRidePopUpPanel(false);
            }}>
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm this ride to Start</h3>
            <div className='flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdBuvbsYu7WYAAUY2AqSQRGNESsYdkucDkQ&s" alt="" />
                    <h2 className='text-lg font-medium'>Harshi Patel</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>
            <div className='flex gap-2 justify-between items-center flex-col'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="text-lg ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹193.20</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <div className='mt-6 w-full'>
                    <form onSubmit={submitHandler}>
                        <input value={otp} onChange={(e)=>{
                            setOtp(e.target.value)
                        }} className='bg-[#eee] px-6 py-4 font-mono text-base rounded-lg w-full mt-5' type="text" placeholder='Enter OTP' />
                        <Link to='/captain-riding' className='w-full text-lg flex justify-center mt-5 bg-green-600 font-semibold rounded-lg text-white p-3'>
                            Confirm
                        </Link>
                        <button type="button" onClick={() => {
                            props.setRidePopUpPanel(false);
                            props.setConfirmRidePopUpPanel(false);
                        }} className='w-full mt-2 text-lg bg-red-600 font-semibold rounded-lg text-white p-3'>
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConfirmRidePopUp;