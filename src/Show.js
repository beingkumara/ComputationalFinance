import React from "react";

function Show(props) {
  return (
    <div className="result">
      <p>
        {props.name} : {props.val}
      </p>
    </div>
  );
}

export default Show;
