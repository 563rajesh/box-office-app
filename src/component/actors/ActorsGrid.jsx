import ActorCard from './ActorCard';
import { FlexGrid } from '../common/FlexGrid';

const ActorsGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          gender={data.person.gender}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          country={data.person.country ? data.person.country.name : null}
          image={
            data.person.image
              ? data.person.image.medium
              : '/not-found-image.png'
          }
        ></ActorCard>
      ))}
    </FlexGrid>
  );
};

export default ActorsGrid;
