import React,{useEffect} from 'react'

export function Thought(props) {
  const { thought, removeThought } = props;

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  useEffect(() => {
    const timeRemaining = thought.expiresAt - Date.now();
    const timeout = setTimeout(() => {
      removeThought(thought.id);
      alert("Your thought has expired!");
    }, timeRemaining);
  
    return () => {
      clearTimeout(timeout);
    };
  }, [thought, removeThought]);

  return (
    <li className='entries-list'>
      <button
      className="surface-red"
        aria-label="Remove thought"
        onClick={handleRemoveClick}
      >
        X
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
