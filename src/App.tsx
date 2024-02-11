/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import axios from 'axios';

function App () {

  const [scrapedData, setScrapedData] = useState('');

  const fetchHelloWorld = async () => {
    try {
      const response = await axios.get('http://localhost:5000/');
      setScrapedData(response.data.message);
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.error('Error fetching initial message:', error.message);
    }
  };

  useEffect(() => {
    fetchHelloWorld();
  }, []);

  return (
    <div>
      <h1>Web Scraper</h1>
      <p>{scrapedData}</p>
    </div>
  );
}

export default App;

