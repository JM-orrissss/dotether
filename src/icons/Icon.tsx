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
        medium: "w-5 h-5",
        large: "w-6 h-6",
    }[size];

    const themeClasses = theme === "dark" ? "text-white" : "text-primary";

    return (
        <span className={`${sizeClasses} ${themeClasses} ${className}`}>
            {children}
        </span>
    );
};
