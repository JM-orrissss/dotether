import { Icon } from "./Icon";

export const DashboardIcon = (props: Omit<React.ComponentProps<typeof Icon>, "children">) => {
    return (
        <Icon {...props}>
            <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5" />
            </svg>
        </Icon>
    );
};