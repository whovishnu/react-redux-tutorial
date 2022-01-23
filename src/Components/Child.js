import React from "react";

const Child = () => {
  return (
    <div>
      {console.log("render child")}
      <h2>Child Components</h2>
    </div>
  );
};

// export default React.memo(Child);
export default Child;
