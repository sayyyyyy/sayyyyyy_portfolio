import { useLocation } from "react-router-dom";

import { TitleComponent } from "../components/titleComponent";

export const WorkDetailPage = () => {
    const location = useLocation()

    const {workImage, workTitle, workOverview, workObsession, workSkill, workPeriod, workLink, githubLink, workNumOfPeople, workResponsibilty} = location.state
    return (
        <div className="relative top-24">
            <TitleComponent>{workTitle}</TitleComponent>
            <div className="md:flex">
                <img alt="work image" src={workImage} className="m-auto md:m-4 md:max-w-[50%] max-h-screen"></img>
                <div className="flex flex-col items-start m-6">
                    <div className="mt-8 flex flex-col items-start">
                        <p className="font-bold">アプリ概要</p>
                        <p className="text-left">{workOverview}</p>
                    </div>
                    <div className="mt-4 flex flex-col items-start">
                        <p className="font-bold">開発期間</p>
                        <p className="text-left">{workPeriod}</p>
                    </div>
                    <div className="mt-4 flex flex-col items-start">
                        <p className="font-bold">開発人数</p>
                        <p className="text-left">{workNumOfPeople}</p>
                    </div>
                    <div className="mt-4 flex flex-col items-start">
                        <p className="font-bold">担当</p>
                        <p className="align-left">{workResponsibilty}</p>
                    </div>
                    {(() => {
                        if (workLink) {
                            return (
                                <div className="mt-4 flex flex-col items-start">
                                    <p className="font-bold">アプリリンク</p>
                                    <p className="text-left">{workLink}</p>
                                </div>
                            );
                        }
                    })()}

                    {(() => {
                        if (githubLink) {
                            return (
                                <div className="mt-4 flex flex-col items-start">
                                    <p className="font-bold">GitHubリンク</p>
                                    <p className="text-left">{githubLink}</p>
                                </div>
                            );
                        }
                    })()}
                    <br />
                    <p className="text-left">{workObsession}</p>
                </div>
            </div>
            <div className="flex overflow-scroll m-4">
                {workSkill.map((skill: string) => {
                    return (
                        <p key={skill} className="flex items-center justify-center m-2 p-2 bg-zinc-400 rounded-3xl whitespace-nowrap">{skill}</p>
                    );
                })}
            </div>
        </div>
    );
}