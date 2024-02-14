/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyButton({ title }: { title: string }) {
  return (
    <button>{title}</button>
  );
}

function App() {
  const [scrapedData, setScrapedData] = useState('');

  const fetchHelloWorld = async () => {
    try {
      const response = await axios.get('http://localhost:5000/');
      setScrapedData(response.data.message);
    } catch (error: any) {
      console.error('Error fetching initial message:', error.message);
    }
  };

  useEffect(() => {
    fetchHelloWorld();
  }, []);

  return (
    <div>
      <h1>Real OG Web Scraper</h1>
      <p>{scrapedData}</p>
      <MyButton title="Clickea acá" />
    </div>
  );
}

export default App;