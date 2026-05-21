import React from 'react'
import Header from '../common/Header'
import { blogs } from '../Data/bblog'
import { Link } from 'react-router-dom'

export default function blog() {

    let allBlogs=blogs.map((v,i)=>{
        return(
    <div className='blogitems' key={i}>
        <h3>{v.title}</h3>
        <p>{v.body}</p>
        <button> <Link to={`/blog/${v.id}`}>Read More</Link> </button>
    </div>

        )
    })
  return (
    <div>
<Header></Header>

<h1>Blog Page</h1>
<div className='container'>
    {allBlogs}
   
</div>


    </div>
  )
}
