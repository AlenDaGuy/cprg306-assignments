"use client"

import React, { useState } from 'react'

export default function NewItem({ onAddItem }) {

    const CATEGORY_OPTIONS = ["Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"]

    const [quantity, setQuantity] = useState(1)
    const [name, setName] = useState('')
    const [category, setCategory] = useState('produce')

    function increment() {
        if (quantity < 20) {
            setQuantity(quantity + 1)
        }
    }

    function decrement() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    
    const handleSubmit = e => {
        e.preventDefault()

        const id = Math.random().toString(36).substring(2, 10)

        const item = {
            quantity, name, category, id
        }

        onAddItem(item)
    }

    return (

        <form className='bg-white p-10 mt-10 text-black' onSubmit={handleSubmit}>

            <div>
                <label className='font-bold'>
                    Name:
                </label>

                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        className="border bg-gray-800 text-white p-2 rounded-md" />

                </div>
            </div>

            <div className='my-5'>
                <label className='font-bold'>
                    Quantity: {quantity}
                </label>

                <div className='mt-2'>
                    <input
                        type="button"
                        value="-"
                        onClick={decrement}
                        disabled={quantity === 1}
                        className="border bg-gray-800 text-white p-2 rounded-md w-1/2 disabled:bg-gray-500" />
                    <input
                        type="button"
                        value="+"
                        onClick={increment}
                        disabled={quantity === 20}
                        className="border bg-gray-800 text-white p-2 rounded-md w-1/2 disabled:bg-gray-500" />
                </div>
            </div>

            <div>
                <label className='font-bold'>
                    Category:
                </label>

                <select className='bg-gray-800 text-white rounded-md p-2' onChange={e => setCategory(e.target.value)}>
                    {CATEGORY_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
            </div>

            <button type='submit' className='bg-green-800 mt-5 text-white rounded-md p-2'>Submit</button>

        </form>
    )
}