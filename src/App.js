import { Header } from './Components/Header';
import './App.css';
import { AppContext } from './Context/AppContext';
import { useContext, useEffect } from 'react';
import { Route, Routes, useLocation,  useSearchParams } from 'react-router-dom'
import { Category } from './Components/Category';
import { Tag } from './Components/Tag';
import { Home } from './Components/Home';
import { BlogPage } from './Components/BlogPage';


function App() {

  let {apiCall} = useContext(AppContext);

  let [searchParam,setsearchParam] = useSearchParams();

  let location = useLocation();
  useEffect(()=>{ 
    
    let page = searchParam.get('page') ?? 1; 

    if(location.pathname.includes('category')){

      let category = location.pathname.split("/").at(-1).replaceAll("-","");
      apiCall(page,category,null);
      
    
    }
    else if(location.pathname.includes('tag')){

      let tag = location.pathname.split("/").at(-1).replaceAll("-","");
      apiCall(page,null,tag);
    }
    else{
      apiCall(page,null,null);
    }

  },[location.pathname,location.search]);


  return (
    <div className="">
      <Header></Header>
      <Routes>
        
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/blogId/:blogId" element={<BlogPage></BlogPage>}></Route>
          <Route path="/category/:category" element={<Category></Category>}></Route>
          <Route path="/tag/:tag" element={<Tag></Tag>}></Route>

      </Routes>
    </div>
  );
}

export default App;
