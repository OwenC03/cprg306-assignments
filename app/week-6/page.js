import React from 'react';
import ItemList from './item-list'

const Page = () =>{
    return(
        <main className='flex flex-col items-center p-5'>
            <h1 className='font-semibold p-5' >Shopping List</h1>
            <ItemList />
        </main>
    );
};

export default Page;