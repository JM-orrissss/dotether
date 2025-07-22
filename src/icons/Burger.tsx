import { Icon } from "./Icon";

export const BurgerIcon = (props: Omit<React.ComponentProps<typeof Icon>, "children">) => {
    return (
        <Icon {...props}>
            <svg 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
            >
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
            </svg>

        </Icon>
    );
};