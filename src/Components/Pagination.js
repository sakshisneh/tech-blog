import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { useLocation, useNavigate } from 'react-router-dom';

export const Pagination = () => {

  let {page,setPage,totalPage} = useContext(AppContext);
  let navigate = useNavigate();
  let location = useLocation()
  console.log(location.pathname)

  function prevHandler(){

    setPage(page--);
    navigate(`${location.pathname}?page=${page}`)
  }

  function nextHandler(){

    
    setPage(page++);
    navigate(`${location.pathname}?page=${page}`)
    
  }

  return (
    <div className=' flex justify-center border-t-2 ' >

      <div className=' w-[46%] flex justify-between mt-3'>
      <div className=' flex '>
      {
        Boolean(page>1) ? (<button onClick={prevHandler} className=' appearance-none w-[80px] border-2 rounded-md h-8 mr-2'>Previous</button>) : (<button className=' hidden'>Previous</button>)
      }
      {
        Boolean(page<totalPage) ? ( <button onClick={nextHandler} className=' appearance-none w-[60px] border-2 rounded-md h-8'>Next</button>) : (<button className=' hidden'>Next</button>)
      }
      </div>

      <div> <span> Page {page} of {totalPage} </span></div>

      </div>
        
    </div>
  )
}
