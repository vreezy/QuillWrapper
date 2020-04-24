// import React, { useState } from 'react';
import React from 'react';

import { TextField } from 'office-ui-fabric-react/lib/TextField';
// import { Icon } from '@fluentui/react/lib/Icon';


import  Quillwrapper from './components/QuillWrapper/QuillWrapper';
// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="container">
      <div className="row">
        <div className="column col">
          <h1>Hallo welt</h1>
          React.ts - react-quill - Fluent UI
          
          <Quillwrapper />
          
          <br />

          <TextField />

          <br />

          <TextField />
        </div>
      </div>
    </div>
  );
}

export default App;
