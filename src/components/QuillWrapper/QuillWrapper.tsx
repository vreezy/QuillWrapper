import * as React from 'react';
import { FunctionComponent, useState, useEffect} from 'react';
import ReactQuill, { Quill } from 'react-quill';
// import { Icon } from '@fluentui/react/lib/Icon';
import { getIconClassName } from '@uifabric/styling';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { AnimationStyles, mergeStyles } from 'office-ui-fabric-react/lib/Styling';

// Styles
import 'react-quill/dist/quill.snow.css';
// Translaton / Localization is in the css
import './QuillWrapper.css';
import styles from './QuillWrapper.module.scss';

// must be outside or it didnt work
// DOCU: https://quilljs.com/docs/modules/toolbar/
const CustomToolbar = () => (
  <div id="toolbar-quillwrapper">
    <select className="ql-header" defaultValue="">
      <option value="1" />
      <option value="2" />
      <option value="3" />
      <option />
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

export interface IQuillWrapperProps {
  required?: boolean;
  label?: React.ReactNode;
  errorMessage?: React.ReactNode;
  onChange?(value: string): void;
  value?: string;
}

interface IQuillWrapperState {
  focus: boolean;
  quillStyle: string;
}

export const QuillWrapper: FunctionComponent<IQuillWrapperProps> = (props: IQuillWrapperProps) => {
  const error = props.errorMessage !== "";

  const [editorHtml, setEditorHtml] = useState("<h3>Hallo!</h3><p>Schreibe einen Text...</p>");

  const initState: IQuillWrapperState = {
    focus: false,
    quillStyle: mergeStyles(styles.quillWrapper, error ? styles.error : "")
  };

  const [state, setState] = useState(initState);
  
  const errorMessageStyle = mergeStyles(AnimationStyles.slideDownIn20, styles.errorMessage);

  // set error when props.errorMessage is changed
  useEffect(() => {
    setState({
      focus: state.focus,
      quillStyle: mergeStyles(styles.quillWrapper, state.focus ? styles.focus : "", error ? styles.error : "")
    });
    // eslint want every dependencie -> [state.focus, error] but we want only a effect when an errorMessage is been set.
    // eslint-disable-next-line
  }, [props.errorMessage]);
  
  const onFocus = () => {
    setState({
      focus: true,
      quillStyle: mergeStyles(styles.quillWrapper, styles.focus, error ? styles.error : "")
    });
  };

  const onBlur = () => {
    setState({
      focus: false,
      quillStyle: mergeStyles(styles.quillWrapper, error ? styles.error : null)
    });
  };

  const onOver = () => {
    if(!state.focus) {
      setState({
        focus: state.focus,
        quillStyle: mergeStyles(styles.quillWrapper, styles.hover, error ? styles.error : null)
      });
    }
  };

  const onOut = () => {
    if(!state.focus) {
      setState({
        focus: state.focus,
        quillStyle: mergeStyles(styles.quillWrapper, error ? styles.error : null)
      });
    }
  };

  const onChange = (value: string) => {    
    if(typeof props.onChange === "function") {
      props.onChange(value);
    }
    else {
      setEditorHtml(value);
    }
  };

  // for every option in the CustomToolbar you need to define an MS Icon
  // Find Icons: https://developer.microsoft.com/en-us/fluentui#/styles/web/icons
  var icons = Quill.import('ui/icons'); 
  icons['bold'] = `<i class="${getIconClassName('Bold')}" aria-hidden="true"></i>`;
  icons['italic'] = `<i class="${getIconClassName('Italic')}" aria-hidden="true"></i>`;
  icons['underline'] = `<i class="${getIconClassName('Underline')}" aria-hidden="true"></i>`;
  icons['color'] = `<i class="${getIconClassName('FontColor')}" aria-hidden="true"></i>`;
  icons['background'] = `<i class="${getIconClassName('BackgroundColor')}" aria-hidden="true"></i>`;
  icons['clean'] = `<i class="${getIconClassName('ClearFormatting')}" aria-hidden="true"></i>`;

  return (
    <div>
        <Label
          required={props.required}
        >
          {props.label}
        </Label>
        <CustomToolbar />
        <div
          onMouseOver={onOver}
          onMouseOut={onOut}
          className={state.quillStyle}
        >
          <div className={state.focus ? "" : styles.borderFocusPlaceholder}>
            <ReactQuill
                value={props.value ? props.value : editorHtml}
                onChange={onChange}
                modules={modules}
                onFocus={onFocus}
                onBlur={onBlur}
            />
          </div>
        </div>
        <div className={error ? errorMessageStyle : styles.hidden}>
          <Text variant="small">{props.errorMessage}</Text>
        </div>
        {/* {state.quillStyle} */}
    </div>
  );
};

export default QuillWrapper;
