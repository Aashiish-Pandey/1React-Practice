import "./Person.css";

const person = (props) => {
  const { name, age, height } = props;

  return (
    <div className="Person">
      <p>
        my name is {name} .I am {age} years old and my height is {height}{" "}
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
