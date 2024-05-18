'use client'
import React, { useState } from 'react'
import SearchBar from './SearchBar'
import PostCard from './PostCard'


export default function SearchView(props) {
    const { postMetadata } = props
    const [searchValue, setSearchValue] = useState('')

    return (
        <div className='search-view-container'> {/* Container for the entire SearchView component */}
            <div className='searchbar'> {/* Search bar container */}
                <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className="postsContainer"> {/* Container for post cards */}
                {postMetadata.filter(val => val.title.includes(searchValue)).map((post, postIndex) => (
                    <PostCard key={postIndex} post={post} />
                ))}
            </div>
        </div>
    )
}
