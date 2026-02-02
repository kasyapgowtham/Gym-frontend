import Accordion from "./Accordion.jsx";
import "./Muscle.css";

const MusclePlan = () => {
  return (
    <div className="muscle-container">
      <div className="muscle-card">
        <h1 className="muscle-title">Muscle Building Program 💪</h1>
        <p className="muscle-subtitle">Build strength. Build confidence.</p>

        <Accordion
          title="Week 1 – Foundation + Diet"
          content="Workout: Chest, Back, Light Weights
Food: High protein, eggs, oats, chicken, rice"
        />

        <Accordion
          title="Week 2 – Progressive Load + Diet"
          content="Workout: Push/Pull/Legs
Food: Protein shakes, brown rice, vegetables"
        />

        <Accordion
          title="Week 3 – Intensity Training + Diet"
          content="Workout: Supersets, drop sets
Food: Lean meat, complex carbs"
        />

        <Accordion
          title="Week 4 – Peak Week + Diet"
          content="Workout: Heavy lifting + form focus
Food: Clean bulk, controlled calories"
        />
      </div>
    </div>
  );
};

export default MusclePlan;
