import { ComponentPropsWithRef, forwardRef } from "react"

const AnchorButton = forwardRef<HTMLAnchorElement, ComponentPropsWithRef<'a'>>((props, ref) => {
    return (
        <a
            {...props}
            ref={ref}
            className={"bg-gray-800 hover:bg-gray-700 focus:bg-gray-800 transition duration-75 text-gray-100 px-7 py-3 rounded-md shadow-md block " + props.className}
        />
    )
})

export default AnchorButton