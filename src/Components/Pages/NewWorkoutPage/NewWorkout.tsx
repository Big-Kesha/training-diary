import style from "./NewWorkout.module.css";
import React, { useState } from "react";
import { IExercise } from "./ExerciseInterface";
import { ExerciseList } from "./ExerciseList/ExerciseList";

function NewWorkout() {
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [value, setValue] = useState("");

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const addExercise = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    if (value) {
      setExercises([
        ...exercises,
        {
          id: Date.now(),
          title: e.target[0].value,
          weight: e.target[1].value,
          reps: e.target[2].value,
          sets: e.target[3].value,
        },
      ]);
    }
  };
  return (
    <div>
      <h1>New Workout</h1>
      <div className="exercises">
        {exercises.map((exercise) => (
          <div className={style.exercise_item} key={exercise.id}>
            <div className="exercise-title">exercise: {exercise.title}</div>
            <div className="exercise-weight">weight: {exercise.weight}</div>
            <div className="exercise-reps">reps: {exercise.reps}</div>
            <div className="exercise-sets">sets: {exercise.sets}</div>
          </div>
        ))}
      </div>
      <form className={style.form} onSubmit={(e) => addExercise(e)}>
        <input className={style.input} type="text" name="exercise" placeholder="exercise" onChange={(e) => inputChange(e)} />
        <input className={style.input} type="text" name="weight" placeholder="weight" />
        <input className={style.input} type="text" name="reps" placeholder="reps" />
        <input className={style.input} type="text" name="sets" placeholder="sets" />
        <button type="submit" className={style.button}>
          Add
        </button>
      </form>
    </div>
  );
}

export { NewWorkout };
