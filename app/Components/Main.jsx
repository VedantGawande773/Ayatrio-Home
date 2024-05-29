"use client";

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Step1Component from './Step1Component';
import Step2Component from './Step2Component';
import Step3Component from './Step3Component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch, faChair, faBox } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  // const [currentStep, setCurrentStep] = useState(1);

  // const nextStep = () => {
  //   setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
  // };

  // const prevStep = () => {
  //   setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  // };

  const currentStep = useSelector((state) => state.currentStep);
  const dispatch = useDispatch();

  const nextStep = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  const prevStep = () => {
    dispatch({ type: 'PREV_STEP' });
  };

  const [service, setService] = useState('');

  const handleServiceClick = (selectedService) => {
    setService(selectedService);
  };

  return (
    <div className="w-full h-full" style={{ overflow: 'hidden' }}>
      <nav className="flex items-center justify-between p-4 bg-white">
  <div className="flex items-center space-x-12">
    <h1 className="text-4xl font-bold">AYATRIO</h1>
    <a href="#" className="text-md">Floordecor</a>
    <a href="#" className="text-md">Walldecor</a>
    <a href="#" className="text-md">Tips, ideas & trends</a>
    <a href="#" className="text-md">Ayatrio for Business</a>
    <div className="flex items-center pl-12">
      <input type="search" className="w-full h-10 p-2 border-2 border-gray-200 bg-gray-200 
      mx-12 rounded-full focus:outline-none focus:border-blue-500" disabled />
    </div>
  </div>
  <div className="flex items-center space-x-4">
    <div className="relative">
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-black rounded-full"></span>
    </div>
    <FontAwesomeIcon icon={faUser} size="lg" />
  </div>
</nav>

{currentStep === 1 && <Step1Component onNext={nextStep} />}
{currentStep === 2 && <Step2Component onNext={nextStep} />}
{currentStep === 3 && <Step3Component onNext={nextStep} />}
      
        <div className="flex justify-between mt-56">
          <button onClick={prevStep} className="text-3xl ml-10 mb-10  font-bold">Back</button>
          <button onClick={nextStep} className="px-14 py-3 mb-12 mr-10 text-2xl font-bold rounded-full bg-black text-white">Next</button>
        </div>
    </div>
  );
};

export default Main;
