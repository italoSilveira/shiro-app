import React from 'react';
import logo from './logo.svg';
import { Alert } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

function App() {
  return (
    <div className="example">
      <Alert theme="primary">
        Alert - Primary Theme (default) -{" "}
        <a className="alert-link" href="#">
          Example Link
        </a>
      </Alert>
      <Alert theme="secondary">
        Alert - Secondary Theme -{" "}
        <a className="alert-link" href="#">
          Example Link
        </a>
      </Alert>
      <Alert theme="success">
        Alert - Success Theme -{" "}
        <a className="alert-link" href="#">
          Example Link
        </a>
      </Alert>
      <Alert theme="danger">
        Alert - Danger Theme -{" "}
        <a className="alert-link" href="#">
          Example Link
        </a>
      </Alert>
      <Alert theme="warning">
        Alert - Warning Theme -{" "}
        <a className="alert-link" href="#">
          Example Link
        </a>
      </Alert>
      <Alert theme="info">
        Alert - Info Theme -{" "}
        <a className="alert-link" href="#">
          Example Link
        </a>
      </Alert>
      <Alert theme="light">
        Alert - Light Theme -{" "}
        <a className="alert-link" href="#">
          Example Link
        </a>
      </Alert>
      <Alert theme="dark">
        Alert - Dark Theme -{" "}
        <a className="alert-link" href="#">
          Example Link
        </a>
      </Alert>
    </div>
  );
}

export default App;
