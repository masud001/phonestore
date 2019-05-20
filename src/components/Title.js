import React from 'react'
import Styled from 'styled-components';

export default function Title({...props}) {
  return (
    <div className="row">
        <div className="col-12 my-5 text-center">
			<Headding 
				className="title-text p-3">{props.name} <strong 
				className="blue-text">{props.title}</strong>
			</Headding>
        </div>
    </div>
  )
}

const Headding = Styled.h1`
    text-transform:uppercase;
    border:3px solid var(--mainblue);
    .blue-text{
        color:var(--mainblue);
    }

`