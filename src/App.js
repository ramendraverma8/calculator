import { useState } from "react";
import ButtonValue from "./Component/ButtonValue";
import Card from "./UI/Card";
import Screen from "./UI/Screen";

function App() {
  const [calc, setCalc] = useState({ sign: "", num: 0, res: 0, ans: 0 });

  console.log("runagain");

  const ClickHandler = (event) => {
    event.preventDefault();
    const value = event.target.innerHTML;
    if (value === "C") {
      resetHandler(value);
    } else if (value === "+-") {
      invertHandler(value);
    } else if (value === "%") {
      percentHandler(value);
    } else if (value === "=") {
      calculateHandler(value);
    } else if (
      value === "/" ||
      value === "x" ||
      value === "-" ||
      value === "+"
    ) {
      signHandler(value);
    } else if (value === ".") {
      decimalHandler(value);
    } else {
      numHandler(value);
    }
  };

  //

  const resetHandler = (value) => {
    setCalc({ ...calc, num: 0, res: 0 , sign : '', ans:0});
  };

  const invertHandler = () => {
    setCalc({
      ...calc,
      ans: calc.ans ? calc.ans*-1 :calc.num * -1,
      sign: "",
    });
  };

  const percentHandler = () => {
    let num = calc.num ? parseFloat(calc.num) : 0;
    let res = calc.res ? parseFloat(calc.res) : 0;
    let ans = calc.ans ? parseFloat(calc.ans) : '';

    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      ans: (ans /= Math.pow(100, 1)),
    
      sign: "",
    });
  };

  const calculateHandler = () => {
    console.log("answer");
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "x"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        ans :calc.num === "0" && calc.sign === "/"
        ? "can't divide with zero"
        : math(Number(calc.res), Number(calc.num), calc.sign),
        res:
          calc.num === "0" && calc.sign === "/"
            ? "can't divide with zero"
            : math(Number(calc.res), Number(calc.num), calc.sign),
        sign: "",
        num: 0,
      
      });
    }
  };

  const signHandler = (value) => {
    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
      ans:''
    });
  };

  const decimalHandler = (value) => {
    console.log("dec");
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
    console.log(typeof calc.num);
  };

  const numHandler = (value) => {
    setCalc({
      ...calc,
      num:
        calc.num === 0 && value === "0"
          ? "0"
          : calc.num % 1 === 0
          ? Number(calc.num + value)
          : calc.num + value,
      res: !calc.sign ? 0 : calc.res,
      ans:''
    });
  };

  return (
    <Card>
      <Screen
        value={
            calc.res && calc.sign && calc.num
            ? calc.res + calc.sign + calc.num
            : calc.sign && calc.num
            ? calc.num + calc.sign
            : calc.res && calc.sign
            ? calc.res + calc.sign
            : calc.num 
            ? calc.num
            : ''
        }
        ans={calc.ans}
      />

      

      <ButtonValue onClick={ClickHandler} />
    </Card>
  );
}

export default App;
