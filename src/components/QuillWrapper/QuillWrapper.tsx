import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
// import { Icon } from '@fluentui/react/lib/Icon';

// Styles
import 'react-quill/dist/quill.snow.css';
import './QuillWrapper.css';
import styles from './QuillWrapper.module.scss';

var icons = Quill.import('ui/icons'); 
icons['bold'] = '<i class="ms-Icon ms-Icon--Bold" aria-hidden="true"></i>';
icons['italic'] = '<i class="ms-Icon ms-Icon--Italic" aria-hidden="true"></i>';
icons['underline'] = '<i class="ms-Icon ms-Icon--Underline" aria-hidden="true"></i>';
icons['color'] = '<i class="ms-Icon ms-Icon--FontColor" aria-hidden="true"></i>';
icons['background'] = '<i class="ms-Icon ms-Icon--BackgroundColor" aria-hidden="true"></i>';
icons['clean'] = '<i class="ms-Icon ms-Icon--ClearFormatting" aria-hidden="true"></i>';

const CustomToolbar = () => (
  <div id="toolbar-quillwrapper">
    <select className="ql-header" defaultValue="">
      <option value="1" />
      <option value="2" />
      <option value="3" />
      <option  />
    </select>
    <button className="ql-bold" />
    <button className="ql-italic" />
    <button className="ql-underline" />
    <select className="ql-color" />
    <select className="ql-background" />
    <button className="ql-clean" />
  </div>
);

const modules = {
  toolbar: {
    container: "#toolbar-quillwrapper"
  }
};

function QuillWrapper() {
  const [editorHtml, setEditorHtml] = useState("<h3>Hallo Du!</h3><p>Schreibe einen Text...</p>");
  const [focus, setFocus] = useState(false);
  const [quillStyle, setQuillStyle] = useState(styles.quillWrapper);

  const onFocus = () => {
    setQuillStyle(styles.quillWrapperFocus);
    setFocus(true);
  }

  const onBlur = () => {
    setQuillStyle(styles.quillWrapper);
    setFocus(false);
  }

  const onOver = () => {
    if(!focus) {
      setQuillStyle(styles.quillWrapperHover);
    }
  }

  const onOut = () => {
    if(!focus) {
      setQuillStyle(styles.quillWrapper);
    }
  }

  return (
    <div>
        <CustomToolbar />
        <div
        onMouseOver={onOver}
        onMouseOut={onOut}
        className={quillStyle}
        >
            <div className={focus ? "": styles.borderFix}>
                
                <ReactQuill
                    value={editorHtml}
                    onChange={setEditorHtml}
                    modules={modules}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </div>
        </div>
    </div>
  );
}

export default QuillWrapper;