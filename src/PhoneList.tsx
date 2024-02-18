// src/components/PhoneList.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';

const PhoneList: React.FC = () => {
  const [data, setData] = useState<{ phone_names: string[]; final_prices: string[] } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data && (
        <div>
          {data.phone_names.map((name, index) => (
            <Card key={index} style={{ marginBottom: '10px' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {name}
                </Typography>
                <Typography color="text.secondary">{data.final_prices[index]}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhoneList;
