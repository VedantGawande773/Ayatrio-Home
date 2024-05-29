import { useState } from 'react';
import Image from 'next/image'; 
import bedImg from '../Assest/bed-room-image.JPG';
import kidImg from '../Assest/kids-room-image.jpeg';

const Step2Component = ({ onNext }) => {
  const [roomType, setRoomType] = useState('');

  const handleRoomTypeClick = (selectedRoomType) => {
    setRoomType(selectedRoomType);
  };

  const roomOptions = [
    { type: 'Kids Room', imgSrc: kidImg },
    { type: 'Bed Room', imgSrc: bedImg },
  ];

  const displayOptions = Array.from({ length: 10 }, (_, i) => ({
    ...roomOptions[i % 2],
  }));

  const imageWidth = 100;
  const imageHeight = 100;

  return (
    <div className="p-8 ml-8">
      <h2 className="text-2xl font-bold mb-4">Step 2</h2>
      <p className="mb-2 text-4xl">Tell us about your space</p>
      <p className="mb-8 text-xl">
        In this step, we'll ask you what type of room you want to design.
      </p>
      <div className="grid grid-cols-5 gap-6 mb-12">
        {displayOptions.map((room, index) => (
          <button
            key={index}
            className={`border p-6 flex flex-col items-center ${
              roomType === room.type ? 'border-black' : 'border-gray-300'
            }`}
            onClick={() => handleRoomTypeClick(room.type)}
          >
            <Image
              src={room.imgSrc}
              alt={room.type}
              width={imageWidth}
              height={imageHeight}
              className="object-cover mb-2"
            />
            <span className="text-xl">{room.type}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Step2Component;
