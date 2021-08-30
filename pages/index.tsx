import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import photo from '../public/photo.png'
import { CodeIcon, DocumentTextIcon, PresentationChartLineIcon } from '@heroicons/react/outline'
import AnchorButton from '../components/buttons/AnchorButton'
import Icon from '../components/icons/Icon'
import Repository from '../components/repository/Repository'

const Home: NextPage = () => {
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
                                    <Repository org="i-on-project" repo="core" languages={[{ color: '#A97BFF', lang: 'Kotlin' }, { color: '#336790', lang: 'PLpgSQL' }]}>
                                        Core is the i-on System repository of academic information.
                                    </Repository>
                                    <Repository org="xploitedd" repo="xploited-web" languages={[{ color: '#f1e05a', lang: 'JavaScript' }, { color: '#2b7489', lang: 'TypeScript' }]}>
                                        My website
                                    </Repository>
                                    <Repository org="xploitedd" repo="DrawAndGuess" url="" languages={[{ color: '#A97BFF', lang: 'Kotlin' }]}>
                                        Public repository of the Mobile Device Programming 2021 winter assignment
                                    </Repository>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
