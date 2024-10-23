import React from 'react'
import { Link } from 'react-router-dom'

export const Single_Blog = (props) => {

    let post = props.post;

  return (
    <div className='flex flex-col items-center'>

        <div className='w-[45%] ' key={post.id}>
                <Link to={`/blogId/${post.id}`} className=' font-bold text-[20px] hover:underline'>{post.title}</Link>

                <p className=' mt-1 '> By <span className=' italic '>{post.author}</span> 
                on  <Link to={`/category/${post.category}`}  className=' font-medium underline'>{post.category}</Link> </p>

                <p className=''> Posted On {post.date}</p>

                <p className=' mt-4 '> {post.content} </p>

                <div className=' mt-2 '>
                {
                    post.tags.map( (tag,index) =>

                        (
                            <Link key={index} to={`/tag/${tag}`} className=' text-blue-700 font-medium underline mr-2 '> #{tag}</Link>
                        )
                    )
                }
                </div>

                </div>

    </div>
  )
}
