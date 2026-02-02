import Accordion from "./Accordion.jsx";
import "./fat.css";

const FatPlan = () => {
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
      </div>
    </div>
  );
};

export default FatPlan;
