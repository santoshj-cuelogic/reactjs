import React from 'react';
import './UserOutput.css';

const useroutput = (props) => {
		return (
				<div>					
					<h2>User Output</h2>
					<label>User Name = </label>{props.username}
					<p>JavaScript XML (JSX) is an extension to the JavaScript language syntax. Similar in appearance to HTML, JSX provides a way to structure component rendering using syntax familiar to many developers. React components are typically written using JSX, although they do not have to be (components may also be written in pure JavaScript). JSX is similar to another extension syntax created by Facebook for PHP.</p>
					<p>React does not attempt to provide a complete 'application framework'. It is designed specifically for building user interfaces and therefore does not include many of the tools some developers might consider necessary to build an application. This allows the choice of whichever libraries the developer prefers to accomplish tasks such as performing network access or local data storage. Common patterns of usage have emerged as the library matures.</p>
				</div>
			)
	};

export default useroutput;