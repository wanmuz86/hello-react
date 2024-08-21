import React from 'react';
import UserCard from './UserCard'; // Get the UserCard Component
import Counter from './Counter';
import UserInput from './UserInput';
import ConditionalRendering from './ConditionalRendering';
import LoadingIndicator from './LoadingIndicator';
import StatusMessage from './StatusMessage';
import Navigation from './Navigation';
export default function App() {
  // Create a variable of type User
 const profile = {bio:"abc",website:"def"}
 const retrieveData = (name:string) => alert(`Name has been passed ${name}`)
  const users = [
    {
    id:1,
    name:"Alice",
    age:28,
    email:"alice@example.com"
  },
  {
    id:2,
    name:"John",
    age:30,
    email:"john@example.com"
  }
  ]
  return (
    // <div className='App'>
    //   <h1>Hello World</h1>
    //   <UserCard user={users[0]} profile={ profile }/>
    //   <ul>
    //   {
    //     users.map((val)=><li key={val.id}>{val.name} - {val.email} - {val.age}</li>)
    //   }
    //   </ul>
    //   <Counter/>
    //   <hr/>
    //   <UserInput onNameChange={(name:string)=>alert(`Name has been sent ${name}`)}/>
    //   <ConditionalRendering/>
    //   <LoadingIndicator/>
    //   <StatusMessage/>
    //   <Navigation/>
    // </div>
    <Navigation/>

  );
}

// Log to console
console.log('Hello console');