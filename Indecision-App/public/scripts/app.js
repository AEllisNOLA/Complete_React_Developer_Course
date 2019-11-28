'use strict';

var hidden = true;

var toggleView = function toggleView() {
    hidden = !hidden;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleView },
            hidden ? 'Show Details' : 'Hide Details'
        ),
        !hidden && React.createElement(
            'p',
            null,
            'Details'
        )
    );
    ReactDOM.render(template, document.getElementById('app'));
};

render();
