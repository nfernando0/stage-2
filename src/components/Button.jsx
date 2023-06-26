import React from 'react'
import List from './List'

const Button = () => {
    return (
        <div>
            <button className='btn btn-primary' onClick={() => { alert('hello') }}>Click Me</button>
        </div>
    )
}

export default Button