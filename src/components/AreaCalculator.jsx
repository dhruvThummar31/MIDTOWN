import React from 'react';
import { FaCalculator } from 'react-icons/fa';
import { MdRefresh } from 'react-icons/md';


export const AreaCalculator = () => {
  const [area, setArea] = React.useState({
    acre: '',
    vigha: '',
    squareFeet: '',
    squareMeter: '',
    squareYard: ''
  });

  const handleAreaChange = (field, value) => {
    const acreValue =
      field === 'acre'
        ? parseFloat(value) || 0
        : field === 'vigha'
        ? (parseFloat(value) || 0) / 1.7414
        : field === 'squareFeet'
        ? (parseFloat(value) || 0) / 43560
        : field === 'squareMeter'
        ? (parseFloat(value) || 0) / 4046.85642
        : (parseFloat(value) || 0) / 4840;

    setArea({
      acre: acreValue.toFixed(4),
      vigha: (acreValue * 1.7414).toFixed(4),
      squareFeet: (acreValue * 43560).toFixed(4),
      squareMeter: (acreValue * 4046.85642).toFixed(4),
      squareYard: (acreValue * 4840).toFixed(4)
    });
  };

  return (
    <div className="calculator-container">
      <div className="calculator-card bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <FaCalculator className="w-6 h-6 text-green-700" />
          <h2 className="text-xl font-bold text-gray-900 pt-2">Area Conversion</h2>
        </div>
        
        {Object.keys(area).map((key) => (
          <div key={key} className="mb-4">
            <label className="block text-sm font-medium text-gray-800 mb-2 capitalize">
              {key.replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              placeholder={"Area in " + key.replace(/([A-Z])/g, ' $1')}
              type="number"
              value={area[key]}
              onChange={(e) => handleAreaChange(key, e.target.value)}
              className="input-field w-full p-3 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent bg-white capitalize"
            />
          </div>
        ))}
        
        <button
          onClick={() => setArea({ acre: '', vigha: '', squareFeet: '', squareMeter: '', squareYard: '' })}
          className="clear-btn w-full bg-black text-white p-3 pt-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-800 mt-10"
        >
          <MdRefresh className="w-5 h-5 text-green-700 mb-1" />
          Clear Values
        </button>
      </div>
    </div>
  );
};
