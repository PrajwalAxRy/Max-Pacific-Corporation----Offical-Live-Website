import React from 'react';
import APIDebugger from '../components/APIDebugger';

function DummyPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Dummy Page</h1>
      <button
        onClick={() => document.getElementById('api-debugger').click()}
        style={{
          backgroundColor: '#007BFF',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Call API Debugger
      </button>
      <div style={{ display: 'none' }}>
        <APIDebugger />
      </div>
    </div>
  );
}

export default DummyPage;
