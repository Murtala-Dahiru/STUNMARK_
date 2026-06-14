import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  withArrow?: boolean;
  onClick?: () => void;
};

const Button = ({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  withArrow = false,
  onClick,
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md';
  
  const variantStyles = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white',
    secondary: 'bg-white hover:bg-gray-50 border border-gray-200 text-navy-900',
    accent: 'bg-gold-500 hover:bg-gold-400 text-navy-900',
    outline: 'bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-50',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-4 py-2',
    md: 'px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };
  
  const allClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  const content = (
    <>
      {children}
      {withArrow && <ArrowRight size={size === 'sm' ? 16 : 20} className="ml-2" />}
    </>
  );
  
  if (to) {
    return <Link to={to} className={allClasses}>{content}</Link>;
  }
  
  if (href) {
    return <a href={href} className={allClasses}>{content}</a>;
  }
  
  return (
    <button className={allClasses} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;