const {useState, Fragment} = require("react");

const FunctionComponent = () => {
  let [count, setCount] = useState(30);
  
  let [array, setArray] = useState([]);

  setTimeout(()=>{
    count = count + 1
    console.log(count)
       setCount(count)

       array.push("pratik")
       console.log(array)
       setArray([...array])
  },2000)

  return (
    <Fragment>
      <h3>Function Component</h3>
      <h3>Count : {count}</h3>
      <h3>Array : {array.join(" , ")}</h3>
    </Fragment>
  );
};
export default FunctionComponent;
