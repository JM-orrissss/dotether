import Link, {LinkProps} from 'next/link'

export interface ButtonProps extends LinkProps {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
}

export const Button = ({
    variant = 'primary',
    size = 'medium',
    disabled = false,
    children,
    className = '',
    ...props
}: ButtonProps) => {
    const baseStyles = 'relative text-white inline-flex items-center justify-center font-semibold focus:outline-none transition-colors duration-200';
    const sizeStyles = {
        small: 'px-3 py-1 text-sm',
        medium: 'py-2 px-3 text-md',
        large: 'px-4 py-3 text-lg'
    }[size];
    const variantStyles = { 
        primary: 'bg-primary rounded-sm text-white hover:bg-primary-light',
        secondary: 'border-solid border-2 rounded-sm text-primary hover:bg-primary-light',
        tertiary: 'text-black hover:bg-primary-light !px-0 mx-3'
    }[variant];
    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
    const formattedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${disabledStyles} ${className}`.trim();
    
    return (
        <Link {...props} className={`${formattedClasses} group`}>
            {children}
            {variant === 'tertiary' &&<span className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>}
        </Link>
    );
}