import { Icon } from '@/icons/Icon';
import Link, {LinkProps} from 'next/link'

export interface ButtonProps extends LinkProps {
    children?: React.ReactNode;
    icon?: React.ReactNode;
    iconPlacement?: 'left' | 'right';
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    className?: string;
    underline?: boolean;
}

export const Button = ({
    variant = 'primary',
    size = 'medium',
    disabled = false,
    children,
    className = '',
    icon,
    iconPlacement = 'left',
    underline = true,
    ...props
}: ButtonProps) => {
    const baseStyles = 'relative text-white inline-flex items-center justify-center font-medium focus:outline-none transition-colors duration-200';
    const sizeStyles = {
        small: 'px-3 py-1 text-sm',
        medium: 'py-1 px-3 text-md',
        large: 'px-4 py-2 text-lg'
    }[size];
    
    const variantStyles = { 
        primary: 'bg-primary rounded-sm hover:bg-primary-light',
        secondary: 'border-solid border-2 rounded-sm text-primary hover:bg-primary-light',
        tertiary: 'text-primary hover:bg-primary-light !px-0 mx-3'
    }[variant];
    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
    const formattedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${disabledStyles} ${className}`.trim();
    
    return (
        <Link {...props} className={`${formattedClasses} group`}>
            {icon && iconPlacement === 'left' && <Icon className={`${children ? 'mr-2' : ''}`}>{icon}</Icon>}
            {children}
            {icon && iconPlacement === 'right' && <Icon className={`${children ? 'ml-2' : ''}`}>{icon}</Icon>}
            {variant === 'tertiary' && underline && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>}
        </Link>
    );
}