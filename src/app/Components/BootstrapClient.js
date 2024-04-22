"use client"
import React, { useEffect } from 'react'

const BootstrapClient = () => {
    useEffect(()=>{
       require('bootstrap/dist/js/bootstrap.bundle.js')
    },[])
  return null
}

export default BootstrapClient
