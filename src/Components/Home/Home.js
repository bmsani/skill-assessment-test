import React, { useEffect, useState } from 'react';

const Home = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTasks(data));

    }, [])
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Task NO</th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task, index) => <tr key={task._id}>
                        <th>{index + 1}</th>
                        <td>{task.name}</td>
                        <td>{task.description}</td>
                        <td> <button class="btn btn-xs btn-info text-white">Complete</button> </td>
                        <td> <button class="btn btn-xs btn-error">Delete</button> </td>
                    </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Home;