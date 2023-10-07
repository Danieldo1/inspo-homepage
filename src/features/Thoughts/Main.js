import React, { useState } from 'react';
import { generateId, neverExpire } from './utils';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';

const Main = () => {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: neverExpire(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: neverExpire(),
    },
  ]);

const addThought = (thought) => {
setThoughts(thoughts =>[thought,...thoughts])
}

const removeThought = (thoughtIdToRemove) => {
  setThoughts((thoughts) => thoughts.filter((thought) => thought.id !== thoughtIdToRemove)
  )
}


  return (
    <div className="entry" >
      
        <h1 className='thought-title'>Passing Thoughts</h1>
        <AddThoughtForm addThought={addThought}/>
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought}/>
          ))}
        </ul>
      
    </div>
  );
}

export default Main;