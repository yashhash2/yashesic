'use client'
import React, { useState } from 'react'

export default function SearchBar(props) {
    const { searchValue, setSearchValue } = props
    return (<div className='sb'>
        <input placeholder='Search blog posts...' value={searchValue} onChange={(e) => {
            setSearchValue(e.target.value)
            }} />
    </div>)
}
