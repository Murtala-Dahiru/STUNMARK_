import React from 'react';

type TestimonialCardProps = {
  quote: string;
  author: string;
  position: string;
  company: string;
  imageUrl?: string;
};

const TestimonialCard = ({
  quote,
  author,
  position,
  company,
  imageUrl,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="flex-grow">
        <svg
          className="h-8 w-8 text-primary-400 mb-5"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">{quote}</p>
      </div>
      <div className="flex items-center pt-4 border-t border-gray-100">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={author}
            className="h-12 w-12 rounded-full mr-4 object-cover"
          />
        )}
        <div>
          <h4 className="font-semibold text-navy-900">{author}</h4>
          <p className="text-sm text-gray-500">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;