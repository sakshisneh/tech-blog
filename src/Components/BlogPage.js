import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Context/AppContext'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Single_Blog } from './Single_Blog';

export const BlogPage = () => {

  let location = useLocation()
  let navigate = useNavigate()
  let {category,blogId} = useParams()

  const [currPost,setCurrPost] = useState(null);
  const [relatedPosts,setRelatedPosts] = useState([]);
  

  async function fetchRelatedPosts(){

    let baseUrl = `https://codehelp-apis.vercel.app/api/get-blog`

    setCurrPost(null);
    setRelatedPosts([]);

    try{

        let result = await fetch(`https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogId}`)
        let data = await result.json();

        setCurrPost(data.blog);
        setRelatedPosts(data.relatedBlogs);

    }catch{
        setCurrPost({});
        setRelatedPosts([]);
    }
    
  }

  useEffect( ()=>{

    if(blogId)
    fetchRelatedPosts()

  },[location.pathname,location.search])

  console.log(blogId)
  console.log(currPost)
  console.log(relatedPosts)
  

  
  

  return (
    <div className='flex flex-col gap-y-7 items-center'>
      

      {

        relatedPosts.length!=0 ? (<div className=' w-[44%]'><button onClick={()=>{ navigate(-1)}} className=' appearance-none w-[70px] border-2 rounded-md h-9 mt-5'>Back</button></div>) : (<div className='hidden'></div>)

      }
      


      {

        currPost == null ? (<p className=' font-bold text-3xl mt-[265px] hidden'> Loading...</p>) 
        : 
        (<Single_Blog post = {currPost}></Single_Blog>)
      }

      {

        relatedPosts.length!=0 ? (<div className='w-[45%] font-bold text-[30px] my-3'><p>Related Blogs</p></div>) : (<div className='hidden'></div>) 
      }
      
      
    
      <div className=' flex flex-col gap-y-10'>
      {
        relatedPosts.length == 0 ? (<p className=' font-bold text-3xl mt-[265px]'> Loading...</p>)
        :
        (

         relatedPosts.map((relatedPost)=>
        
          (

            
            <Single_Blog post = {relatedPost}></Single_Blog>
            
          )
        )

        )
      }

      </div>

        
    </div>
  )
}
