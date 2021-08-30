import { ComponentProps, ComponentPropsWithRef, createElement, FunctionComponent } from "react";

type IconProps = {
    icon: FunctionComponent<ComponentProps<'svg'>>
} & ComponentPropsWithRef<'svg'>

const Icon: FunctionComponent<IconProps> = props => {
    const textIconProps = {
        ...(props as ComponentProps<'svg'>),
        className: 'w-5 inline mr-3',
        icon: undefined
    }

    return createElement(props.icon, textIconProps)
}

export default Icon