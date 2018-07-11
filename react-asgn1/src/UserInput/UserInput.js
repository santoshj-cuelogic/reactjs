import React from 'react';
import './UserInput.css';

const userinput = (props) => {
	return (
			<div className="clsInput">
				<h2>User Input</h2>
				<label>Text Here: </label>
				<input type="text" onChange={props.changed} value={props.username} />
			</div>
		)
};

export default userinput;
