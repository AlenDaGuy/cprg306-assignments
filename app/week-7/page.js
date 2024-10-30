"use client"

import React, { useState } from 'react';
import ItemList from './item-list';
import itemsData from './items.json';
import NewItem from './new-item';

export default function Page() {

    const [items, setItems] = useState(itemsData)

    function handleAddItem(newItem) {

        setItems([...items, newItem])

    }

    return (
        <main className='m-10 w-1/3 flex flex-col'>
            <h1 className="text-4xl font-bold mb-4">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items}/>
        </main>
    )
}