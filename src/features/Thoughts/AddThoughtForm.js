import React,{useState} from 'react';
import { generateId, getNewExpirationTime } from './utils';
import Confetti from 'react-dom-confetti';



export function AddThoughtForm(props) {
    const [isActive, setIsActive] = useState(false);

    const [text,setText]= useState('')

    const handleTextChange = ({target}) => {
      const {value} = target
      setText(value)
    }

const handleSubmit = (event) => {
  event.preventDefault()

  if(text.length > 0){

const thought= {
id:generateId(),
text: text,
expiresAt: getNewExpirationTime(),
}
props.addThought(thought)
setText('')
}

}

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: "0.07",
  duration: "2070",
  stagger: "3",
  width: "10px",
  height: "10px",
  perspective: "675px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};




const slowClick = (setIsActive) => () => {
  setIsActive(true);
  setTimeout(() => setIsActive(false), 1);
};

  return (

    <form onSubmit={handleSubmit} className="AddThoughtForm">
      <input
      className='journal-input'
        onChange={handleTextChange}
        value={text}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <button type="submit" className='surface-green' onClick={slowClick(setIsActive)} >
        <Confetti config={config} 
          active={!isActive}
        />
        Add Thought
      </button>
    </form>
  );
}