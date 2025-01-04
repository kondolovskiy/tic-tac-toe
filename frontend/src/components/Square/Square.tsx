import './Square.scss';

export const Square = ({ children, onClick, ...props }: { children: React.ReactNode, onClick: () => void, [key: string]: any }) => {
    return <button onClick={onClick} {...props} className="square">{children}</button>;
}