const Casts = ({ casts }) => {
  console.log(casts);
  return (
    <div>
      {casts.map(({ person, character, voice }) => (
        <div key={character.id}>
          <img
            src={person.image ? person.image.medium : '/not-found-image.png'}
            alt={person.name}
          />
          <div>
            {person.name} | {character.name} {voice && 'voiceover'}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Casts;
