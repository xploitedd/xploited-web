import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import photo from '../public/photo.png'
import { CodeIcon, DocumentTextIcon, PresentationChartLineIcon } from '@heroicons/react/outline'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Ricardo Margalhau</title>
                <meta name="description" content="Ricardo Margalhau's personal website" />
                <meta name="author" content="Ricardo Margalhau" />
            </Head>
            <div className="flex flex-col bg-gray-900 justify-center items-center h-screen">
                <div className="flex-initial w-full">
                    <div className="flex flex-col xl:flex-row items-center justify-center xl:space-x-20">
                        <div className="flex-shrink-0">
                            <Image
                                src={photo}
                                alt="test image"
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
                            <div><a href="https://github.com/xploitedd" target="_blank" rel="noreferrer" className="bg-gray-800 hover:bg-gray-700 transition duration-75 text-gray-100 px-7 py-3 rounded-md shadow-md block"><CodeIcon className="w-5 inline mr-3" /> GitHub</a></div>
                            <div><a href="https://www.linkedin.com/in/rmargalhau/" target="_blank" rel="noreferrer" className="bg-gray-800 hover:bg-gray-700 transition duration-75 text-gray-100 px-7 py-3 rounded-md shadow-md block"><PresentationChartLineIcon className="w-5 inline mr-3" /> LinkedIn</a></div>
                            <div><a href="/RicardoMargalhau_CV.pdf" target="_blank" rel="noreferrer" className="bg-gray-800 hover:bg-gray-700 transition duration-75 text-gray-100 px-7 py-3 rounded-md shadow-md block"><DocumentTextIcon className="w-5 inline mr-3" /> Curriculum Vitae</a></div>
                        </div>
                    </div>
                </div>
                {/* <div className="flex-initial">
                </div> */}
            </div>
        </>
    )
}

export default Home
