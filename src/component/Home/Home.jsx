
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS

import Carousel from '../Header/Slide/Slide';
import PhoneCard from '../Pages/phoneCard/PhoneCard';
import './Home css/Home.css'
import { useLoaderData } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Home = () => {
  const loadedphones=useLoaderData();
 
const [Phones,setphones]=useState(loadedphones);
const [isDarkMode, setIsDarkMode] = useState(false);

const darkModeClass = isDarkMode ? 'dark-mode' : '';
const lightModeClass = isDarkMode ? '' : 'light-mode';
const toggleMode = () => {
  setIsDarkMode(!isDarkMode);
};


useEffect(() => {
  AOS.init({
    duration: 1000, 
    offset: 200,   
}, []);


});

console.log(Phones);
    return (
      <div>
         <div className={`home-container ${darkModeClass}`}></div>
          <div className="mt-7">
  <Carousel></Carousel>
        </div> 

        <div>
        
        <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg' onClick={toggleMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}  
        </button>

        <div className={`grid md:grid-cols-3 p-3 gap-4 mt-8 ${lightModeClass}`}>
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