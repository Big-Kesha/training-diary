import style from "./NewWorkout.module.css";

function NewWorkout() {
  // const [exercise, setExercise] = useState<>({})
  return (
    <div>
      <h1>New Workout</h1>

      <form className={style.form}>
        <input className={style.input} type="text" name="exercise" placeholder="exercise" />
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
