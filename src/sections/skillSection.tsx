import { TitleComponent } from "../components/titleComponent";
import { SkillElement } from "../components/skillElement";
import skillData from '../data/skillData.json';

export const SkillSection = () => {
    const { webFrontendSkillList, webBackEndSkillList, gameSkillList, mobileSkillList, otherSkillList } = skillData;

    return (
        <div id="skill-container" className="w-screen">
            <TitleComponent>SKILL</TitleComponent>
            <h3 className="text-3xl m-8">WebFrontEnd</h3>
            <div className="flex flex-wrap m-8 border-2 rounded-md">
                {webFrontendSkillList.map((skill) => {
                    return (
                        <SkillElement key={skill.skillName} skillName={skill.skillName} />
                    );
                })}
            </div>
            <h3 className="text-3xl m-8">WebBackEnd</h3>
            <div className="flex flex-wrap m-8 border-2 rounded-xl">
                {webBackEndSkillList.map((skill) => {
                    return (
                        <SkillElement key={skill.skillName} skillName={skill.skillName} />
                    );
                })}
            </div>
            <h3 className="text-3xl m-8">Game</h3>
            <div className="flex flex-wrap m-8 border-2 rounded-xl">
                {gameSkillList.map((skill) => {
                    return (
                        <SkillElement key={skill.skillName} skillName={skill.skillName} />
                    );
                })}
            </div>
            <h3 className="text-3xl m-8">Mobile</h3>
            <div className="flex flex-wrap m-8 border-2 rounded-xl">
                {mobileSkillList.map((skill) => {
                    return (
                        <SkillElement key={skill.skillName} skillName={skill.skillName} />
                    );
                })}
            </div>
            <h3 className="text-3xl m-8">Others</h3>
            <div className="flex flex-wrap m-8 border-2 rounded-xl">
                {otherSkillList.map((skill) => {
                    return (
                        <SkillElement key={skill.skillName} skillName={skill.skillName} />
                    );
                })}
            </div>
        </div>
    );
}