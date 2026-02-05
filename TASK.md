# Where to put your code?
So, we already prepared basis for your React application.
It means we have added all required dependencies and setup everything, so you don't need to start React project by yourself.
There are already predefined files:
- `src/App.tsx`: main application component, we expect you to render components you create inside of it;
- `index.html`: HTML page we render our application;
- `src/main.tsx`: our application entry point, here you must put the logic for rendering <App> component and putting it on the page. By default it is empty.
Other files you see also have their purpose, so please, don't delete them.

Please, read carefully all recommendations below:
1. You must import and render your component(s) inside src/App.tsx file, otherwise we can't verify your solution!
2. You have to render <App> component inside of the element with "root" id! All the logic for putting <App> component inside the index.html page, you have to write in the src/main.tsx file! Otherwise we can't verify your solution.
3. We suggest creating separate files for components your are writing. For instance, if task description says creating a header component, you create a file src/components/Header.tsx and put inside all the code, and export the component as a result.

After that you import you new component to the src/App.tsx and render it inside, for examples like this:
`src/components/Header.tsx`:
```typescript
function Header() {
    return <header>Hello, I am header</header>;
}

export default Header;
```

`src/App.tsx`:
```typescript
import Header from "./components/Header";

function App() {
    return <Header />;
}

export default App;
```

4. If task says you need applying styles, please, import them directly to a component file like this:

`src/components/MyComponent.css`:

```scss
.my-component {
    color: red;
}
```

`src/components/MyComponent.tsx`:
```typescript
import "./MyComponent.css";

function MyComponent() {
    return <div className="my-component">Hello, I am component</div>;
}

export default MyComponent;
```

# Description
The whole task is to write a small React application that allows users to manage a list of courses with features like creating, deleting, and viewing course information. Additionally, the application will have authorization functionality to ensure secure access to the application's features.

The main goal of the task for this week is to create application's skeleton and some simple components for the app.

You can choose the design at your discretion.
It is important to keep the layout (the arrangement of elements on the page).

# Application's initial view:

he first part of the task is to prepare the project by setting up the required folder structure and configuring the environment.

The foundation for your React application has already been prepared. All required dependencies have been added, and everything is set up so you don't need to create the React project yourself.

Predefined files include the following:

src/App.tsx: The main application component, where the components you create should be rendered.
index.html: The HTML page where the application will be rendered.
src/main.tsx: The entry point of the application. This is where the logic for rendering the App component and placing it on the page should be implemented. By default, this file is empty.
Other files in the project also serve specific purposes, so make sure not to delete them.

It will take you about 1 hour to complete the task.

Please be aware that the task status is mandatory.

Task
Please take the following steps:

Create folders and files for each component. Follow the architecture below:
src
  |-- common
  |   |--Button
  |   |  |__ Button.tsx
  |   |
  |   |__Input
  |   |   |__ Input.tsx
  |   |   |
  |   |__ //any common components you want to add
  |
  |-- components
  |   |-- CourseInfo
  |   |   |__ CourseInfo.tsx
  |   |
  |   |-- Courses
  |   |   |__ components
  |   |      |__ CourseCard
  |   |         |__ CourseCard.tsx
  |   |      |__ SearchBar (extra task)
  |   |      |  |__ SearchBar.tsx
  |   |   |__ Courses.tsx
  |   |
  |   |__ // any components you want to add
  |   |
  |   |-- EmptyCourseList
  |   |    |__ EmptyCourseList.tsx
  |   |
  |   |-- Header
  |   |    |__ Header.tsx
  |   |    |__ components
  |   |        |__ Logo
  |   |            |__ Logo.tsx
  |   |
  |-- helpers
  |    |
  |    |--getCourseDuration.ts // a helper to format course duration
  |    |
  |    |--formatCreationDate.ts // to format date that we will receive from server
  |    |
  |    |__ // any helpers you want to add
  |
  |-- constants.ts // file with mocked data
  |
  |-- App.tsx
  |-- main.tsx
  |_ ...

## Caution
The presented architecture is required for use, BUT you can add files and folders at your discretion.
Further, you can use any way to add styles to components (styled components, Bootstrap, CSS modules etc).

## Tip
It's recommended to keep each component's style file in their appropriate folders.

# Components description

## Header: components description

Figma link

1. Create `Logo` component.
`Logo` component contains only logo picture (you can use any picture you like).

## info
`Logo` component is just a function component which returns img tag.


2. Create `Button` component.
`Button` component is a function component which returns button tag.

### tip
You will use `Button` component in several places through your app, so you should use props for this component such as buttonText and onClick (and any props, that you want).

3. Create `Header` component.
`Header` should be in App component.
`Header` component should include:
- Logo component;
- Logout button (Button component without any functionality for the current task).

## Courses: components description

Figma link

4. Create `CourseCard` component.
This component contains all information about the course.
For the current task you should use `mockedCoursesList` array for courses info.
`CourseCard` components should be rendered in Courses component (you will create it in the next step).
`CourseCard` component should contain the following information:
- Title (Course name);
- Duration (format: hh:mm + 'hours'). In the `mockedCoursesList` duration is specified in minutes;

### info
If hh < 10 (0,1,2,3,4,5,6,7,8,9) => '0' + h:mm + 'hours' (02:20 hours)
If mm < 10 (0,1,2,3,4,5,6,7,8,9) => hh:'0' + m + 'hours' (10:06 hours)
If hh = 1 => hh:mm + 'hour' (01:30 hour)

- Creation date (format: dd.mm.yyyy);
- Description;
- 'Show course' button (Reuse Button Component);
- Authors list:
    - the authors' names should be displayed on one line;
    - if all authors' names do not fit on one line, then the extra text should be cut off and '...' should be added at the end of line.

### caution
In `mockedCoursesList` each course has only authors' ids.
To define authors' names you should find them in `mockedAuthorsList` by id.

## Mocked courses and authors data.
Save these data as constants and use in your App:
``` typescript
export const mockedCoursesList = [
    {
      id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
      title: 'JavaScript',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                    nchanged.`,
      creationDate: '08/03/2021',
      duration: 160,
      authors: ['27cc3006-e93a-4748-8ca8-73d06aa93b6d', 'f762978b-61eb-4096-812b-ebde22838167'],
    },
    {
      id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
      title: 'Angular',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book.`,
      creationDate: '10/11/2020',
      duration: 210,
      authors: ['df32994e-b23d-497c-9e4d-84e4dc02882f', '095a1817-d45b-4ed7-9cf7-b2417bcbf748'],
    },
  ]

export const mockedAuthorsList = [
    {
        id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
        name: 'Vasiliy Dobkin'
    },
    {
        id: 'f762978b-61eb-4096-812b-ebde22838167',
        name: 'Nicolas Kim'
    },
    {
        id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
        name: 'Anna Sidorenko'
    },
    {
        id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
        name: 'Valentina Larina'
    },
]
```

5. Create `EmptyCourseList` component
`EmptyCourseList` component should be rendered instead of Courses components when we do not have any course.
`EmptyCourseList` component should include:
- Title with text: 'Course List is Empty'.
- Subtitle text: 'Please use "Add New Course" button to add your first course'.

Add New Course button *WITHOUT* functionality for current task. (Reuse Button Component).

6. Create `Courses` component.
`Courses`component should be rendered in App component.
`Courses` component should include:
- `SearchBar` component (task for the next week).
- `CourseCard` component.

Add new course button *WITHOUT* any functionality. (Reuse Button component).

### tip
You should import `mockedCoursesList` and `mockedAuthorsList` to the App component and pass it to the `Courses` component as a prop.
Use loop for `CourseCard` rendering.

7. Create `Course info` component
This component shows information about the course.
This component contains:
- ID of course;
- Title;
- Description;
- Duration;
- List of authors;
- Creation date;
- Back to courses button.

Pass course information to the `CourseInfo` component using props.

# How this task will be evaluated
We expect your solution to the task to meet the following criteria:

## Header
Should display Header component with:
- Logo (any appropriate image)
- Logout button (without functionality)

## `CourseCard` component
Should display `CourseCard` component with:
- course title;
- course description;
- authors list;
- course duration;
- creation date;
- 'Show course' button.
- `CourseInfo` component
- Render `CourseInfo` component with current course information.

## `EmptyCourseList` component
- Render `EmptyCourseList` component when no courses.

Component should contain:
- title 'Your List Is Empty';
- subtitle 'Please use "Add New Course" button to add your first course'.
- Add `New Course` button (without functionality for current task).

## Courses component
Show list of courses (use mocked course list for this task).
Show 'Add new course' button (without functionality for current task).

## `CourseInfo` Component
Create component that contains:
- course title
- course description
- course ID
- course duration
- creation date
- course authors
- 'Back' button


# GOOD PRACTICES THAT YOU CAN APPLY FOR THE TASK

1. Place css files in the folder with the component.
Example:
src
|
|- components
   |
   |-Header
     |-Header.tsx //component
     |-header.css //styles for this component

2. Use label tag for input. Link to the W3C.

3. Use key attribute for list rendering. Link to the documentation.

4. Use constants to avoid a hardcode. For example, when passing string properties to a component:
```typescript
// BAD
<Button text='Search' />


// GOOD
//constants.ts
const BUTTON_TEXT = 'Search';

//Button.tsx
import {BUTTON_TEXT} from './constants.ts';

<Button text={BUTTON_TEXT} />
```

5. Add empty string between import groups. Example:
```typescript
import from '[node_modules]'

import from '[own_components]'
import from '[constants]'

import from '[styles]'
import logo from '../../assets/logo.jpg';

export const Logo = () => <img src={logo} />;
or

export const Button = ({ text, onClick }) => (
    <button onClick={onClick}>{text}</button>
);
```
