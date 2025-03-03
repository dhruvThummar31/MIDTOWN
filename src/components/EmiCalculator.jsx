import React from 'react';
import { FaMoneyBillWave } from 'react-icons/fa';
import { MdRefresh } from 'react-icons/md';

export const EmiCalculator = () => {
  const [emiInput, setEmiInput] = React.useState({
    loanAmount: '',
    tenure: '',
    interestRate: ''
  });
  const [emi, setEmi] = React.useState('');

  const calculateEmi = () => {
    const { loanAmount, tenure, interestRate } = emiInput;
    const P = parseFloat(loanAmount);
    const N = parseFloat(tenure);
    const R = parseFloat(interestRate) / 12 / 100;

    if (!P || !N || !R) return;

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(emi.toFixed(2));
  };

  return (
    <div className="calculator-container">
      <div className="calculator-card bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <FaMoneyBillWave className="w-6 h-6 text-green-700 mt-1" />
          <h2 className="text-xl font-bold text-gray-900 pt-2">EMI Calculator</h2>
        </div>

        {['loanAmount', 'tenure', 'interestRate'].map((key) => (
        <div key={key} className="mb-4">
            <label className="block text-sm font-medium text-gray-800 mb-2 capitalize">
            {key === 'loanAmount'
                ? 'Loan Amount'
                : key === 'tenure'
                ? 'Tenure in Months'
                : 'Yearly Interest Rate'}
            </label>
            <input
            type="number"
            placeholder={
                key === 'loanAmount'
                    ? 'Loan Amount'
                    : key === 'tenure'
                    ? 'Tenure in Months'
                    : 'Yearly Interest Rate'
                }
                value={emiInput[key]}
                onChange={(e) => setEmiInput({ ...emiInput, [key]: e.target.value })}
                className="input-field w-full p-3 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white capitalize"
                />
                 </div>
                ))}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-800 mb-2">EMI</label>
          <input
            type="text"
            placeholder='EMI'
            value={emi}
            readOnly
            className="result-field w-full p-3 pb-2 border border-gray-300 rounded-lg bg-gray-50 font-semibold text-gray-900"
          />
        </div>

        <div className="space-y-3 mt-10">
          <button
            onClick={calculateEmi}
            className="calculate-btn w-full bg-green-600 text-white p-3 pt-4 rounded-lg font-medium hover:bg-green-700"
          >
            Calculate EMI
          </button>
          <button
            onClick={() => {
              setEmiInput({ loanAmount: '', tenure: '', interestRate: '' });
              setEmi('');
            }}
            className="clear-btn w-full bg-black text-white p-3 pt-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-800 "
          >
            <MdRefresh className="w-5 h-5 text-green-700 mb-1" />
            Clear Values
          </button>
        </div>
      </div>
    </div>
  );
};
