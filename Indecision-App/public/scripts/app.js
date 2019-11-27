'use strict';

var app = {
    title: 'Decisioner',
    subtitle: 'For When Decisions are Hard',
    options: ['Option 1', 'Option 2']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'h2',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options: ' : 'No options.'
    )
);

// COUNTER EXAMPLE
var count = 0;

var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};

var resetCounter = function resetCounter() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var counterTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Current Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: resetCounter },
        'Reset'
    )
);

var renderCounterApp = function renderCounterApp() {
    var counterTemplate = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Current Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: resetCounter },
            'Reset'
        )
    );

    ReactDOM.render(counterTemplate, appRoot);
};

renderCounterApp();
// USER EXAMPLE
/*
const user = {
    name: 'Anthony',
    age: 15,
    location: 'Baton Rouge, LA'
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}

const userInfo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)
*/
