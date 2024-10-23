import React, { useContext } from 'react'
import {AppContext} from '../Context/AppContext';
import { Posts } from './Posts';

export const Blog = () => {

    const {posts,loading,setLoading} = useContext(AppContext);
    
   
  return (
    <div className=' mt-8'>

      <Posts></Posts>
        
    </div>

    
  )
}
