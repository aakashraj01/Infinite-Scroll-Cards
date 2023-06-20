import { useState } from "react"
import data from "../utils/data.json";


const Accordian = ({setFilter}) => {
    const [typeselectd,setTypeselectd] = useState(null)
    const [cardholder,setCardholder] = useState(0)
    
    const handleType = (option) => {
        if(typeselectd===option){
            setTypeselectd(null)
        }else{
            setTypeselectd(option)
        }
    }
    const handleApply = () => {
        setFilter({
            type:typeselectd,
            cardholder:cardholder
        })
    }
    const handleClear = () => {
        setFilter({
            type:'',
            cardholder:0
        })
        setTypeselectd(null)
        setCardholder(0)
    }

    return(
        <div className='absolute z-30 top-full right-0 max-w-[300px] w-full bg-white shadow-md'>
        <div className='flex flex-col gap-2 mx-5 my-2'>
            <span className='font-bold text-gray-600'>Filters</span>
            <hr />
            <div>
                <span className='font-medium text-gray-400'>Type</span>
                <div className='flex items-center'>
                    <div className='flex items-center gap-1'>
                        <input value="subscription"
                        checked={typeselectd==='subscription'}
                        onChange={()=>handleType('subscription')}
                        type='checkbox' />
                        <span className='text-sm'>Subscription</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <input className='ml-4'
                        checked={typeselectd==='burner'}
                        value="burner"
                        onChange={()=>handleType('burner')}
                        type='checkbox' />
                        <span className='text-sm'>Burner</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className='flex flex-col'>
                <span className='font-medium text-gray-400'>CardHolder</span>
                <select
                className="w-full p-2 text-sm outline-none bg-gray-50"
                value={cardholder}
                onChange={(e) => setCardholder(e.target.value)}
                >
                <option value="0">Select CardHolder</option>
                {Array.from(new Set(data.data.map((card) => card.card_holder))).map((cardHolder) => (
                    <option key={cardHolder} value={cardHolder}>
                    {cardHolder}
                    </option>
                ))}
                </select>
            </div>
            <div className='flex items-center gap-3 mt-4'>
                <button onClick={()=>handleApply()} className='w-full px-2 text-white rounded-md bg-rose-600'>Apply</button>
                <button onClick={()=>handleClear()} className='w-full px-2 text-gray-400 rounded-md bg-gray-50 '>Clear</button>
            </div>
        </div>
    </div>
    )
}

export default Accordian