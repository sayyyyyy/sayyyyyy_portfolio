import { useNavigate, Routes, Route } from "react-router-dom";

import { WorkDetail } from "../pages/workDetailPage";

type workElementProps = {
    workSrc: string;
    workTitle: string
}

export const WorkElement = (props: workElementProps) => {
    const { workSrc, workTitle } = props
    const navigate = useNavigate()
    return (
        <div onClick={() => {navigate('/workDetail')}} className="flex flex-col items-center">
            <img alt="work image" src={workSrc} className="w-64"></img>
            <p>{workTitle}</p>
            <Routes>
                <Route path="workDetail" element={<WorkDetail workSrc={workSrc} workTitle={workTitle} workOverview="説明" workObsession="こだわり" />} />
            </Routes>
        </div>
    );
}