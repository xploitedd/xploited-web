import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import photo from '../public/photo.png'
import { CodeIcon, DocumentTextIcon, PresentationChartLineIcon } from '@heroicons/react/outline'
import AnchorButton from '../components/buttons/AnchorButton'
import Icon from '../components/icons/Icon'
import Repository from '../components/repository/Repository'
import apolloClient from '../src/apollo-client'
import { GetPinnedRepositoriesDocument, GetPinnedRepositoriesQuery, GetPinnedRepositoriesQueryVariables } from '../src/generated-types'
import { useMemo } from 'react'

interface HomeProps {
    repoProps: PinnedRepository[]
}

const Home: NextPage<HomeProps> = props => {
    const repoList = useMemo(() => {
        return props.repoProps.map(repo => {
            return (
                <Repository key={repo.url} org={repo.owner.name} repo={repo.name} languages={repo.languages}>
                    {repo.description}
                </Repository>
            )
        })
    }, [props.repoProps])

    return (
        <>
            <Head>
                <title>Ricardo Margalhau</title>
            </Head>
            <div className="w-full min-h-screen bg-gray-900">
                <div className="flex flex-col justify-center items-center w-full h-screen space-y-24 py-10">
                    <div className="flex-initial w-full">
                        <div className="flex flex-col xl:flex-row items-center justify-center xl:space-x-20">
                            <div className="flex-shrink-0">
                                <Image
                                    src={photo}
                                    alt="this is me"
                                    width="300"
                                    height="300"
                                    className="rounded-full shadow-lg"
                                />
                            </div>
                            <div className="flex-initial text-center xl:w-1/3 xl:text-left my-5 xl:my-0 space-y-5">
                                <h1 className="text-6xl md:text-8xl font-bold text-gray-100">Ricardo <br /> Margalhau</h1>
                                <div className="mx-10 xl:mx-0">
                                    <h3 className="text-xl text-gray-400">BSc. Computer Science and Engineering @ ISEL, Lisbon</h3>
                                    {/* <h3 className="text-xl text-gray-100">MSc. Computer Science and Engineering @ IST, Lisbon</h3> */}
                                </div>
                                <h3 className="text-xl text-gray-100">me [at] xploited [dot] xyz</h3>
                            </div>
                            <div className="flex-initial space-y-4">
                                <AnchorButton href="https://github.com/xploitedd" target="_blank" rel="noreferrer"><Icon icon={CodeIcon} /> GitHub</AnchorButton>
                                <AnchorButton href="https://www.linkedin.com/in/rmargalhau/" target="_blank" rel="noreferrer"><Icon icon={PresentationChartLineIcon} /> LinkedIn</AnchorButton>
                                <AnchorButton href="/RicardoMargalhau_CV.pdf" target="_blank" rel="noreferrer"><Icon icon={DocumentTextIcon} /> Curriculum Vitae</AnchorButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center h-screen">
                    <div className="flex-initial">
                        <div className="flex flex-col items-center xl:items-start space-y-5">
                            <div className="flex-initial mx-10 xl:mx-0">
                                <h2 className="text-4xl text-gray-100 font-mono text-center xl:text-left">Selected Projects 😎</h2>
                            </div>
                            <div className="flex-initial">
                                <div className="flex flex-col xl:flex-row space-y-5 xl:space-y-0 xl:space-x-10 text-gray-100">
                                    {repoList}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

interface PinnedRepository {
    name: string
    url: string
    description?: string
    owner: {
        name: string
        url: string
    }
    languages: {
        name: string
        color: string
    }[]
}

export async function getServerSideProps() {
    const { data } = await apolloClient.query<GetPinnedRepositoriesQuery, GetPinnedRepositoriesQueryVariables>({
        query: GetPinnedRepositoriesDocument,
        variables: {
            userLogin: "xploitedd"
        },
        fetchPolicy: 'no-cache'
    })

    const pinnedRepositories = data.user?.pinnedItems.nodes ?? []
    const repoProps = pinnedRepositories.map(repo => {
        if (repo?.__typename !== 'Repository')
            return null

        return {
            name: repo.name,
            url: repo.url,
            description: repo.description,
            owner: {
                name: repo.owner.login,
                url: repo.owner.url
            },
            languages: repo.languages?.nodes?.map(lang => {
                if (lang === null)
                    return null

                return {
                    name: lang.name,
                    color: lang.color ?? '#00000'
                }
            }).filter(lang => lang != null) ?? []
        } as PinnedRepository
    }).filter(res => res !== null) as PinnedRepository[]

    return { props: { repoProps } }
}

export default Home
