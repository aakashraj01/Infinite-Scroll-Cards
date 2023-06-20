import React from 'react'

const Navigator = ({cardType , setCardType}) => {
  return (
    <>
    <nav className='border-b-[2px] border-gray-200'>
        <ul className='flex gap-4 pb-2 text-gray-500'>
            {/* Updates the Css of the li According to the cardType Selected */}
            <li 
            className={`relative cursor-pointer ${cardType==='your'?'before:block before:-bottom-[10px] before:w-[100%] before:h-[2px] before:absolute before:bg-red-500 before:rounded-lg text-black':''}`}
            onClick={()=>setCardType('your')}
            >Your</li>
            <li 
            className={`relative cursor-pointer ${cardType==='all'?'before:block before:-bottom-[10px] before:w-[100%] before:h-[2px] before:absolute before:bg-red-500 before:rounded-lg text-black':''}`}
            onClick={()=>setCardType('all')}
            >All</li>
            <li 
            className={`relative cursor-pointer ${cardType==='blocked'?'before:block before:-bottom-[10px] before:w-[100%] before:h-[2px] before:absolute before:bg-red-500 before:rounded-lg text-black':''}`}
            onClick={()=>setCardType('blocked')}
            >Blocked</li>
        </ul>
    </nav>
    </>
  )
}

export default Navigator