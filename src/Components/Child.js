import React from "react";

const Child = (props) => {
  return (
    <div>
      {console.log("render child")}
      <h2>Child Components - {props.name}</h2>
    </div>
  );
};

export default React.memo(Child);
// export default Child;
