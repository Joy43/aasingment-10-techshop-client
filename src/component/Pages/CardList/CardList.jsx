

const CardList = ({ data }) => {
  return (
    <div>
      <h1>Card List</h1>
      <div className="card-list">
        {data.map((card, index) => (
          <div key={index} className="card">
            <figure>
              <img src={card.photo} alt={card.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
