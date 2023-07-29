import {useEffect, useState} from 'react'
import BlogList from './BlogList';
const Home = () => {
    // let name='mario';
    const [blogs, setBlogs] = useState(null);
    
      // const handleDelete=(id)=>{
      //   const newBlogs=blogs.filter(blog=>blog.id!==id);
      //   setBlogs(newBlogs)
      // }

      useEffect(()=>{
        // npx json-server --watch data/db.json --port 8000
        fetch(' http://localhost:8000/blogs ') 
        .then(res=>{
          return res.json();
        })
        .then(data=>{
          // console.log(data);
          setBlogs(data);
        })
      },[]);

    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs}/>}
            
        </div>
     );
}
 
export default Home;
