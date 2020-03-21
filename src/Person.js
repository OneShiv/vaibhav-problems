import React, { useState } from "react";

const Person = props => {
  const [personAgeV, personAgeSetter] = useState({
    age: props.age,
    someData: "Dummy Data",
    someData2: "Dummy data 2"
  });
  return (
    <div className="Person">
      <p onClick={props.click}>
        {" "}
        I'm {props.name} !, and I am {personAgeV.age} years old,{" "}
        {props.children}
      </p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default Person;
