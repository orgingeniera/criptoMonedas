import React from 'react';
import styled from '@emotion/styled'
const Div = styled.div`
	color: #FFF;
    background-color: #B7322C;
    border-radius: 5px;
    width: 100%;
    text-transform: uppercase;
    font-size: 22px;
    padding: 15px;
    font-family : fantasy;
    font-weigth: 700;
    text-align:center;
`

const Mensaje = ({children}) => {
	return(
		<Div>{children}</Div>
	)

}

export default Mensaje