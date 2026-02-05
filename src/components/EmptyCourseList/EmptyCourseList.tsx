import Button from '../../common/Button/Button';

import './EmptyCourseList.css';

const EmptyCourseList = (): JSX.Element => {
  return (
    <section className="empty-course-list">
      <h1 className="empty-course-list__title">Course List is Empty</h1>

      <p className="empty-course-list__subtitle">
        Please use "Add New Course" button to add your first course
      </p>

      <Button buttonText="Add New Course" />
    </section>
  );
};

export default EmptyCourseList;
