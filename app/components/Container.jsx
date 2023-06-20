"use client"
import React, { useEffect, useState } from 'react'
import {BsSearch,BsFilter} from 'react-icons/bs'
import Accordian from './Accordian'
import CardContainer from './CardContainer'






const Container = ({data}) => {
    const [isSearch,setIsSearch] = React.useState(true)
    const [isFilter,setIsFilter] = React.useState(false)
    const [search,setSearch] = React.useState('')
    const [filter,setFilter] = useState({
        type:'',
        cardholder:0
    })
    const [filteredData,setFilteredData] = useState(data)
    // Function to handle Hide
    const handleHide = () => {
        setTimeout(() => {
            setIsSearch(!isSearch)
        }, 1000);
    }

    // Filter Data
    useEffect(() => {
        if(filter.type==='subscription'){
            setFilteredData(data.filter((item)=>item.card_type==='subscription'))
        }else if(filter.type==='burner'){
            setFilteredData(data.filter((item)=>item.card_type==='burner'))
        }else{
            setFilteredData(data)
        }

    }, [filter,data])

    // Filter Data based on Search
    useEffect(() => {
        if(search){
            setFilteredData(data.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase())))
        }else{
            setFilteredData(data)
        }
    }, [search,data])

  



  return (
    <>
    <div className='relative flex items-center justify-end gap-2 mt-2'>
        <div>
            {/* Search */}
            {
                isSearch? <BsSearch onClick={()=>setIsSearch(!isSearch)} className='text-gray-500 cursor-pointer'/>:
                <input onBlur={()=>handleHide()} className='text-sm border outline-none' onChange={(e)=>setSearch(e.target.value)} placeholder='Search'></input>
            }
        </div>
        <div onClick={()=>setIsFilter(!isFilter)} className='flex gap-1 p-1 rounded-md cursor-pointer hover:bg-gray-200'>
            <BsFilter className='text-gray-500'/>
            <span className='text-xs'>Filter</span>
        </div>
        {/* Filter Menu */}
        {
            isFilter?<Accordian setFilter={setFilter} />:''
        }
    </div>
    <CardContainer data={filteredData}/>

    </>
  )
}

export default Container



