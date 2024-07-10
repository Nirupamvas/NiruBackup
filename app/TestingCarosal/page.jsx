"use client"

import RelatedCarosal from '@/components/RelatedCarosal'
import React from 'react'
import Success from '../success'
import Failed from '../failed'
import Cart from '../cart'

const page = () => {
  return (
    <div>
        <Success/>
        <Failed/>
        <Cart/>
    </div>
  )
}

export default page