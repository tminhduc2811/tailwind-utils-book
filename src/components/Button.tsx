import React from "react"

export interface ButtonProps {
    children: string
    onClick?: () => void
    className?: string
}


export const Button = ({ children, className, ...others }: ButtonProps) => {
    return (
        <button className={className} {...others}>{children}</button>
    )
}