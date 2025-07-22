import React from "react";

export interface IconProps {
    children: React.ReactNode;
    size?: "small" | "medium" | "large"; 
    className?: string;
    theme?: "light" | "dark";
}

export const Icon = ({
    children,
    size = "medium",
    className = "",
    theme = "light",
}: IconProps) => {    
    const sizeClasses = {
        small: "w-4 h-4",
        medium: "w-6 h-6",
        large: "w-8 h-8",
    }[size];

    const themeClasses = theme === "dark" ? "text-white" : "text-primary";

    return (
        <span className={`block ${sizeClasses} ${themeClasses} ${className}`}>
            {children}
        </span>
    );
};
