import React from 'react';

function Navbar(props) {
    return (
        <div className='absolute z-10 h-20 w-full bg-zinc-900'>
            <ul className='flex justify-end space-x-4 text-white font-bold'>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Skills</li>
                <li className='cursor-pointer'>Projects</li>
                <li className='cursor-pointer'>Contacts</li>
            </ul>
        </div>
    );
}

export default Navbar;