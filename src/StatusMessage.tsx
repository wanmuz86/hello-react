import React, {useState} from 'react'


const StatusMessage = () => {
    // Union data type, either 'loading', 'success' or 'error'
    // Initialize it at 'loading'
    const [status, setStatus] = useState<'loading'|'success'|'error'>('loading');

    //updateStatus can only retrieve 'loading', 'success' or 'error'
    const updateStatus = (newStatus: 'loading'|'success'|'error') => {
        setStatus(newStatus)
    }
  return (
    <div>
        <h1>Status Message</h1>
        <p>
            {
                // Strict equality in JS === (type and value need to be the same) '1' === 1 //false
                // == value needs to be the same '1' == 1 => true
                status === 'loading'
                ? 'Loading..'
                : status === 'success'
                ? 'Data succesfully retrieved'
                : 'There was an error loading data'
            }
        </p>
        <button onClick={()=>updateStatus('loading')}>Set to Loading</button>
        <button onClick={()=> updateStatus('success')}>Set to success</button>
        <button onClick={()=>updateStatus('error')}>Set to error</button>
    </div>
  )
}

export default StatusMessage