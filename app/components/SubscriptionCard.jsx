import React from 'react'
import {SlRefresh} from 'react-icons/sl'

const SubscriptionCard = ({item}) => {
    const spent = (item.spent.value / item.available_to_spend.value) * 100
    console.log(spent)
  return (
    <div className='max-w-[300px] min-w-[300px] flex flex-col gap-2 p-4 shadow-md'>
        <div className='flex items-center justify-between'>
            <div>
                <h3 className='text-lg font-bold'>{item.name}</h3>
                <div className='font-semibold text-gray-500'>
                    <span>{item.budget_name}</span>
                </div>
            </div>
            <SlRefresh size={60} className='p-4 rounded-full bg-rose-50 fill-rose-500' />     
        </div>
        <div className='flex justify-between text-sm text-gray-400'>
            <div className='flex flex-col'>
                <span>Amount</span>
                <span className='font-semibold text-gray-600' >300 SGD</span>
            </div>
            <div className='flex flex-col'>
                <span>Frequency</span>
                <span className='font-semibold text-gray-600'>Monthly</span>
            </div>
            <div className='flex flex-col'>
                <span>Expiry</span>
                <span className='font-semibold text-gray-600'>21 July 2021</span>
            </div>
        </div>
        <div className='w-full relative h-[10px] bg-rose-500 rounded-lg'>
            <div className={`absolute bg-green-500 w-[25%] h-full rounded-lg `}></div>
        </div>
        <div className='flex justify-between text-gray-400'>
            <div className='flex items-center gap-3'>
                <span className='inline-block w-2 h-2 bg-green-500 rounded-full'></span>
                <span>Spent</span>
            </div>
            <span className='font-semibold text-gray-600'>{item.spent.value} SGD</span>
        </div>
        <div className='flex justify-between text-gray-400'>
            <div className='flex items-center gap-3'>
                <span className='inline-block w-2 h-2 rounded-full bg-rose-500'></span>
                <span>Balance</span>
            </div>
            <span className='font-semibold text-gray-600'>{item.available_to_spend.value} SGD</span>
        </div>
    </div>
  )
}

export default SubscriptionCard