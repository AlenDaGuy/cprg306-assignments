import React from 'react';
import ItemList from './item-list';

export default function Page() {
    return (
        <main className='m-10'>
            <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
            <ItemList />
        </main>
    )
}