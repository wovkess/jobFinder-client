import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const JobsContext = createContext();

const API_URL = 'http://localhost:7000/jobs';

export const JobsProvider = ({ children }) => {
    const [jobs, setJobs] = useState([]);
    const [editingJob, setEditingJob] = useState(null);


    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await axios.get(API_URL);
            setJobs(response.data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    return (
        <JobsContext.Provider value={{
            jobs,
            setJobs,
            fetchJobs,
            editingJob,
            setEditingJob,
        }}>
            {children}
        </JobsContext.Provider>
    );
};
