import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkTo: string;
  iconBgColor?: string;
};

const ServiceCard = ({
  icon,
  title,
  description,
  linkTo,
  iconBgColor = 'bg-primary-50',
}: ServiceCardProps) => {
  return (
    <div className="card hover:shadow-md group">
      <div className={`${iconBgColor} p-4 rounded-lg inline-flex mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={linkTo} 
        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group-hover:underline"
      >
        Learn more
        <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;