import React from 'react';
import { Link } from 'react-router-dom';
import { ImOffice } from'react-icons/im';
import { ImLocation } from'react-icons/im';

const ExperiencedJobRow = ({job}) => {
    return (
        <tr>
            <td>
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={job.companyImg} alt="company logo" />
              </div>
            </div>
            </td>
        <td  key={job._id} className=''>
            <Link>{job.positionName}</Link>
            <p className='flex items-center text-[10px] text-[#000000cf]'><span className='mr-1'><ImOffice color='gray'/></span>{job.companyName}</p>
        </td>
        <td className='p-[3%] hidden lg:table-cell'><span className='mr-2 inline-block'><ImLocation color='gray'/></span>{job.jobLocation}</td>
        <td className='p-[3%]'><button className='btn btn-info btn-sm lg:btn lg:btn-info lg:text-white lg:rounded-full text-white rounded-full'>Apply</button></td>
    </tr>
    );
};

export default ExperiencedJobRow;