import React,{Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import FormClass from './component/FormClass';
import FormFc from './component/FormFc';

function App() {
  const value: any = 10

  const demo = (value as number)

  return (
      <>
      <FormClass/>
      <FormFc/>
      </>
  );
}

export default App;
