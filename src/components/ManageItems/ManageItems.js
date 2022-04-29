import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';


const ManageItems = () => {
    const navigate=useNavigate()
    return (
        <div className='w-5/6 mx-auto md:flex'>
            <div className="lg:w-3/12 md:w-4/12 w-full">
                <nav className='w-full p-2'>
                    <ul>
                        <li className='mb-2'>
                            <button className='bg-gray-300 p-2 rounded w-full' onClick={()=>navigate('/manageitems/allitems')}>All Items</button>
                        </li>
                        <li>
                            <button className='bg-gray-300 p-2 rounded w-full' onClick={()=>navigate('/manageitems/additem')}><FontAwesomeIcon icon={faPlus}/> Add An Item</button>
                        </li>
                    </ul>
                </nav>

            </div>
        <div className="lg:w-9/12 md:w-8/12 w-full bg-gray-100 mx-auto p-2">
                 
                <Outlet/>
        </div>
        
    </div>
    );
};

export default ManageItems;