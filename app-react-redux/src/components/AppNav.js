import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomeView from "./HomeView";
import CoursesView from "./CoursesView";
import RewardsView from "./RewardsView";

function AppNav() {
  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses/">Courses</Link>
            </li>
            <li>
              <Link to="/rewards/">Rewards</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={HomeView} />
        <Route path="/students/:id/courses" component={CoursesView} />
        <Route path="/students/:id/rewards" component={RewardsView} />
    </Router>
  );
}

export default AppNav;
