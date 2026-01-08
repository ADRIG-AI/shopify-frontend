import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "default" | "simple" | "icon-only";
  size?: "sm" | "md" | "nav" | "lg";
  showText?: boolean;
  className?: string;
  linkTo?: string;
  textColor?: "dark" | "light";
  bgType?: "light" | "dark";
}

const Logo = ({ 
  variant = "default", 
  size = "md", 
  showText = false,
  className = "",
  linkTo = "/",
  textColor = "dark",
  bgType
}: LogoProps) => {
  const sizeClasses = {
    sm: { icon: "h-10", text: "text-sm", subtext: "text-xs" },
    md: { icon: "h-16", text: "text-lg", subtext: "text-xs" },
    nav: { icon: "h-16", text: "text-xl", subtext: "text-sm" },
    lg: { icon: "h-18", text: "text-2xl", subtext: "text-sm" },
  };

  const currentSize = sizeClasses[size];
  const textColorClasses = textColor === "light" 
    ? { main: "text-white", sub: "text-slate-300" }
    : { main: "text-slate-900", sub: "text-slate-600" };

  // Determine which logo to use based on bgType or textColor
  // If bgType is explicitly set, use it; otherwise infer from textColor
  const logoType = bgType || (textColor === "light" ? "dark" : "light");
  const logoSrc = logoType === "dark" 
    ? "/TradeOps_white.svg"
    : "/TradeOps_black.svg";

  const LogoContent = () => (
    <div className={`flex items-center ${showText ? 'space-x-3' : ''} ${className}`}>
      <div className={`${currentSize.icon} flex items-center justify-center`}>
        <img 
          src={logoSrc}
          alt="TradeOps Analytica" 
          className="h-full w-auto object-contain max-w-full"
        />
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className={`${currentSize.text} font-semibold ${textColorClasses.main}`}>
          TradeOps
          </span>
          <span className={`${currentSize.subtext} font-medium -mt-1 tracking-wider ${textColorClasses.sub}`}>
            ANALYTICS
          </span>
        </div>
      )}
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="inline-block">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
};

export default Logo;

