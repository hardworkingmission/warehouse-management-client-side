import React from 'react';

const CustomSpinner = () => {
    return (
        <div class="flex justify-center items-center my-3">
            <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-pink-600" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default CustomSpinner;