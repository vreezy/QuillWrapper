import React, { useState } from 'react';


import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
// import { Icon } from '@fluentui/react/lib/Icon';


import  Quillwrapper from './components/QuillWrapper/QuillWrapper';
// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [form, setForm] = useState({
    editorHtml: "<h1>Hallo Welt</h1><p>Schreibe deinen Text...</p>"
  })

  const [errors, setErrors] = useState({
    editorHtml: ""
  })

  const [saving, setSaving] = useState(false);
  const [checked, setChecked] = useState(false);

  const onChange = (value: string) => {
    const newForm = Object.assign({}, form);
    newForm.editorHtml = value;
    setForm(newForm);
  }

  const sendForm = () => {
    if(validForm()) {
      return
    }

    setSaving(true);

    // do what u want with your form
    console.log("sendForm");

    setSaving(false);
  }

  const validForm = (): boolean => {
    const newErrors = Object.assign({}, errors);
    if(!form.editorHtml || form.editorHtml) {
      newErrors.editorHtml = "Text darf nicht leer sein."
    }
    
    setErrors(newErrors);
    return hasError(newErrors);
  }

  const hasError = (errors: {[index: string]:string}): boolean => {
    return Object.keys(errors).some((key: string) => {
      if(errors[key as string] !== "") {
        return true;
      }
      return false
    })

  }

  return (
    <div className="container">
      <div className="row">
        <div className="column col">
          <h3>Hallo Welt</h3>
          <p>
            Technologies: React.ts - react-quill - Fluent UI<br/>
            Target: Style react-quill like Fluent UI Component<br/>
            &nbsp; -> https://developer.microsoft.com/de-DE/fluentui#/<br/>
            Download Code on GIT<br/>
            &nbsp; -> https://github.com/vreezy/QuillWrapper<br/>
          </p> 
          <br />
          
          <Quillwrapper
            label="Richt-Text Editor"
            required
            value={form.editorHtml}
            onChange={onChange}
          />
          <TextField label="Textfield 1" errorMessage={errors.editorHtml}/>
          <br />
          <PrimaryButton text="Primary" onClick={sendForm} allowDisabledFocus disabled={saving} checked={checked} />
          <br />

          {JSON.stringify(form)}
          {/* {Object.keys(form).forEach((key: string): string => {
            return JSON.stringify(form[key])
          })} */}
          
          <br />
        </div>
      </div>
    </div>
  );
}

export default App;
