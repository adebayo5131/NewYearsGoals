import React from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

const App = () => {
    const yearGoals = [
    { id: 'yg1', text: 'Believing and having faith in God' },
    { id: 'yg2', text: 'Study as much materials as possible'},
    { id: 'yg3', text: 'Get an Internship'},
    { id: 'yg4', text: 'Maintain a good GPA no matter what!' },
    { id: 'yg5', text: 'Stay out of trouble' },
    { id: 'yg6', text: 'Continue to make everyone proud' }
  ];

  const addNewGoalHandler = newGoal => {
    yearGoals.push(newGoal);
    console.log(yearGoals);
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={yearGoals} />
    </div>
  );
};

export default App;


  