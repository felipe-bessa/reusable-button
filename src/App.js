import React from 'react';

import './global.css';

import { Button } from './components/Button';

function App() {
  return (
    <div className="container">
      <h1>Reusable Buttons</h1>
      <div className="buttonGrid">
        <Button />
        <Button color="primary" size="md">
          Primary
        </Button>
        <Button color="secondary" size="sm">
          Secondary
        </Button>
        <Button color="success" size="lg">
          Success
        </Button>
        <Button color="danger" disableShadow>
          Danger
        </Button>
        <Button color="warning" size="lg">
          Warning
        </Button>
        <Button color="info">
          Info
        </Button>
        <Button color="light">
          Light
        </Button>
        <Button color="dark" size="sm">
          Dark
        </Button>
      </div>
    </div>
  );
}

export default App;
