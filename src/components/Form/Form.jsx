import Navbar from '../Navbar/Navbar';
import { useState, useContext, useEffect } from "react";
import axios from 'axios';
import { JobsContext } from '../JobsContext';
import {useNavigate} from "react-router-dom";



const API_URL = import.meta.env.API_URL;

const Form = () => {
    const { fetchJobs, editingJob, setEditingJob } = useContext(JobsContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        company: '',
        position: '',
        salaryRange: '',
        status: '',
        note: '',
    });

    useEffect(() => {
        if (editingJob) {
            setFormData(editingJob);
        } else {
            setFormData({
                company: '',
                position: '',
                salaryRange: '',
                status: '',
                note: '',
            });
        }
    }, [editingJob]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (editingJob) {
                await axios.put(`${API_URL}/${editingJob._id}`, formData);
                setEditingJob(null);
                navigate('/table')
            } else {
                await axios.post(API_URL, formData);
            }

            fetchJobs(); // Обновляем список

            setFormData({
                company: '',
                position: '',
                salaryRange: '',
                status: '',
                note: '',
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <Navbar />
            <main className='flex justify-center items-center mt-32'>
                <form className='w-[400px] flex justify-center flex-wrap h-[650px] bg-slate-900 rounded-xl' onSubmit={handleSubmit}>
                    <h3 className='text-3xl text-white mt-11'>
                        {editingJob ? 'Edit Job' : 'Add Job'}
                    </h3>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company"
                        className='w-10/12 h-11 outline-0 border border-slate-400 rounded px-4'
                        required
                    />
                    <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        placeholder="Position"
                        className='w-10/12 h-11 outline-0 border border-slate-400 rounded px-4'
                        required
                    />
                    <input
                        type="text"
                        name="salaryRange"
                        value={formData.salaryRange}
                        onChange={handleInputChange}
                        placeholder="Salary Range"
                        className='w-10/12 h-11 outline-0 border border-slate-400 rounded px-4'
                    />
                    <input
                        type="text"
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        placeholder="Status"
                        className='w-10/12 h-11 outline-0 border border-slate-400 rounded px-4'
                    />
                    <textarea
                        name="note"
                        value={formData.note}
                        onChange={handleInputChange}
                        placeholder="Note"
                        className='w-10/12 outline-0 border border-slate-400 rounded px-4 h-28 py-4'
                    />
                    <button
                        className='w-64 h-11 bg-white text-slate-800 rounded font-bold hover:bg-orange-500 hover:text-white ease-in-out duration-300 hover:scale-110'
                        type="submit"
                    >
                        {editingJob ? 'Update Job' : 'Add Job'}
                    </button>
                </form>
            </main>
        </>
    );
};

export default Form;
