import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { Single_Blog } from './Single_Blog'

export const Posts = () => {


    let {posts,loading} = useContext(AppContext)
    let location = useLocation()
    let {category,tag} = useParams()
    let navigate = useNavigate()

   return (
    <div className=' flex flex-col overflow-y-scroll gap-y-10 h-[580px]'>

        {
            (location.pathname.includes('category') && posts.length !== 0) ? (
            
            <div className=' w-[45%] mx-auto '> <button className=' appearance-none w-[70px] border-2 rounded-md h-9' onClick={()=> navigate(-1)} > Back</button> <span className=' pl-4 font-bold text-2xl'>Blogs on <span className=' underline'>{category}</span></span></div>
        
        
        ) :

            (<div className=' hidden'></div>)
        }

        {
            (location.pathname.includes('tag') && posts.length !== 0)? (
            
            <div className=' w-[45%] mx-auto'> <button className=' appearance-none w-[70px] border-2 rounded-md h-9' onClick={()=> navigate(-1)} > Back</button> <span className=' pl-4 font-bold text-2xl'>Blogs Tagged <span className=' text-blue-600 underline '>#{tag}</span></span></div>) 
            
            
            : (<div className=' hidden'></div>)
        }

        
        {

        
        posts.length === 0  ? (<p className=' font-bold text-3xl mt-[265px] mx-auto'> Loading...</p>) : (

            posts.map( (post) => 

            (
                <Single_Blog post={post}></Single_Blog>
            )
        )
        )




        }

   
    
    </div>
  )
}
