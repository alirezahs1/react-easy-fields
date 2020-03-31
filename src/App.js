import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DynamicForm } from "./components/index.tsx";

function App() {
  const fields = [
    {
      label: 'First Name',
      id: 'first_name'
    },
    {
      label: 'Bio',
      id: 'bio',
      htmltype: 'textarea'
    },
    {
      label: 'Gender',
      id: 'gender',
      htmltype: 'radio',
      items: ['Men', 'Women']
    },
    {
      label: 'I\'m agree to terms ',
      id: 'agree',
      htmltype: 'checkbox'
    },
    {
      label: 'Country',
      id: 'country',
      htmltype: 'related',
      items: [
        {
          label: 'Iran',
          value: 1
        },
        {
          label: 'USA',
          value: 2
        }
      ]
    }
  ]

  const handleSubmit = data => {
    // Api Implementation
    console.log(data);
  }

  return (
    <div className="App">
      <h1>React Easy Fields</h1>
      <DynamicForm fields={fields} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
