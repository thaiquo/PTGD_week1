const CounterControls = ({ onIncrement, onIncrementByAmount, onReset }) => {
    return (
      <div className="d-grid gap-2">
        <button onClick={onIncrement} className="btn btn-primary">
          Increment +1
        </button>
        <button onClick={onIncrementByAmount} className="btn btn-success">
          Increment by Step
        </button>
        <button onClick={onReset} className="btn btn-danger">
          Reset
        </button>
      </div>
    );
  };
  
  export default CounterControls;
  