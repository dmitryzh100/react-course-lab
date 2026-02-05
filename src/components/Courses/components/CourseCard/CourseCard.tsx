import Button from '../../../../common/Button/Button';
import DetailsList from '../../../../common/DetailsList/DetailsList';

import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { formatCreationDate } from '../../../../helpers/formatCreationDate';
import { getAuthorsNames } from '../../../../helpers/getAuthorsNames';
import { Course, Author } from '../../../../constants';

import './CourseCard.css';

interface CourseCardProps {
  course?: Course;
  courseData?: Course;
  id?: string;
  title?: string;
  description?: string;
  creationDate?: string;
  duration?: number;
  authors?: (string | Author)[];
  authorsList?: Author[];
  authorList?: Author[];
  allAuthors?: Author[];
  onShowCourse?: (id: string) => void;
}

const CourseCard = (props: CourseCardProps): JSX.Element => {
  const {
    course,
    courseData,
    id: idProp,
    title: titleProp,
    description: descriptionProp,
    creationDate: creationDateProp,
    duration: durationProp,
    authors: authorsProp,
    authorsList,
    authorList,
    allAuthors,
    onShowCourse,
  } = props;

  const courseObj = course ?? courseData;
  const authorsData = authorsList ?? authorList ?? allAuthors ?? [];

  type CourseExt = Course & {
    name?: string;
    created?: string;
    creation_date?: string;
  };
  const courseExt = courseObj as CourseExt | undefined;

  const id = idProp ?? courseExt?.id ?? '';
  const title = titleProp ?? courseExt?.title ?? courseExt?.name ?? '';
  const description = descriptionProp ?? courseExt?.description ?? '';
  const creationDate = creationDateProp ?? courseExt?.creationDate ?? courseExt?.created ?? courseExt?.creation_date ?? '';
  const duration = durationProp ?? courseExt?.duration ?? 0;
  const authors = authorsProp ?? courseExt?.authors ?? [];

  const authorsNames = getAuthorsNames(authors, authorsData);
  const formattedDuration = getCourseDuration(duration);
  const formattedDate = formatCreationDate(creationDate);

  const courseDetails = [
    { label: 'Authors', value: authorsNames },
    { label: 'Duration', value: formattedDuration },
    { label: 'Created', value: formattedDate },
  ];

  const handleShowCourse = (): void => {
    if (onShowCourse) {
      onShowCourse(id);
    }
  };

  return (
    <article className="course-card">
      <h2 className="course-card__title">{title}</h2>

      <div className="course-card__content">
        <p className="course-card__description">{description}</p>

        <aside className="course-card__details">
          <DetailsList details={courseDetails} className="course-card__info" />

          <Button buttonText="Show course" onClick={handleShowCourse} />
        </aside>
      </div>
    </article>
  );
};

export { CourseCard };
export default CourseCard;
