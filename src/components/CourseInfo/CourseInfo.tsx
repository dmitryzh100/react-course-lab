import Button from "../../common/Button/Button";
import DetailsList, { Detail } from "../../common/DetailsList/DetailsList";

import { getCourseDuration } from "../../helpers/getCourseDuration";
import { formatCreationDate } from "../../helpers/formatCreationDate";
import { getAuthorsNames } from "../../helpers/getAuthorsNames";
import { Course, Author } from "../../constants";

import "./CourseInfo.css";

interface CourseInfoProps {
    course?: Course;
    authors?: Author[];
    onBack?: () => void;
}

const DEFAULT_AUTHORS_IDS = ['2', '3'];
const DEFAULT_AUTHORS_LIST: Author[] = [
    { id: '1', name: 'name1' },
    { id: '2', name: 'name2' },
    { id: '3', name: 'name3' },
];

const CourseInfo = (props: CourseInfoProps): JSX.Element => {
    const { course, authors: authorsListProp, onBack } = props;
    const authorsList = authorsListProp ?? DEFAULT_AUTHORS_LIST;

    const id = course?.id ?? '';
    const title = course?.title ?? 'Course 1';
    const description = course?.description ?? 'Course 1 description';
    const creationDate = course?.creationDate ?? '01/01/2025';
    const duration = course?.duration ?? 60;
    const authors = course?.authors ?? DEFAULT_AUTHORS_IDS;

    const authorsNames = getAuthorsNames(authors, authorsList);
    const formattedDuration = getCourseDuration(duration);
    const formattedDate = formatCreationDate(creationDate);

    const [time, hourWord] = formattedDuration.split(" ");

    const courseDetails: Detail[] = [
        { label: "ID", value: id },
        {
            label: "Duration",
            value: (
                <>
                    <strong>{time}</strong> {hourWord}
                </>
            ),
        },
        { label: "Created", value: formattedDate },
        { label: "Authors", value: authorsNames },
    ];

    const handleBack = (): void => {
        if (onBack) {
            onBack();
        }
    };

    return (
        <article className="course-info">
            <h1 className="course-info__title">{title}</h1>

            <div className="course-info__card">
                <section className="course-info__description">
                    <h2>Description:</h2>
                    <p>{description}</p>
                </section>

                <aside className="course-info__details">
                    <DetailsList details={courseDetails} />
                </aside>
            </div>

            <nav className="course-info__actions">
                <Button buttonText="Back" onClick={handleBack} />
            </nav>
        </article>
    );
};

export { CourseInfo };
export default CourseInfo;
