import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export function AppContextProvider( {children} ){

    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPage,setTotalPage] = useState(null);
    const [loading,setLoading] = useState(false);
    

    async function apiCall(page=1,category=null,tag=null){
        
        setPosts([]);
        let url  = `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`;

        
        if(category !=null){
            url = url + `&category=${category}`
        }
        else if(tag!=null){
            url = url + `&tag=${tag}`
        }

        setLoading(true)
        try{
            let result = await fetch(`${url}`) ;
            
            let data = await result.json();
            
            setPosts(data.posts);
            setPage(data.page);
            setTotalPage(data.totalPages);

        }catch(e){

            alert("Error in api Call");
        }

        setLoading(false)

    }

    
    

    const value = {
        posts:posts,
        setPosts:setPosts,
        page:page,
        setPage:setPage,
        totalPage:totalPage,
        setTotalPage:setTotalPage,
        apiCall:apiCall,
        loading:loading,
        setLoading:setLoading,
        
    }


    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>



}



