import React, { useContext } from 'react'
import { Blog } from './Blog'
import { Pagination } from './Pagination'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import { Posts } from './Posts'


export const Category = () => {

  let {category} = useParams()
  
  let navigate = useNavigate()
 
  
  return (
    <div className=' mt-8'>
      
      <Posts></Posts>
      <Pagination></Pagination>
    </div>
  )
}
