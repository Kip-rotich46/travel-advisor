import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Map = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (retries = 5, delay = 1000) => {
    const options = {
      method: 'GET',
      url: 'https://map-geocoding.p.rapidapi.com/json',
      params: {
        latlng: '40.714224,-73.961452'
      },
      headers: {
        'x-rapidapi-key': 'ccdd352262mshaf59108cd3c3caap11e422jsnd8dcf2517dcb',
        'x-rapidapi-host': 'map-geocoding.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);

      if (response.status === 429) {
        // Too many requests
        if (retries > 0) {
          await new Promise(resolve => setTimeout(resolve, delay));
          return fetchData(retries - 1, delay * 2); // Retry with exponential backoff
        }
        throw new Error('Rate limit exceeded');
      }

      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Map Data</h2>
      {error && <p>Error: {error.message}</p>}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Map;
