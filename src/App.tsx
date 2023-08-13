import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage]=React.useState<any>([]);
  React.useEffect(()=>{
    fetch("/hello")
        .then((res)=>{
          return res.json();
        })
        .then((data)=>{
            setMessage(data);
        });
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        // 기본코드
        <ul>
          {message.map((v:any,idx : any)=><li key={`${idx}-${v}`}>{v}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
