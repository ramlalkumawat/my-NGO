import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  path: string;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ path, size = 24, color = 'currentColor', className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      {...props}
    >
      <path d={path} />
    </svg>
  );
};

export default Icon;