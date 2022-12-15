import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/new-workout">New Workout</NavLink>
          </li>
          <li>
            <NavLink to="/workout-history">Workout History</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
