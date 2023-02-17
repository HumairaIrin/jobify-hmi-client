import React from 'react';
import { Link } from 'react-router-dom';
import { ImOffice } from'react-icons/im';
import { ImLocation } from'react-icons/im';

const JobRow = ({job}) => {
    return (
        <tr>
        <td  key={job._id} className=''>
            <Link>{job.positionName}</Link>
            <p className='flex items-center text-[10px] text-[#000000cf]'><span className='mr-1'><ImOffice color='gray'/></span>{job.companyName}</p>
        </td>
        <td className='p-[3%] hidden lg:table-cell'><span className='mr-2 inline-block'><ImLocation color='gray'/></span>{job.jobLocation}</td>
        <td className='p-[3%]'><button className='btn btn-info btn-sm lg:btn lg:btn-info lg:text-white lg:rounded-full text-white rounded-full'>Apply Now</button></td>
    </tr>
    );
};

export default JobRow;