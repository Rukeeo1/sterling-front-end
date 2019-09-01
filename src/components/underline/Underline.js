import React from 'react';

function Hr(props) {
  return (
    <hr className="shadow" style={{ width: `${props.width}`, background: `${props.background}`, marginTop: "0px" }}></hr>
  )
}

export default Hr