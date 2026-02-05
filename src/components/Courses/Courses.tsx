import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import { Course, Author } from '../../constants';

import './Courses.css';

interface CoursesProps {
  courses: Course[];
  authors: Author[];
  onShowCourse: (id: string) => void;
}

const Courses = (props: CoursesProps): JSX.Element => {
  const { courses, authors, onShowCourse } = props;

  return (
    <section className="courses">
      <search className="courses__toolbar">
        <SearchBar />
      </search>

      <ul className="courses__list">
        {courses.map((course) => (
          <li key={course.id}>
            <CourseCard
              course={course}
              authorsList={authors}
              onShowCourse={onShowCourse}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Courses;
