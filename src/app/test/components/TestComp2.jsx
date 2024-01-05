"use client"
import React, { useState } from 'react'

export default function TestComp2({ permissions }) {
    const permissionsData = JSON.parse(permissions.value)
    const [data, seData] = useState(permissionsData)

    console.log(data)
  return (
    <div>
        {data.data.map(item => item.id + ', ')}
    </div>
  )
}
