import { IconProps } from "./icons.types";

export const UserIcon = ({
    theme,
    classNames,
    size = 'medium'
}: IconProps) => {
    // Determine icon size based on the size prop
    const sizeClasses = {
        small: 'w-4 h-4',
        medium: 'w-5 h-5',
        large: 'w-6 h-6'
    }[size];
    
    return (
        <svg className={`${sizeClasses} ${theme === 'dark' ? 'text-white' : 'text-primary'} ${classNames}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd"/>
        </svg>
    )
}