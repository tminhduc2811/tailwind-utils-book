export interface ButtonProps {
    children: string
    onClick?: () => void
}

export const Button = ({ children }: ButtonProps) => {
    return (
        <button>{children}</button>
    )
}