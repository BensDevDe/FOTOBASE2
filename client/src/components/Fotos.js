const Fotos = ({ fotos }) => {
  const dateSplit = fotos.date.slice(0, 10);

  console.log("fototest:", fotos.image);
  return (
    <div className="card image_card">
      {fotos.image && (
        <img
          src={`http://localhost:3001${fotos.image}`}
          className="img-fluid rounded mh-50"
          alt="..."
        />
      )}

      <div className="card-body">
        <h5 className="card-title">{fotos.title}</h5>
        <p className="card-text">
          <span>Comment: </span>
          {fotos.comment}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Uploaded from: </li>
        <li className="list-group-item">Date: {dateSplit}</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Original Size
        </a>
        <a href="#" className="card-link">
          Comment
        </a>
      </div>
    </div>
  );
};
export default Fotos;
