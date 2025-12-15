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
    sm: { icon: "h-6", text: "text-sm", subtext: "text-xs" },
    md: { icon: "h-8", text: "text-lg", subtext: "text-xs" },
    nav: { icon: "h-10", text: "text-xl", subtext: "text-sm" },
    lg: { icon: "h-12", text: "text-2xl", subtext: "text-sm" },
  };

  const currentSize = sizeClasses[size];
  const textColorClasses = textColor === "light" 
    ? { main: "text-white", sub: "text-slate-300" }
    : { main: "text-slate-900", sub: "text-slate-600" };

  // Determine which logo to use based on bgType or textColor
  // If bgType is explicitly set, use it; otherwise infer from textColor
  const logoType = bgType || (textColor === "light" ? "dark" : "light");
  const logoSrc = logoType === "dark" 
    ? "/Dagala_Analytics_-_logo_dark_bg-removebg-preview (2).png"
    : "/Dagala_Analytics_-_logo_light_bg-removebg-preview (1).png";

  const LogoContent = () => (
    <div className={`flex items-center ${showText ? 'space-x-3' : ''} ${className}`}>
      <div className={`${currentSize.icon} flex items-center justify-center`}>
        <img 
          src={logoSrc}
          alt="Dagala Analytics" 
          className="h-full w-auto object-contain max-w-full"
        />
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className={`${currentSize.text} font-semibold ${textColorClasses.main}`}>
            Dagala
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

