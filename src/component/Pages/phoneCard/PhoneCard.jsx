

const PhoneCard = ({ Phone }) => {
// console.log(phone) 
    const {name,bandname,price,rating,photo,description,category} = Phone;
    console.log(Phone);


    

    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {name}
      <div className="badge badge-secondary">{price}</div>
      <div className="badge badge-secondary">{bandname}</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div> 
      <div className="badge badge-outline">{rating}</div>
    </div>
  </div>
</div> 
        </div>
    );
};

export default PhoneCard;