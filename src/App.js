const root = ReactDOM.createRoot(document.getElementById('root'));

const h1 = React.createElement('h1', { id: 'heading', className: 'heading' }, 'Hello World');
const h2 = React.createElement('h2', { id: 'heading2', className: 'heading' }, 'React!');

const div = React.createElement('div', { id: 'div1' }, [h1, h2]);
const div2 = React.createElement('div', { id: 'div2' }, [h1, h2]);

const parent = React.createElement('div', {id: 'parent'}, [div, div2]);

root.render(parent)