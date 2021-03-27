import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import Button from '@material-ui/core/Button';
import "./Share.css";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import ShareForm from './ShareFrom';

export default class StoryShare extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    return (
      <div className="share">
        <div className="post-img">
        <img className="share-img" src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlQ9DL2jP_heI_mtZXdw8cxNdGunsejk7FQ&usqp=CAU' />
        <div className="img-upload-button">
        <input className="img-upload" type="file" />
        </div>
        </div>
        <div className="text-editor">
        <SunEditor/>
        </div>
     
      
      <div className="story-post">
        <ShareForm />
      </div>
      </div>
  
    );
  }
}