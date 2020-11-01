import React from 'react';
import 'medium-draft/lib/index.css';
import './blogEditor.css';

import {
    Editor,
    createEditorState,
  } from 'medium-draft';
import { convertToRaw } from 'draft-js';


  export default class BlogEditor extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        editorState: createEditorState(), // for empty content
      };
  
      this.onChange = (editorState) => {
        this.setState({ editorState });
      };
  
      this.refsEditor = React.createRef();

    }
  
    componentDidMount() {
      this.refsEditor.current.focus();
    }

    saveBlog() {
      const contentState = this.state.editorState.getCurrentContent();
      const editorContentRaw = convertToRaw(contentState);
      window.localStorage.setItem('content', JSON.stringify(editorContentRaw));
  
      /* we can save this editorContentRaw inside the DB. */
    }

  
    render() {
      const { editorState } = this.state;
      return (
        <div>
        <button onClick = {this.saveBlog.bind(this)}> submit </button>
        <Editor
          ref={this.refsEditor}
          editorState={editorState}
          onChange={this.onChange} />
        </div>
      );
    }
  };
  