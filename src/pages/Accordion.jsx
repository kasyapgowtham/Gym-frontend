import { useState } from "react";
import "./Accordion.css";

const Accordion = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`accordion-item ${open ? "open" : ""}`}>
      <div className="accordion-header" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <span className="accordion-icon">{open ? "−" : "+"}</span>
      </div>

      {open && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
