export type Button = {
    text: string
    onClick?: () => void
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    icon?: JSX.Element
    isTransparent?: boolean
}