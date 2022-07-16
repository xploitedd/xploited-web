import { PropsWithChildren } from "react";

export default function LinkButton(
    props: PropsWithChildren<{
        href: string
    }>
) {
    return (
        <a target="blank noreferrer" href={props.href}>
            <div className="bg-gray-800 px-5 py-3 rounded-md shadow-md hover:shadow-lg">
                { props.children }
            </div>
        </a>
    )
}