export const LoadingSpinner = ({ size = "md" }) => {
    const sizeClasses = {
      sm: "w-4 h-4",
      md: "w-6 h-6", 
      lg: "w-8 h-8"
    };
    
    return (
      <div className="flex items-center justify-center">
        <div className={`${sizeClasses[size]} border-2 border-slate-200 border-t-blue-600 rounded-full animate-spin`}></div>
      </div>
    );
  };