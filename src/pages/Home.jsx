import "./home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
   const navigate = useNavigate();
  const handlePlanClick = (planName) => {
    //alert(`You selected ${planName}`);
    // later: navigate(`/plan/${planName}`)
    if(planName=="Plan A"){
      navigate("/muscle");
    }
    else if(planName=="Plan B"){
      navigate("/fat");
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Choose Your Fitness Plan 💪</h1>
      <p className="home-subtitle">
        Discipline decides destiny. Pick your path.
      </p>

      <div className="plans-container">
        <div
          className="plan-card plan-a"
          onClick={() => handlePlanClick("Plan A")}
        >
          <h2>Plan A</h2>
          <p>Strength & Muscle Building</p>
          <span>Click to Explore →</span>
        </div>

        <div
          className="plan-card plan-b"
          onClick={() => handlePlanClick("Plan B")}
        >
          <h2>Plan B</h2>
          <p>Weight Loss & Cardio</p>
          <span>Click to Explore →</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
