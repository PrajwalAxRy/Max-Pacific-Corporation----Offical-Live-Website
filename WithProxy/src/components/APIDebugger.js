import React, { useState } from 'react';
import axios from 'axios';

function APIDebugger() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  const handleAPICall = async () => {
    try {
      const res = await axios.post(
        'http://www.maxpacific.net/Magix/rest/operation/wOdaMatrix.htm',
        {
          compID: 'MAXPACIFIC',
          userID: 'STAQWEP',
          password: 'ST!@WEP#',
          customerCode: '1340000220',
          clientSecret: 'QgkqKj2joaJzaVVYsErTMmSK',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setResponse(res.data);
    } catch (error) {
      setError('Failed to fetch data from the API.');
      console.error(error);
    }
  };

  return (
    <div>
      <button id="api-debugger" onClick={handleAPICall}>
        Make API Call
      </button>
      {response && (
        <div>
          <h2>API Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
}

export default APIDebugger;
