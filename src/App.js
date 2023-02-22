import React from 'react';
import ReactPlayer from 'react-player';
import bg from './assets/hill.jpg';
import makeouthill from './assets/makeouthill.svg';

function App() {
  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <img className='flex justify-center' src={makeouthill} />
      <div className="flex justify-center">
        <ReactPlayer width={850} height={480} url='https://youtu.be/h3r9myZYADc?list=PLM4hC1K8qdh3VMjWGZvz8ZnKcfRakyhYX' />
      </div>
      <table className='mx-auto border-collapse border-0 border-red-600 text-red-600 mt-10'>
        <div>
          <th className='border border-red-600 px-7 font-extralight'>watch</th>
          <th className='border border-red-600 px-7 font-extralight'>read</th>
          <th className='border border-red-600 px-7 font-extralight'>look at me: the album</th>
          <th className='border border-red-600 px-7 py-6 font-extralight'>join</th>
        </div>
      </table>
      <div className='transition h-1/2'>
        <div className='text-xl mt-40 text-black'>
          <h1 className='flex justify-center text-black font-bold font-serif mt-4 '>To Jahseh’s Supporters</h1>
          <h1 className='flex justify-center text-black font-bold font-serif mr-11'>Across The World:</h1>
          <h3 className='flex justify-center text-black px-80 font-bold font-serif mr-8'>We continue to be amazed at the love and support that X’s fans show on a daily basis. We know how much his music means to all of you, and his impact continues to be as powerful as it’s ever been. <br></br>

          It is important to us to continue to honor Jah’s legacy, and in that spirit we are planning an exciting 2022. One of our first initiatives is to get as much of X’s music from his earliest days as an artist up on all DSPs. We have been working diligently to clear as much of it as possible, and we are excited to announce our first release this Friday with “vice city” hitting all streaming services for the first time. We will continue to release music as we clear it, and are making sure we do it in a way that stays true to how X released each song originally.<br></br>
          
          Visit www.makeouthill.com now to sign up and stay up to date with X-related news, and be the first to be notified as the site evolves. Follow @makeouthill on Twitter for more updates. <br></br>
          
          Beyond the music, we know X’s fans have been waiting patiently for the documentary and we will be sharing updates on it soon. <br></br>
          
          Thank you again for your support and for continuing to honor and celebrate the life of Jah.</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
