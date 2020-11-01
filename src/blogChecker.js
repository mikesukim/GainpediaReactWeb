import React from 'react';
import 'medium-draft/lib/index.css';
import './blogEditor.css';

import { Editor, EditorState, convertFromRaw } from "draft-js";

  export default class BlogEditor extends React.Component {

    render() {
        const content = window.localStorage.getItem('content');
        const editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(content)));;

      return (
        <Editor editorState={editorState} readOnly={true} />
      );
    }
  };
  