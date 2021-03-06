import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Courses from './components/course/CoursesPage';
import ManageCoursePage from "./components/course/ManageCoursePage";

export default (

  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={Courses} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
