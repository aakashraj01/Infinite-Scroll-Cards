"use client"
import Image from 'next/image'
import Navigator from './components/Navigator'
import Container from './components/Container'
import { useEffect, useState } from 'react'
import data from './utils/data.json'

export default function Home() {
  const [cardType, setCardType] = useState('all')
  const [filteredData, setFilteredData] = useState(data.data)
  // Fixed Owner ID to 1
  const fixed = 1
  // Filter Data based on Card Type
  useEffect(() => {
    if (cardType === 'all') {
      setFilteredData(data.data)
    } else {
      setFilteredData(data.data.filter(item => item.owner_id === fixed))
    }
  }, [cardType])


  return (
   <div className='p-4'>
   {/* Card Types Navigation */}
   <Navigator cardType={cardType} setCardType={setCardType} />
   {/* Main Card Container */}
   <Container data={filteredData} />

   </div>
  )
}
