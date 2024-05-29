import { useState } from 'react';

const Step3Component = ({ onNext }) => {
  const [finance, setFinance] = useState('');

  const handleFinanceClick = (selectedFinance) => {
    setFinance(selectedFinance);
  };

  const financeOptions = [
    { label: 'Furnituring', amount: '₹₹₹' },
    { label: 'Furnituring', amount: '₹K' },
    { label: 'Furnituring', amount: '₹₹K' },
    { label: 'Furnituring', amount: '₹₹₹K' },
  ];

  return (
    <div className="p-8 ml-8">
      <h2 className="text-2xl  mb-4">Step 3</h2>
      <p className="mb-2 font-bold text-4xl">Tell us about how much finance</p>
      <p className="mb-8 text-xl">
        in this step, we'll ask you what are type room do you want design.
      </p>
      <div className="flex mb-12">
        {financeOptions.map((option, index) => (
          <div
            key={index}
            className={`w-48 h-24 p-2 mr-6 border flex flex-col items-start justify-center cursor-pointer ${
              finance === option.amount ? 'border-black' : 'border-gray-300'
            }`}
            onClick={() => handleFinanceClick(option.amount)}
          >
            <span className="text-5xl">{option.amount}</span>
            <span className="text-xl">{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step3Component;