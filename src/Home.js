
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
    // let name='mario';
    
      // const handleDelete=(id)=>{
      //   const newBlogs=blogs.filter(blog=>blog.id!==id);
      //   setBlogs(newBlogs)
      // }

    const { data: blogs,isPending,error} = useFetch(' http://localhost:8000/blogs ');
      

    return ( 
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}          
            {blogs && <BlogList blogs={blogs}/>}
            
        </div>
     );
}
 
export default Home;
