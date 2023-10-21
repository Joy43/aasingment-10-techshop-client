
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



const ShowDetails = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);
 

  useEffect(() => {
    fetch(`http://localhost:5000/phone/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network not ok (${res.status} ${res.statusText})`);
        }
        return res.json(); 
      })
      .then((data) => {
        setShowDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  // --------------card list--------------

  console.log(showDetails);
  
  return (

    <div className=" mt-6 mb-6">
      
      {showDetails ? (
        <div className="card card-side bg-[#8d95e8] p-2 shadow-xl">
          <figure>
            <img src={showDetails.photo}  />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{showDetails.title}</h2>
            <div className="badge badge-secondary lowercase"> {showDetails.name}</div>
      <div className="badge badge-outline bg-[#152747]">{showDetails.category}</div> 

      <div className="badge badge-secondary lowercase">Price: {showDetails.price}$</div>
      <div className="badge badge-secondary lowercase">{showDetails.rating}</div>
    
            <p className="font-semibold text-white">{showDetails.description}</p>
            <div className="card-actions justify-end">

              <Link  to={`addcart/${id}`}>
              <button className="btn btn-primary" >Add to curt</button>
              </Link>
            
            </div>
          </div>
        </div>
      ) : (
        <p className=" text-center bg-orange-900" ><span className="loading loading-spinner text-warning text-center text-3xl"></span></p>
      )}
<div>


</div>

    </div>
  );
};

export default ShowDetails;
