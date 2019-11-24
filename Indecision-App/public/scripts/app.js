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

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
