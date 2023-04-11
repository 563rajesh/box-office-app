const Details = props => {
  const { status, premered, network } = props;
  return (
    <div>
      <p>{status}</p>
      <p>
        {' '}
        premered {premered} {!!network && `on ${network.name}`}
      </p>
    </div>
  );
};

export default Details;
