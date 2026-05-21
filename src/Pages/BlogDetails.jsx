import React from 'react'
import Header from '../common/Header'
import { useLocation } from 'react-router-dom'
import { blogs } from '../Data/bblog';

export default function BlogDetails() {
let uselocation = useLocation();
let currentId= uselocation.pathname.split('/')[2];
let CurrentData=blogs.filter((v)=>v.id==currentId)[0];


  return (
    <div>
        <Header></Header>
    <h3>{CurrentData.title}</h3>
    <h3>{CurrentData.body}</h3>
    </div>
  )
}
