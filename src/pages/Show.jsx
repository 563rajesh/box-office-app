import { useParams } from 'react-router-dom';

const Show = () => {
  const param = useParams();
  console.log(param);
  return <div>show</div>;
};

export default Show;
