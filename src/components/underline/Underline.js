import React from 'react';

function Hr(props) {
  return (
    <hr className="shadow" style={{ width: `${props.width}`, background: `${props.background}`, marginTop: `${props.marginTop}`, height:`${props.height}`, border:"none"}}></hr>
  )
}

export default Hr