import { Layout } from "./Components/Layout/Layout";

import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Pages/HomePage/Home";
import { WorkoutHistory } from "./Components/Pages/HistoryPage/WorkoutHistory";
import { NewWorkout } from "./Components/Pages/NewWorkoutPage/NewWorkout";
import { NotFound } from "./Components/Pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="workout-history" element={<WorkoutHistory />} />
          <Route path="new-workout" element={<NewWorkout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
