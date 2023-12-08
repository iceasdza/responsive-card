import "./Card.css";
const Card = ({ placeData }) => {
  const { body, img_url, name, tags } = placeData;
  return (
    <>
      <div className="card-container">
        <div className="card-information-container">
          <img src={img_url} className="card-image" alt={name} />
          <div className="card-name">{name}</div>
          <div className="card-desc">{body}</div>
        </div>
        <div className="card-tag-container">
          {tags?.map((tag) => (
            <div className="card-tag" key={tag.id}>
              {tag.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
