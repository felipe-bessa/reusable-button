import React from 'react';

import './global.css';

import { Button } from './components/Button';

function App() {
  return (
    <div className="container">
      <h1>Reusable Buttons</h1>
      <div className="buttonGrid">
        <Button />
        <Button color="primary">
          Primary
        </Button>
        <Button color="secondary">
          Secondary
        </Button>
        <Button color="success">
          Success
        </Button>
        <Button color="danger">
          Danger
        </Button>
        <Button color="warning">
          Warning
        </Button>
        <Button color="info">
          Info
        </Button>
        <Button color="light">
          Light
        </Button>
        <Button color="dark">
          Dark
        </Button>
      </div>
    </div>
  );
}

export default App;
