

import Carousel from '../Header/Slide/Slide';
import PhoneCard from '../Pages/phoneCard/PhoneCard';

import { useLoaderData } from 'react-router-dom'
import { useState } from 'react';
import { FaPhone } from 'react-icons/fa';
const Home = () => {
  const loadedphones=useLoaderData();
 
const [Phones,setphones]=useState(loadedphones);
console.log(Phones);
    return (
      <div>
          <div className="mt-7">
  <Carousel></Carousel>
        </div> 

        <div>
        
        <h1 className='text-6xl inline-flex text-center my-20
         transition-transform transform hover:scale-110'><span><FaPhone /></span>
  Phones iteam: {Phones.length} </h1>

    <div className='grid md:grid-cols-3 gap-4' >
    {
Phones.map( phonecard =>
  <PhoneCard key={ phonecard._id} 
  phonecard={phonecard}
  Phones={Phones}
  setphones={setphones}
  
  ></PhoneCard>

)
}  
 </div>
</div>  



      </div>
    );
};

export default Home;