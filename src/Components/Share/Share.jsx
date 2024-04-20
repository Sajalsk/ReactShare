import React from 'react'
import { FacebookShareButton,TwitterShareButton,WhatsappShareButton,FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';

const Share = () => {
    const currPageURl = "sajal.com";

  return (
  <>
  <div className="share text-center" style={{marginTop:"15px" , marginLeft:"-50px"}}>
   
    <div className="logo ">
   <FacebookShareButton 
   url={currPageURl}
   quote="Share this News"
   hashtag="#Breaking">
   <FacebookIcon size={40}/>
   </FacebookShareButton>

   <TwitterShareButton
   url={currPageURl}
   quote="Share this News"
   hashtag="#Breaking">
    <TwitterIcon size={40}/>
   </TwitterShareButton>

   <WhatsappShareButton
   url={currPageURl}
   quote="Share this News"
   hashtag="#Breaking">
    <WhatsappIcon size={40}/>
   </WhatsappShareButton>
   </div>

   </div>
   </>
  )
}

export default Share;