const StepInput = ({ step, setStep }) => {
    return (
      <div className="mb-3">
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(e.target.value)}
          className="form-control"
          placeholder="Enter step value"
        />
      </div>
    );
  };
  
  export default StepInput;
  