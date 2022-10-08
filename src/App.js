// import logo from './logo.svg';
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import './App.css';

function App() {
  return (
    <GrammarlyEditorPlugin clientId="client_DUccJyyPF61B699b6kMiTt">
      <div className="App">
        <textarea rows={20} cols={50}></textarea>
      </div>
    </GrammarlyEditorPlugin>
  );
}

export default App;
