import { StarIcon } from "@heroicons/react/solid"
import { FunctionComponent, useMemo } from "react"
import Icon from "../icons/Icon"

const GITHUB_URI = 'https://github.com'

interface RepositoryProps {
    url?: string
    org: string
    repo: string
    languages?: {
        name: string
        color: string
    }[]
}

const Repository: FunctionComponent<RepositoryProps> = props => {
    const url = props.url ? props.url : `${GITHUB_URI}/${props.org}/${props.repo}`
    const langElems = useMemo(() => {
        return props.languages?.flatMap(lang => {
            const textColor = getTextColor(lang.color)
            return (
                <span key={lang.name} className={"px-2 py-1 rounded-md " + textColor} style={{ backgroundColor: lang.color }}>
                    {lang.name}
                </span>
            )
        }) ?? []
    }, [props.languages])

    return (
        <a href={url} target="_blank" rel="noreferrer">
            <div className="flex-initial mx-10 xl:mx-0 xl:w-96 bg-gray-800 rounded-md shadow-lg space-y-5 py-5 transform-gpu hover:scale-105 duration-75">
                <div className="w-full px-5">
                    <h3 className="text-xl inline"><Icon icon={StarIcon} /> {props.org} <span className="text-gray-400">/</span> {props.repo}</h3>
                </div>
                <div className="w-full px-5">
                    <p className="text-gray-200">{props.children}</p>
                </div>
                {langElems.length > 0 &&
                    <div className="w-full px-5 space-x-3">
                        {langElems}
                    </div>
                }
            </div>
        </a>
    )
}

const getTextColor = (backgroundHex: string) => {
    const hex = parseInt(backgroundHex.replace('#', ''), 16)
    const r = (hex >> 16) & 0xFF
    const g = (hex >> 8) & 0xFF
    const b = hex & 0xFF

    const brightness = Math.round((r * 299 + g * 587 + b * 114) / 1000)
    return brightness > 125 ? 'text-gray-700' : 'text-gray-200'
}

export default Repository