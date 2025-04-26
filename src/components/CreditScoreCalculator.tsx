import React, { useState } from 'react';
import { Calculator, AlertCircle } from 'lucide-react';

const CreditScoreCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    paymentHistory: '0',
    creditUtilization: '0',
    creditHistory: '0',
    creditMix: '0',
    newCredit: '0'
  });

  const weights = {
    paymentHistory: 0.35,
    creditUtilization: 0.30,
    creditHistory: 0.15,
    creditMix: 0.10,
    newCredit: 0.10
  };

  const calculateScore = () => {
    const total = Object.keys(formData).reduce((acc, key) => {
      return acc + (Number(formData[key as keyof typeof formData]) * weights[key as keyof typeof weights]);
    }, 0);

    return Math.round(300 + (total * 550));
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const score = calculateScore();
  const getScoreColor = (score: number) => {
    if (score >= 740) return 'text-green-600';
    if (score >= 670) return 'text-blue-600';
    if (score >= 580) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Calculator className="h-8 w-8 text-blue-900" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Credit Score Calculator</h2>
            <p className="text-gray-600">
              Estimate your credit score based on the key factors that influence it
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-lg">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment History (35%)
                  </label>
                  <select
                    name="paymentHistory"
                    value={formData.paymentHistory}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="1">Always paid on time</option>
                    <option value="0.7">1-2 late payments</option>
                    <option value="0.4">3-5 late payments</option>
                    <option value="0">Multiple late payments</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Credit Utilization (30%)
                  </label>
                  <select
                    name="creditUtilization"
                    value={formData.creditUtilization}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="1">Less than 10%</option>
                    <option value="0.8">10-30%</option>
                    <option value="0.5">31-50%</option>
                    <option value="0.3">51-75%</option>
                    <option value="0">Above 75%</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Length of Credit History (15%)
                  </label>
                  <select
                    name="creditHistory"
                    value={formData.creditHistory}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="1">More than 7 years</option>
                    <option value="0.7">4-7 years</option>
                    <option value="0.4">2-4 years</option>
                    <option value="0.2">Less than 2 years</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Credit Mix (10%)
                  </label>
                  <select
                    name="creditMix"
                    value={formData.creditMix}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="1">Excellent mix</option>
                    <option value="0.7">Good mix</option>
                    <option value="0.4">Limited mix</option>
                    <option value="0">Poor mix</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Credit (10%)
                  </label>
                  <select
                    name="newCredit"
                    value={formData.newCredit}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="1">No recent applications</option>
                    <option value="0.7">1-2 applications</option>
                    <option value="0.4">3-5 applications</option>
                    <option value="0">Multiple recent applications</option>
                  </select>
                </div>

                <div className="bg-white p-6 rounded-lg shadow mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700 font-medium">Estimated Score:</span>
                    <span className={`text-3xl font-bold ${getScoreColor(score)}`}>
                      {score}
                    </span>
                  </div>
                  <div className="flex items-start mt-4 text-sm text-gray-600">
                    <AlertCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p>This is an estimate based on the information provided. Your actual credit score may vary.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditScoreCalculator;