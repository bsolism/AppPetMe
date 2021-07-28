import React, { useState } from "react";

import BasicInformation from "./BasicInformation";
import AditionalInformation from "./AditionalInformation";

function Wizard(props) {
  const [step, setStep] = useState(1);
  const { pet } = props;

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return <BasicInformation nextStep={nextStep} pet={pet} />;
    case 2:
      return <AditionalInformation prevStep={prevStep} />;
  }
}

export default Wizard;
