import ShowCard from './ShowCard';

const ShowsGrid = ({ shows }) => {
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
        ></ShowCard>
      ))}
    </div>
  );
};

export default ShowsGrid;
