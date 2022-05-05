import React from 'react';

const AddItem = () => {
    return (
        <div>
            <form >
                <div>
                    <label htmlFor="Name"></label>
                    <input type="text" name="name" placeholder='Car Name' />
                </div>
            </form>
        </div>
    );
};

export default AddItem;