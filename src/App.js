import './App.css';
import { FacebookShareButton,TwitterShareButton,WhatsappShareButton,FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';
import Navbar from './Components/Navbar/Navbar';

function App() {

  // const currPageURl = window.location.href;
  const currPageURl = "sajal.com";
  return (
    
    <>
   <Navbar/>

   <FacebookShareButton 
   url={currPageURl}
   quote="Share this News"
   hashtag="#Breaking">
   <FacebookIcon/>
   </FacebookShareButton>

   <TwitterShareButton
   url={currPageURl}
   quote="Share this News"
   hashtag="#Breaking">
    <TwitterIcon/>
   </TwitterShareButton>

   <WhatsappShareButton
   url={currPageURl}
   quote="Share this News"
   hashtag="#Breaking">
    <WhatsappIcon/>
   </WhatsappShareButton>
   </>
  );
}

export default App;
