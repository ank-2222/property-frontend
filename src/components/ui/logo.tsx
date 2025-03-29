import React from 'react';

// Define valid size options
type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Define prop types
interface LogoProps {
  size?: LogoSize;
}

const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  // Size mappings using rem units for all typography
  const sizeMappings = {
    xs: {
      primaryText: "text-base tracking-[0.6rem]",
      secondaryText: "text-xs tracking-[0.3rem]",
      spacing: "mt-1"
    },
    sm: {
      primaryText: "text-lg tracking-[0.6rem]",
      secondaryText: "text-sm tracking-[0.4rem]",
      spacing: "mt-1"
    },
    md: {
      primaryText: "text-xl tracking-[0.7rem]", 
      secondaryText: "text-base tracking-[0.5rem]",
      spacing: "mt-1"
    },
    lg: {
      primaryText: "text-2xl tracking-[0.8rem]",
      secondaryText: "text-xl tracking-[0.6rem]",
      spacing: "mt-1"
    },
    xl: {
      primaryText: "text-3xl tracking-[1rem]",
      secondaryText: "text-2xl tracking-[0.7rem]",
      spacing: "mt-2"
    }
  };

  // Get the appropriate classes based on size prop
  const classes = sizeMappings[size];

  return (
    <div >
      <div className="flex flex-col items-center justify-center">
        <p className={`font-[Alata] ${classes.primaryText} text-center`}>MONARCH HILL</p>
        <p className={`font-[Alata] ${classes.secondaryText} text-center ${classes.spacing}`}>REAL ESTATE</p>
      </div>
    </div>
  );
};

export default Logo;