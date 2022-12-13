import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/new_workout">New Workout</a>
          </li>
          <li>
            <a href="/workout_history">Workout History</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
