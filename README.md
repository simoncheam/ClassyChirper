Classy Chirper
The goal of this lab is to convert, re-write, or from scratch create the same Chirper lab from the beginning of the React module. Except the design constraint is that it must be written using only Class-based Components.

 

Getting Started
Create a new project with Create React App.
Delete the src and public directory and all of its contents.
Create a new public directory and a new index.html file inside of public.
Use the ! emmet shortcut to generate a fresh html document in the index.html file. Place <div id="root"></div> in the <body> of the html document you created. (like we did in earlier videos!)
Create a new src directory and a components directory inside of src.
Create an App.jsx and a index.js file inside of src.
Write the basic "entry point" code for the index.js file, avoid copy/paste so you can practice writing it yourself!
// inside of src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
Write a simple function component that returns some JSX for your App.jsx file.
// inside of /src/App.jsx
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello from App Class Component!</h1>
            </div>
        );
    }
}

export default App;
 

You should now have a project structure that resembles the following:

node_modules/
public/
|- index.html
src/
|- components/
|- App.jsx
|- index.js
.gitignore
package-lock.json
package.json
README.md
 

Instructions (same as before)
Your objective should be to create a "timeline" of Chirps -- short messages that you post on the Chirper platform.

Your timeline should load with at least three chirps.

Code a form with at least two inputs where users can submit new chirps from.

When a new chirp is submitted it should be shown back to the user in the timeline.