import React, {useState} from 'react';

import './NewGoal.css';

const NewGoal = props => {
   const[enteredGoals, setEnteredGoal] = useState('')
  const addGoalHandler = event => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: enteredGoals
    };
    setEnteredGoal('');
    props.onAddGoal(newGoal);
  };


  const textChangeHandler = event => {
    setEnteredGoal(event.target.value)
  }

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={enteredGoals}onChange={textChangeHandler}/>
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
