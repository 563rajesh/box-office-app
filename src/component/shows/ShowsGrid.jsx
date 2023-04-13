import { useStarredShows } from '../../lib/useStarredShows';
import ShowCard from './ShowCard';

const ShowsGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = useStarredShows();

  function onClickStarMe(showId) {
    const isStarred = starredShows.includes(showId);
    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  }
  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          id={data.show.id}
          summary={data.show.summary}
          image={
            data.show.image ? data.show.image.medium : '/not-found-image.png'
          }
          onClickStarMe={onClickStarMe}
          isStarred={starredShows.includes(data.show.id)}
        ></ShowCard>
      ))}
    </div>
  );
};

export default ShowsGrid;
