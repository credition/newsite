import React from 'react';
import { Users, Star, Award, Clock } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      id: 1,
      icon: <Users className="h-8 w-8 text-yellow-500" />,
      value: '1,000+',
      label: 'Satisfied Clients',
    },
    {
      id: 2,
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      value: '35+',
      label: 'Point Average Increase',
    },
    {
      id: 3,
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      value: '10+',
      label: 'Years Experience',
    },
    {
      id: 4,
      icon: <Clock className="h-8 w-8 text-yellow-500" />,
      value: '45',
      label: 'Days Average Results',
    },
  ];

  return (
    <section className="py-16 bg-blue-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="mx-auto bg-blue-800 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;