import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowById } from '../api/apiGet';

//this is custom hook it need only id & return two value
const useShowById = showId => {
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);
  useEffect(() => {
    async function getData() {
      //you can await here
      try {
        const data = await getShowById(showId);
        console.log(data);
        setShowError(null);
        setShowData(data);
      } catch (error) {
        setShowError(error);
      }
    }
    getData();
  }, [showId]);
  return [showData, showError]; //returning a array object
};

const Show = () => {
  const { showId } = useParams();
  const [showData, showError] = useShowById(showId);

  if (showError) {
    return <div>we have an error: {showError.message}</div>;
  }
  if (showData) {
    return <div>Got show data: {showData.name}</div>;
  }

  return <div>Data is loading</div>;
};

export default Show;
