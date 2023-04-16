import { SearchCard, SearchImgWrapper } from '../common/SearchCard';
const ActorCard = ({ name, image, gender, birthday, deathday, country }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>
      <h1>
        {name} {!!gender && `(${gender})`}
        {/* !!gender used to convert them into booleaneaos also can be use boolean(gender) */}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No country known'}</p>
      {Boolean(birthday) && <p>born {birthday}</p>}
      {deathday ? `died ${deathday}` : 'alive'}
    </SearchCard>
  );
};

export default ActorCard;
