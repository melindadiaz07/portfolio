import React from "react";
import { Link, withRouter } from "react-router-dom";

const BlogCard = (props) => {

  const { title, link, thumbnail, content, pubDate } = props.blog
  
  function toText(block) {
    console.log(block)
    let tag = document.createElement('div');
    tag.innerHTML = block;
    block = tag.innerText;
    return block
}

function truncateText(text, start, len) {
  return text.length > len ? text.slice(start, len) : text;
}

function convertDate(date) {
  let dateArray = date.slice(0, 10).split("-")
  let year = dateArray.shift();
  dateArray.push(year)
  console.log(date)
  return `Published: ${dateArray.join("/")}`;
}

function cleanTitle(checkTitle) {
  checkTitle = checkTitle.replace("amp;", "");
  return checkTitle
}
 
  return (
    <div className="blog-feed-container">
     <a target="_blank" rel="noopener noreferrer" href={`${link}`}>
    <div className="ImageContainer">
        <img src={`${thumbnail}`} className="Image" alt={truncateText(cleanTitle(title), 0, 60)}></img>
    </div>
    <div className="TDContainer">
        <h3>{truncateText(cleanTitle(title), 0, 60)}</h3><br />
        <div>{truncateText(content, 0, 500) + "..."}</div><br />
        <h4>{convertDate(pubDate)}</h4>
    </div>
</a>
</div>
  );
}

export default withRouter(BlogCard);

