import React from 'react';

const validationdata = (props) => {
	let validationMessage = 'Text long enough';

	if(props.strlength <= 5) {
		validationMessage = 'Text too short';
	}

	return (		
				<div>
					<h2>Validation Component</h2>
					<p>{validationMessage}</p>											
				</div>
		)
};

export default validationdata;

