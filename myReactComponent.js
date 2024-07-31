// Create a React component
class MyReactComponent extends React.Component {
    render() {
        return React.createElement('div', null, 'Hello, this is a React component!');
    }
}

// Function to render the React component
window.renderReactComponent = function(container) {
    ReactDOM.render(React.createElement(MyReactComponent), container);
};
