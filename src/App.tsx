import React, { useState, useEffect} from 'react';


import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
// import { Icon } from '@fluentui/react/lib/Icon';


import  Quillwrapper from './components/QuillWrapper/QuillWrapper';
// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

type Dictionary = { [index: string]: string }

interface IForm extends Dictionary {
  editorHtml: string;
  textField: string;
}

function App() {
  const initForm: IForm = {
    editorHtml: "<h1>Hallo Welt</h1><p>Schreibe deinen Text...</p>",
    textField: ""
  }

  const [form, setForm] = useState(initForm)

  const [errors, setErrors] = useState({
    editorHtml: "",
    textField: "Text darf nicht leer sein."
  })

  const [saving, setSaving] = useState(false);
  // const [checked, setChecked] = useState(false);

  useEffect(() => {
    // validForm(form);
  }, [form]);

  const onChangeQuillWrapper = (value: string) => {
    const newForm = Object.assign({}, form);
    newForm.editorHtml = value;
    
  }

  const onChangeTextField = (formName: string, newValue: string | undefined) => {
    const newForm = Object.assign({}, form);

    switch(formName) {
      case "textField":
        newForm.textField = newValue ? newValue : "";

        break;
    }

    setErrors(validForm(newForm));
    setForm(newForm);
  }

  const sendForm = (): void => {
    if(validForm(form)) {
      return
    }

    setSaving(true);

    // do what u want with your form
    console.log("sendForm");

    setSaving(false);
  }

  const validForm = (form: IForm): IForm => {
    const newErrors: IForm = Object.assign({}, errors);
    Object.keys(newErrors).forEach((key: string) => {
      newErrors[key] = ""; 
    });

    if(form.editorHtml === "") {
      newErrors.editorHtml = "Text darf nicht leer sein."
    }

    if(form.textField === "") {
      newErrors.editorHtml = "Text darf nicht leer sein."
    }
    
    
    return newErrors;
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
            onChange={onChangeQuillWrapper}
            // errorMessage={errors.editorHtml}
          />
          <TextField
            label="Textfield 1"
            errorMessage={errors.textField}
            value={form.textField}
            onChange={(event: any, newValue: string | undefined) => onChangeTextField("textField", newValue)}
          />
          <br />
          <PrimaryButton
            text="Primary"
            onClick={sendForm}
            disabled={saving || hasError(errors)}
            //checked={checked}
          />
          <br />

          Form:<br />
          {JSON.stringify(form)}<br />
          <br />
          Errors:<br />
          {JSON.stringify(errors)}<br />
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
