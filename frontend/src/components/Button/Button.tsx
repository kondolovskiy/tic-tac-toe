import './Button.scss';

export const Button = ({ children, onClick, ...props }: { children: React.ReactNode, onClick: () => void, [key: string]: any }) => {
    return <button onClick={onClick} {...props} className="button">{children}</button>;
}