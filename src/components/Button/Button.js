import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
	border-radius: 3px;
	color: ${props => theme.text};
	background: eggwhite;
	padding: 4px 15px;
	border: 1px solid ${props => theme.border}
    outline: 3px;
`;

const theme = {
    text: "black",
    border: "gray"
};

function Button(props) {
	return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}

export default Button;