import styled from 'styled-components';
const Details = props => {
  const { status, premered, network } = props;
  return (
    <DetailsWrapper>
      <p>{status}</p>
      <p>
        {' '}
        premered {premered} {!!network && `on ${network.name}`}
      </p>
    </DetailsWrapper>
  );
};

export default Details;

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;
