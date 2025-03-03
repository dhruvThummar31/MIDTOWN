import React from 'react';
import { FaChartLine } from 'react-icons/fa';
import { MdRefresh } from 'react-icons/md';

export const LoanEligibilityCalculator = () => {
  const [loanInput, setLoanInput] = React.useState({
    monthlyIncome: '',
    tenure: '',
    interestRate: '',
    existingEmis: ''
  });
  const [eligibility, setEligibility] = React.useState({
    grossEmiAbility: '',
    netEmi: '',
    loanAmount: ''
  });

  const calculateLoanEligibility = () => {
    const { monthlyIncome, tenure, interestRate, existingEmis } = loanInput;
    const grossEmiAbility = (parseFloat(monthlyIncome) * 0.45).toFixed(2);
    const netEmi = (grossEmiAbility - parseFloat(existingEmis || 0)).toFixed(2);

    const R = parseFloat(interestRate) / 12 / 100;
    const N = parseFloat(tenure);

    const loanAmount = (netEmi * (Math.pow(1 + R, N) - 1)) / (R * Math.pow(1 + R, N));

    setEligibility({
      grossEmiAbility,
      netEmi,
      loanAmount: loanAmount.toFixed(2)
    });
  };

  return (
    <div className="calculator-container">
      <div className="calculator-card bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <FaChartLine className="w-6 h-6 text-green-700" />
          <h2 className="text-xl font-bold text-gray-900 pt-1">Loan Eligibility</h2>
        </div>

        {['monthlyIncome', 'tenure', 'interestRate', 'existingEmis'].map((key) => (
          <div key={key} className="mb-4">
            <label className="block text-sm font-medium text-gray-800 mb-2 capitalize">
              {key.replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              type="number"
              placeholder={`Enter ${key.replace(/([A-Z])/g, ' $1')}`}
              value={loanInput[key]}
              onChange={(e) => setLoanInput({ ...loanInput, [key]: e.target.value })}
              className="input-field w-full p-3 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
            />
          </div>
        ))}

        {['grossEmiAbility', 'netEmi', 'loanAmount'].map((key) => (
          <div key={key} className="mb-4">
            <label className="block text-sm font-medium text-gray-800 mb-2 capitalize">
              {key.replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              type="text"
              value={eligibility[key]}
              readOnly
              className="result-field w-full p-3 border border-gray-300 rounded-lg bg-gray-50 font-semibold text-gray-900"
            />
          </div>
        ))}

        <div className="space-y-3 mt-10">
          <button
            onClick={calculateLoanEligibility}
            className="calculate-btn w-full bg-green-600 text-white p-3 pt-4 rounded-lg font-medium hover:bg-green-700"
          >
            Calculate Eligibility
          </button>
          <button
            onClick={() => {
              setLoanInput({ monthlyIncome: '', tenure: '', interestRate: '', existingEmis: '' });
              setEligibility({ grossEmiAbility: '', netEmi: '', loanAmount: '' });
            }}
            className="clear-btn w-full bg-black text-white p-3 pt-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-800"
          >
            <MdRefresh className="w-5 h-5 text-green-700 mb-1" />
            Clear Values
          </button>
        </div>
      </div>
    </div>
  );
};
