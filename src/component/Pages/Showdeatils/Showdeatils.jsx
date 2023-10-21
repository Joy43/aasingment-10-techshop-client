import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardList from "../CardList/CardList";


const ShowDetails = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);
  const [showCardData, setShowCardData] = useState(false);
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

  const handleShowCardData = () => {
    setShowCardData(true);
  };

  console.log(showDetails);
  
  return (

    <div>
      <h1>show deatils here</h1>
      {showDetails ? (
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={showDetails.photo} alt={showDetails.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{showDetails.title}</h2>
            <p>{showDetails.description}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleShowCardData}>Add to curt</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

{showCardData && (
    <CardList data={showDetails.cards} />
  )}
    </div>
  );
};

export default ShowDetails;
