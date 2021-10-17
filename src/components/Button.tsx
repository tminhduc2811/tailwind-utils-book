import React from "react"

export interface ButtonProps {
    children: string
    onClick?: () => void
    className?: string
}


export const Button = ({ children, className }: ButtonProps) => {
    return (
        <button className={className}>{children}</button>
    )
}