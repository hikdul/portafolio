import { JSX } from "react"

interface hIconProps
{
    to: string
    title: string
    icon: JSX.Element | JSX.Element[]
    active?: boolean
} 

export type{
    hIconProps
}