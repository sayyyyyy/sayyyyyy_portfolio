import { useLocation } from "react-router-dom";

type workDetailProps = {
    workSrc: string;
    workTitle: string
    workOverview: string;
    workObsession: string; 
    workSkill: Array<string>;
    workPeriod: string, 
    workLink: string, 
    githubLink: string, 
    workNumOfPeople: number,
    workResponsibilty: string
}

export const WorkDetailPage = () => {
    const location = useLocation()

    const {workSrc, workTitle, workOverview, workObsession, workSkill, workPeriod, workLink, githubLink, workNumOfPeople, workResponsibilty} = location.state
    return (
        <div>
            <h2>{workTitle}</h2>
            <div className="flex">
                <img alt="work image" src={workSrc} className="w-64"></img>
                <div>
                    <p>アプリ概要</p>
                    <p>{workOverview}</p>
                    <p>開発期間</p>
                    <p>{workPeriod}</p>
                    <p>開発人数</p>
                    <p>{workNumOfPeople}</p>
                    <p>担当</p>
                    <p>{workResponsibilty}</p>
                    <br />
                    <p>{workObsession}</p>
                    {(() => {
                        if (workLink) {
                            return (
                                <div>
                                    <p>アプリリンク</p>
                                    <p>{workLink}</p>
                                </div>
                            );
                        }
                    })()}

                    {(() => {
                        if (githubLink) {
                            return (
                                <>
                                    <p>GitHubリンク</p>
                                    <p>{githubLink}</p>
                                </>
                            );
                        }
                    })()}
                </div>
            </div>
            <div className="flex">
                {workSkill.map((skill: string) => {
                    return (
                        <p>{skill}</p>
                    );
                })}
            </div>
        </div>
    );
}