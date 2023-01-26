import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigation } from "./";
import { InlineWidget } from "react-calendly";
function CalendlyTest() {
  return (
    <div className="calendly">
      <Router>
        <Navigation />
      </Router>
      <InlineWidget url="https://calendly.com/ashikahmedfifa/test" />
    </div>
  );
}

export default CalendlyTest;
