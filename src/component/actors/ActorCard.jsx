const ActorCard = ({ name, image, gender, birthday, deathday, country }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>
        {name} {!!gender && `(${gender})`}
        {/* !!gender used to convert them into booleaneaos also can be use boolean(gender) */}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No country known'}</p>
      {Boolean(birthday) && <p>born {birthday}</p>}
      {deathday ? `died ${deathday}` : 'alive'}
    </div>
  );
};

export default ActorCard;
