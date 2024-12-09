import Navbar from '../Navbar/Navbar';
import {JobsContext} from "../JobsContext.jsx";
import {useContext} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const API_URL = import.meta.env.API_URL;

const Table = () => {
    const navigate = useNavigate();
    const { jobs, fetchJobs, setEditingJob } = useContext(JobsContext);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            fetchJobs();
        } catch (error) {
            console.error('Error deleting job:', error);
        }
    };

    const handleEdit = (job) => {
        setEditingJob(job);
        navigate(`${API_URL}/form`)
    };

    return (
        <>
            <Navbar />
            <main className='flex justify-center items-center mt-16'>
                <table className='table-auto bg-gray-500 text-white w-10/12 h-[500px] rounded'>
                    <thead className='w-full'>
                        <tr className='flex items-center px-8'>
                            <th className='flex justify-center w-1/6'>Company</th>
                            <th className='flex justify-center w-1/6'>Position</th>
                            <th className='flex justify-center w-1/6'>Salary Range</th>
                            <th className='flex justify-center w-1/6'>Status</th>
                            <th className='flex justify-center w-1/6'>Note</th>
                            <th className='flex justify-center w-1/6'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job) => (
                            <tr className='bg-gray-600 flex px-8 py-2 my-3' key={job._id}>
                                <td className='flex justify-center w-1/6'>{job.company}</td>
                                <td className='flex justify-center w-1/6'>{job.position}</td>
                                <td className='flex justify-center w-1/6'>{job.salaryRange}</td>
                                <td className='flex justify-center w-1/6'>{job.status}</td>
                                <td className='flex justify-center w-1/6' >{job.note}</td>
                                <td className='flex gap-x-1 w-1/6'>
                                    <button
                                        onClick={() => handleEdit(job)}
                                        className='bg-violet-400 w-20 h-7 rounded-xl text-white'
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(job._id)}
                                        className='bg-violet-600  w-20 h-7 rounded-xl text-white'
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </>
    );
};

export default Table;