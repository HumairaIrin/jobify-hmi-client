import { useQuery } from '@tanstack/react-query';
import React from 'react';
import './FreshersJob.css'
import JobRow from './JobRow';

const FreshersJob = () => {
    const {data: freshersJob=[]} = useQuery({
        queryKey: ['freshersJob'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/freshersJob');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className='text-[2rem] lg:text-[3rem] mb-[4%] job-heading'>Freshers Job section</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                        <tbody>
                        {    
                            freshersJob.map(job => 
                            <JobRow key={job._id} job={job}></JobRow>
                            )
                        
                        }
                        </tbody>
                </table>
            </div>
            <button type="submit" className=" flex items-center mt-[1rem] mx-auto text-white font-medium bg-accent border-0 py-2 px-10 
            focus:outline-none hover:bg-gradient-to-r from-primary to-accent rounded text-lg">See All Jobs</button>
        </div>
    );
};

export default FreshersJob;