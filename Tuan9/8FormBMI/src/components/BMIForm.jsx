import { useState } from "react";

const BMIForm = () => {
  const [form, setForm] = useState({
    height: "",
    weight: "",
  });

  const [result, setResult] = useState("");

  // Action: updateInput
  const updateInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Action: calculateResult
  const calculateResult = (e) => {
    e.preventDefault();
    const height = parseFloat(form.height);
    const weight = parseFloat(form.weight);

    if (isNaN(height) || isNaN(weight) || height <= 0) {
      setResult("Vui lòng nhập đúng chiều cao và cân nặng.");
      return;
    }

    const bmi = weight / ((height / 100) ** 2);
    const roundedBMI = bmi.toFixed(2);

    let category = "";
    if (bmi < 18.5) category = "Gầy";
    else if (bmi < 25) category = "Bình thường";
    else if (bmi < 30) category = "Thừa cân";
    else category = "Béo phì";

    setResult(`BMI của bạn là ${roundedBMI} (${category})`);
  };

  return (
    <form className="card" onSubmit={calculateResult}>
      <h3 className="mb-3 text-center">Tính chỉ số BMI</h3>

      <div className="mb-3">
        <label className="form-label">Chiều cao (cm):</label>
        <input
          type="number"
          className="form-control"
          name="height"
          value={form.height}
          onChange={updateInput}
          placeholder="Ví dụ: 170"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Cân nặng (kg):</label>
        <input
          type="number"
          className="form-control"
          name="weight"
          value={form.weight}
          onChange={updateInput}
          placeholder="Ví dụ: 60"
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Tính BMI
      </button>

      {result && <div className="result text-center">{result}</div>}
    </form>
  );
};

export default BMIForm;
