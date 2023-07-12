import React from 'react';


 function Alert (props) {
  return (
   props.alert && <div className="alert alert-primary" role="alert">
        <p><b>{props.alert.type}</b> : {props.alert.message}</p>
    </div>
  )
}

export default Alert;