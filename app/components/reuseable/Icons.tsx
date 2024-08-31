import React from 'react';

interface IconProps {
  name: string;
  className?: string;
}

const Icons: React.FC<IconProps> = ({ name, className }) => {
  return (
    <img
      src={`/img/kokoro/icones/${name}.svg`}
      alt={`${name} icon`}
      className={className}
    />
  );
};

export default Icons;
