import { StaticImageData } from "next/image"

export type Button = {
    text: string
    onClick?: () => void
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    icon?: JSX.Element
    isTransparent?: boolean
}

export type NavItem = {
    text: string
    path?: string
    icon: JSX.Element
    onClick?: () => void
}

export type HeaderProps = {
    title?: string
}

export type InfoCard = {
    text: string
    path: string
    isAlt: boolean
    image: string | StaticImageData
    isExternal?: boolean
}

export type DashCard = {
    icon: JSX.Element
    text: string
    value: number
    isAlt?: boolean
}

export type ProgressCircle = {
    color: string
    percentage: number | 0
    radius: number
    
}
export type ProgressText = {
    percentage: number
}
export type ProgressPie = {
    radius: number
    percentage: number
    dimesions: number
}

export type ProgressBar = {
    percentage: number
}

export type Deposit = {
    id: string
    amount: number
    source: string
    date: string
}

export type Target = {
    id: string
    title: string
    amount: number
    current: number
    deposits: Deposit[]
    isComplete: boolean
}