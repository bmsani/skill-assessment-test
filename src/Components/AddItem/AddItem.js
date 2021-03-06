import cogoToast from 'cogo-toast';
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

        fetch('https://limitless-sands-79831.herokuapp.com/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                cogoToast.success('Successful', { heading: 'Task added' })
                navigate('/')
            })
    }
    return (
        <div>
            <div class="card w-96 mx-auto bg-slate-400 shadow-xl">
                <div class="card-body">
                    
            <form onSubmit={handleSubmit} className='grid grid-cols-1 items-center justify-items-center gap-5'>
                <input type="text" name='name' placeholder="Task Name" class="input input-bordered w-full max-w-xs" />
                <textarea name='description' class="textarea w-full max-w-xs" placeholder="task description"></textarea>
                <input type="submit" className='btn' />
            </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;