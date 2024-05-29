import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch, faChair, faBox, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Step1Component = ({ onNext }) => {

const [service, setService] = useState('');

const handleServiceClick = (selectedService) => {
setService(selectedService);
  };

  return (
        <div className="p-8 ml-8">
        <h2 className="text-2xl  mb-4">Step 1</h2>
        <p className="mb-2 text-4xl">Tell us about what service you are looking for</p>
        <p className="mb-8  text-xl"> in this step, we'll ask you what type of service you are looking at.</p>
        <div className="flex  mb-12">
        <button
            className={`w-48 h-24 p-2 mr-6 border flex flex-col items-start ${service === 'Furnituring' ? 'border-black' : 'border-gray-300'}`}
            onClick={() => handleServiceClick('Furnituring')}
          >
            <FontAwesomeIcon icon={faCouch} size="3x" className="mb-2" />
            <span className='text-xl mb-4'>Furnituring</span>
          </button>
          <button
            className={`w-48 h-24 p-2 mr-6 border flex flex-col items-start  ${service === 'Furnishing' ? 'border-black' : 'border-gray-300'}`}
            onClick={() => handleServiceClick('Furnishing')}
          >
          
              <FontAwesomeIcon icon={faChair} size="3x" className="mb-2" />
             <span className='text-xl mb-4'> Furnishing</span>
            
          </button>
          <button
            className={`w-48 h-24 p-2 border flex flex-col items-start  ${service === 'Storage plan' ? 'border-black' : 'border-gray-300'}`}
            onClick={() => handleServiceClick('Storage plan')}
          >
              <FontAwesomeIcon icon={faBox} size="3x" className="mb-2" />
              <span className='text-xl mb-4'>Storage plan</span>
          </button>
        </div>
        </div>
  );
};

export default Step1Component;