import { Outlet, NavLink } from "react-router-dom";
import styles from "./Layout.module.css";
function Layout() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className="container">
          <nav>
            <ul className={styles.navigation_list}>
              <li className={styles.navigation_item}>
                <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
                  Home
                </NavLink>
              </li>
              <li className={styles.navigation_item}>
                <NavLink to="/new-workout" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
                  New Workout
                </NavLink>
              </li>
              <li className={styles.navigation_item}>
                <NavLink to="/workout-history" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
                  Workout History
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <div className="footer-content">Я подвал</div>
          <div>
            Credits:
            <ul>
              <li>
                <a href="https://www.flaticon.com/free-icons/book" title="book icons">
                  Book icons created by Freepik - Flaticon
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { Layout };
