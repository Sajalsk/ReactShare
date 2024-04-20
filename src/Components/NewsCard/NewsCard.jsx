import React, { useEffect } from "react";
import Share from "../Share/Share";
import { Helmet } from 'react-helmet';

const NewsCard = () => {
  const postTitle = 'AARA Solutions';
  const postDescription = 'Check out this amazing post!';
  const postImageUrl = 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_01/2705191/nbc-social-default.png';
  const postUrl = 'https://aaratechnologies.com/';
  const author = 'Times of India';

  // const url = 'https://aaratechnologies.com/'; // Replace with the URL of your blog or page
  // const title = 'AARA Solutions'; // Replace with the title of your blog or page
  // const description = 'Check out this Company!'; // Replace with the description of your blog or page
  // const imageUrl = 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_01/2705191/nbc-social-default.png'; // Replace with the URL of the image associated with your blog or page
  // const author = "Times of India";

 
  return (
   
    <>
     <Helmet>
    <meta property="og:title" content={postTitle} />
    <meta property="og:description" content={postDescription} />
    <meta property="og:image" content={postImageUrl} />
    <meta property="og:url" content={postUrl} />
  </Helmet>
     
      <div style={{marginLeft:"600px", marginTop:"100px"}} >
      <div className="card text-center" style={{ width: "18rem" }}>
        <img src={ postImageUrl}className="card-img-top"alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{postTitle} </h5>
          <p className="card-text">{postDescription}</p>
          <p className="card-text">
            <small className="text-muted">
              {" "}
              By {!author ? "Times of India" : author} on{" 16-07-23 "}
              {/* {new Date(date).toGMTString()}{" "} */}
            </small>
          </p>
          <a href={postUrl} className="btn btm-sm btn-dark mt-2">
            Read More
          </a>
        </div>
      </div>
      <div className="sty" style={{marginRight:"600px"}}>
      <Share url={postUrl} title={postTitle} description={postDescription} imageUrl={postImageUrl} />
      </div>
  </div>
  </>
  );
};

export default NewsCard;