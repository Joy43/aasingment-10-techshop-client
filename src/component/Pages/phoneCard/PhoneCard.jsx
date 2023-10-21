import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS

const PhoneCard = ({phonecard,setphones,Phones }) => {
// console.log(phone) 
    const {_id,name,bandname,price,rating,photo,description,category} = phonecard;
//  ----------------------------show deatils-------------


//--------------- edit  delat-----------

const handleDelete=_id=>{
  console.log(_id);
  Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        
      fetch(`http://localhost:5000/phone/${_id}`,{
        method: 'DELETE'
      })
     
      .then(res => res.json())
      .then(data=>{
          console.log(data);
          if (data.deletedCount > 0) {
              Swal.fire(
                  'Deleted!',
                  'Your coffie has been deleted.',
                  'success'
                )

                const reaming =Phones.filter(poh=>poh._id!==_id);
                setphones(reaming);
          }
      })
      }
    })
}

PhoneCard.propTypes = {
  phonecard: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bandname: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  setphones: PropTypes.func.isRequired,
  Phones: PropTypes.array.isRequired,
};
 

// aos
useEffect(() => {
  AOS.refresh();
}, []);
    return (
        <div  data-aos="fade-up">
           <div className="card flex relative  w-96 bg-[#cccff3] shadow-xl">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title justify-center  text-[#0e0f3a] uppercase">
    {name}
    <div className="badge badge-secondar">{bandname}</div>
     
      
    </h2>
    <p className="text-[#152747] text-center">{description}</p>
    <div className="card-actions justify-center">
      <div className="badge badge-outline bg-[#152747]">{category}</div> 
      <div className="badge badge-outline bg-[#152747]">{rating}</div>
      <div className="badge badge-secondary lowercase">Price: {price}$</div>
    </div>

    <div className="card-actions justify-center flex space-x-4">

    <Link to={`updatePhone/${_id}`}>
      <button className="btn">Update </button>
    </Link>
    <button
      onClick={() => handleDelete(_id)}
      className="btn">Delete</button>
  </div>

 <div className="justify-center text-center">
 <Link to={`showcategory/${_id}`}>
  <button   className="btn btn-secondary text-center">
            View Details
          </button>
  </Link>
 </div>
  </div>



</div> 






        </div>
    );
};

export default PhoneCard;