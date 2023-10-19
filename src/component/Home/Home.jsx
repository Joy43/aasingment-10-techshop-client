

import Carousel from '../Header/Slide/Slide';
import PhoneCard from '../Pages/phoneCard/PhoneCard';

import { useLoaderData } from 'react-router-dom'
import { useState } from 'react';

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
        
        <h1 className='text-6xl text-center my-20 text-purple-600'>Phones team: {Phones.length}</h1>
    <div>
    {
Phones.map( Phonecard=>{
  <PhoneCard key={  Phonecard._id} 
  Phonecard={Phonecard}
  Phones={Phones}
  setphones={setphones}
  
  ></PhoneCard>

})
}  



{/* <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={Phones.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div> */}


    </div>
</div>  



      </div>
    );
};

export default Home;