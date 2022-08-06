import type { PropsWithChildren, PropsWithoutRef } from "react";
import { TiSocialLinkedin, TiSocialGithub, TiMail } from "react-icons/ti"
import LinkButton from "~/components/LinkButton";

export default function Index() {
    return (
        <div className="h-screen text-white p-10">
            <div className="flex flex-col lg:justify-center items-center h-full">
                <Header />
                <div className="grow-0 h-0">
                    <div className="flex flex-col items-center space-y-10 mt-20">
                        <ActivitySection className="flex-initial" />
                        <SocialMediaSection className="flex-initial" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Header() {
    return (
        <div className="flex flex-col items-center text-center lg:text-left">
            <img
                alt="profile pic"
                className="flex-initial w-48 h-48 rounded-full shadow-2xl shadow-red-700 object-cover"
                src="/images/photo.jpeg"
            />

            <h1 className="flex-initial text-6xl font-black mt-10">Ricardo Margalhau</h1>
            <h2 className="flex-initial text-3xl">Software Engineer</h2>
        </div>
    )
}

function ActivitySection(
    props: PropsWithoutRef<{
        className?: string
    }>
) {
    return (
        <div className={`flex flex-col justify-center space-y-5 ${props.className}`}>
            <ActivityData title="Present">
                <li>Software Engineer Intern @ <a className="underline" target="blank noreferrer" href="https://cloudflare.com">Cloudflare</a></li>
                <li>MSc. in Computer Science @ <a className="underline" target="blank noreferrer" href="https://fct.unl.pt">NOVA - School of Science and Technology</a></li>
                {/* <a className="underline mt-3" href="/files/RicardoMargalhau_CV.pdf">Download Curriculum Vitae</a> */}
            </ActivityData>
        </div>
    )
}

function ActivityData(
    props: PropsWithChildren<{
        title: string,
        className?: string
    }>
) {
    return (
        <div className={`flex flex-col lg:flex-row space-y-3 lg:space-x-5 lg:space-y-0 ${props.className}`}>
            <h1 className="font-bold">{props.title}</h1>
            <div>
                <ul className="list-disc lg:list-none">
                    {props.children}
                </ul>
            </div>
        </div>
    )
}

function SocialMediaSection(
    props: PropsWithoutRef<{
        className?: string
    }>
) {
    return (
        <div className={`flex flex-col lg:flex-row justify-center space-y-3 lg:space-x-3 lg:space-y-0 ${props.className}`}>
            <div className="flex-initial">
                <LinkButton href="https://linkedin.com/in/rmargalhau">
                    <TiSocialLinkedin className="inline" /> linkedin.com/in/rmargalhau
                </LinkButton>
            </div>
            <div className="flex-initial">
                <LinkButton href="https://github.com/xploitedd">
                    <TiSocialGithub className="inline" /> github.com/xploitedd
                </LinkButton>
            </div>
            <div className="flex-initial">
                <LinkButton href="mailto:ricardo@xploited.xyz">
                    <TiMail className="inline" /> ricardo [at] xploited [dot] xyz
                </LinkButton>
            </div>
        </div>
    );
}
