import React, { FunctionComponent, useState, useEffect} from 'react';
import ReactQuill, { Quill } from 'react-quill';
// import { Icon } from '@fluentui/react/lib/Icon';
import { getIconClassName } from '@uifabric/styling';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { AnimationStyles, mergeStyles } from 'office-ui-fabric-react/lib/Styling';

// Styles
import 'react-quill/dist/quill.snow.css';
import './QuillWrapper.css';
import styles from './QuillWrapper.module.scss';

// must be outside
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

export interface IQuillWrapper {
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

// function QuillWrapper(props: IQuillWrapper) {
export const QuillWrapper: FunctionComponent<IQuillWrapper> = (props: IQuillWrapper) => {
  const error = props.errorMessage !== "";

  const [editorHtml, setEditorHtml] = useState("<h3>Hallo Du!</h3><p>Schreibe einen Text...</p>");

  const initState: IQuillWrapperState = {
    focus: false,
    quillStyle: mergeStyles(styles.quillWrapper, error ? styles.error : "")
  }

  const [state, setState] = useState(initState);

  const errorStyle = mergeStyles(AnimationStyles.slideDownIn20, styles.errorMessage);

  useEffect(() => {
    setState({
      focus: state.focus,
      quillStyle: mergeStyles(styles.quillWrapper, state.focus ? styles.focus : "", error ? styles.error : "")
    })
    // eslint want every dependencie -> [state.focus, error] but we want only a effect when an errorMessage is been set.
    // eslint-disable-next-line
  }, [props.errorMessage]);
  
  const onFocus = () => {
    setState({
      focus: true,
      quillStyle: mergeStyles(styles.quillWrapper, styles.focus, error ? styles.error : "")
    });
  }

  const onBlur = () => {
    setState({
      focus: false,
      quillStyle: mergeStyles(styles.quillWrapper)
    });
  }

  const onOver = () => {
    if(!state.focus) {
      setState({
        focus: state.focus,
        quillStyle: mergeStyles(styles.quillWrapper, styles.hover, error ? styles.error : "")// styles.quillWrapperHover
      });
    };
  }

  const onOut = () => {
    if(!state.focus) {
      setState({
        focus: state.focus,
        quillStyle: mergeStyles(styles.quillWrapper, error ? styles.error : "")
      });
    };
  }

  const onChange = (value: string) => {    
    if(typeof props.onChange === "function") {
      props.onChange(value);
    }
    else {
      setEditorHtml(value);
    }
  }

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
          // htmlFor="toolbar-quillwrapper"
        >
          {props.label}
        </Label>
        <CustomToolbar />
        <div
        onMouseOver={onOver}
        onMouseOut={onOut}
        className={state.quillStyle}
        >
            <div className={state.focus ? "" : styles.borderFix}>
                
                <ReactQuill
                    value={props.value ? props.value : editorHtml}
                    onChange={onChange}
                    modules={modules}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </div>
        </div>
        <div className={error ? errorStyle : styles.hidden}>
          <Text variant="small">{props.errorMessage}</Text>
        </div>
        {/* {state.quillStyle} */}
    </div>
  );
}

export default QuillWrapper;