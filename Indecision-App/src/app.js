const app = {
    title: 'Decisioner',
    subtitle: 'For When Decisions are Hard',
    options: ['Option 1', 'Option 2']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <h2>{app.subtitle}</h2>}
        <p>{app.options.length > 0 ? 'Here are your options: ' : 'No options.'}</p>
    </div>
)
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

const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)