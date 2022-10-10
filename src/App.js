import { Component } from "react";
import { GrammarlyEditorPlugin  } from "@grammarly/editor-sdk-react";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

import './App.css';

const modules = { // modules are used to customize the text bar.
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
}

class App extends Component {
  state={text:""}

  onChangeText = (event) => {
    this.setState({text: event.target.value})
  }

  render(){
    const {text, onChangeText} = this.state
    return (
      <GrammarlyEditorPlugin clientId="client_DUccJyyPF61B699b6kMiTt">
          <ReactQuill value={text} onChange={onChangeText} modules={modules}/>
      </GrammarlyEditorPlugin>
    );
  }
}

export default App;
