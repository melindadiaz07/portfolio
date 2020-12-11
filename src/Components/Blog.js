
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard'


const Blog = () => {

const mediumFeed = "https://medium.com/feed/@melindadiaz-75942"
const jsonEndpoint = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40melindadiaz-75942"
const [feed, setFeed] = useState([])

useEffect(() => {
  fetch(jsonEndpoint)
  .then(res => res.json())
  .then(data => {
    setFeed(data)
    console.log(data.items)
  })

}, [])
 
   return(
     <div className="blog-container">
       { !feed.items ? null : 
       feed.items.map(blog => {
         return <BlogCard blog={blog} key={blog.pubDate}/>
       })}
     </div>
    );
  
}

export default Blog;

