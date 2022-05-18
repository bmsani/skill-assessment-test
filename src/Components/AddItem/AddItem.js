import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault();
        const task = {
            name: event.target.name.value,
            description: event.target.description.value
        };

        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(task)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            navigate('/')
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 items-center justify-items-center gap-5'>
            <input type="text" name='name' placeholder="Task Name" class="input input-bordered w-full max-w-xs" />
            <textarea name='description' class="textarea w-full max-w-xs" placeholder="task description"></textarea>
            <input type="submit" className='btn' />
            </form>
        </div>
    );
};

export default AddItem;