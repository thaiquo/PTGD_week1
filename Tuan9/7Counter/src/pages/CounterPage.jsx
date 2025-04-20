import { useState } from "react";
import CounterDisplay from "../components/CounterDisplay";
import CounterControls from "../components/CounterControls";
import StepInput from "../components/StepInput";

const CounterPage = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState("1"); // giữ dạng string để phản hồi đúng input

  const handleIncrement = () => setCount(count + 1);

  const handleIncrementByAmount = () => {
    const stepValue = parseInt(step);
    if (!isNaN(stepValue)) {
      setCount(count + stepValue);
    } else {
      alert("Please enter a valid number");
    }
  };

  const handleReset = () => setCount(0);

  return (
    <div className="counter-container">
      <CounterDisplay count={count} />
      <StepInput step={step} setStep={setStep} />
      <CounterControls
        onIncrement={handleIncrement}
        onIncrementByAmount={handleIncrementByAmount}
        onReset={handleReset}
      />
    </div>
  );
};

export default CounterPage;
