import { useState } from 'react';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList';

import { mockedCoursesList, mockedAuthorsList, Course } from './constants';

import './App.css';

const App = (): JSX.Element => {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const handleShowCourse = (id: string): void => {
    setSelectedCourseId(id);
  };

  const handleBackToCourses = (): void => {
    setSelectedCourseId(null);
  };

  const selectedCourse: Course | undefined = mockedCoursesList.find(
    (course) => course.id === selectedCourseId
  );

  const renderContent = (): JSX.Element => {
    if (selectedCourse) {
      return (
        <CourseInfo
          course={selectedCourse}
          authors={mockedAuthorsList}
          onBack={handleBackToCourses}
        />
      );
    }

    if (!mockedCoursesList.length) {
      return <EmptyCourseList />;
    }

    return (
      <Courses
        courses={mockedCoursesList}
        authors={mockedAuthorsList}
        onShowCourse={handleShowCourse}
      />
    );
  };

  return (
    <div className="app">
      <Header />

      <main className="app__content">{renderContent()}</main>
    </div>
  );
};

export default App;
