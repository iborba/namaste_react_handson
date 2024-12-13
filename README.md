# Parcel

- HMR: Hot Module Replacement (updates the page automatically)

  - File Watching Algorithm (written in C++)

  https://browsersl.ist/
  https://parceljs.org/getting-started/webapp/

React Components

- Class based components - OLD way to code
- Functional components - NEW way to code

// React functional components is a normal js code that returns a JSX
const HeadingComponent = () => {
return <h1>hello world</h1>;
}

/\*

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style src="index.css"></style>
  <link rel="stylesheet" href="./index.css">
  <title>Document</title>
</head>
<body>
  <h1>What's outside of root is not REPLACEABLE</h1>
  <div id="root"></div>
  <h1>OK?</h1>
  <script type="module" src="./App.js"></script>
</body>

</html>

import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'));

const h1 = React.createElement('h1', { id: 'heading', className: 'heading' }, 'Hello World');
const h2 = React.createElement('h2', { id: 'heading2', className: 'heading' }, 'React!');

const div = React.createElement('div', { id: 'div1' }, [h1, h2]);
const div2 = React.createElement('div', { id: 'div2' }, [h1, h2]);

const TitleComponent = () => <h1 className='heading' tabIndex="1">Hey, I'm using JSX inside a Title component!</h1>

// JSX = html-link syntax
const jsxHeading = (

  <div>
    Title()
    <TitleComponent></TitleComponent>
    <TitleComponent />
    <h1 className='heading' tabIndex="1">Hey, I'm using JSX and adding a title inside it</h1>
  </div>
)

// Component composition
const HeadingComponent = () => (

  <div id="container">
    <TitleComponent />
    <h2 className='heading' tabIndex="1">Hey, I'm using JSX inside a component!</h2>
  </div>
)

const parent = React.createElement('div', {id: 'parent'}, [div, div2, jsxHeading, <HeadingComponent />]);

root.render(parent)

// // let restaurants = resArray;
// // const [restaurants] = useState(); // same as let restaurants.
// // const [restaurants] = useState([]); // same as let restaurants = [].
// const [restaurants, setRestaurants] = useState(resArray); // first parameter is the variable name, second parameter is a function named as set+variableName. useState(thitParameter) thisParameter sets the initial value from the first parameter.

// useEffect(() => {console.log('useEffect called')}, [])
// console.log("Use effect is always called after the HTML component be rendered. So, it's recommended to call the APIs inside useEffect")

\*/

use corsproxy.io if necessary.
