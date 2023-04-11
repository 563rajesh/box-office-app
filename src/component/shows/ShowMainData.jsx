const ShowMainData = ({ image, name, summary, rating, genres }) => {
  return (
    <div>
      {/* <img src={image ? image.original : '/not-found-image.png'} alt={name} /> */}
      <div>
        <h1>{name}</h1>
        <div>{rating.average || 'N/A'}</div>

        <div dangerouslySetInnerHTML={{ __html: summary }}></div>
      </div>
      <div>
        Generes:
        <div>
          {genres.map(genres => (
            <span key={genres}>{genres}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowMainData;
