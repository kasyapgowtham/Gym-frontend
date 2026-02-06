import Accordion from "./Accordion.jsx";
import "./fat.css";
import { useNavigate } from "react-router-dom";

const FatPlan = () => {
  const payNow = () => {
  const upiLink =
    "upi://pay?pa=success@razorpay&pn=TestPayment&am=10&cu=INR&tn=TestingPayment";

  window.location.href = upiLink;
};
  const navigate=useNavigate();
  return (
    <div className="fat-container">
      <div className="fat-card">
        <h1 className="fat-title">Fat Loss Program 🔥</h1>
        <p className="fat-subtitle">Burn fat. Stay consistent.</p>

        <Accordion
          title="Week 1 – Cardio Base + Diet"
          content="Workout: Walking, cycling
Food: Low sugar, vegetables, lean protein"
        />

        <Accordion
          title="Week 2 – HIIT + Diet"
          content="Workout: HIIT, jump rope
Food: High fiber, controlled carbs"
        />

        <Accordion
          title="Week 3 – Strength + Cardio"
          content="Workout: Full body circuits
Food: Protein rich, hydration focus"
        />

        <Accordion
          title="Week 4 – Fat Shred Week"
          content="Workout: HIIT + core
Food: Clean meals, calorie deficit"
        />
          {/* 🔘 Action Buttons */}
        <div className="fat-btn-group">
          <button
            className="fat-btn secondary"
            onClick={() => navigate("/home")}
          >
            ← Previous
          </button>

          <button
            className="fat-btn primary"
            onClick={payNow}
          >
            Pay Now 💳
          </button>
        </div>
      </div>
    </div>
  );
};

export default FatPlan;
