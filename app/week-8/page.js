"use client"

import React, { useState } from 'react';
import ItemList from './item-list';
import itemsData from './items.json';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';

export default function Page() {

    const [items, setItems] = useState(itemsData)
    const [selectedItemName, setSelectedItemName] = useState('')

    function handleAddItem(newItem) {

        setItems([...items, newItem])

    }

    function handleItemSelect(itemName) {
        setSelectedItemName(itemName)
    }

    return (
        <div className='flex m-10 justify-evenly'>
            <main className='w-1/3 flex flex-col'>
                <h1 className="text-4xl font-bold mb-4">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </main>

            <MealIdeas ingredient={selectedItemName} />
        </div>
    )
}