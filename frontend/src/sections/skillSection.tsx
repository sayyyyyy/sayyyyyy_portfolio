import { TitleComponent } from "../components/titleComponent";
import { SkillElement } from "../components/skillElement";

export const SkillSection = () => {
    const skillList = [
        {skillName: "TypeScript", skillSrc: "images/skills/typescript.png"}
    ]
    return(
        <div id="skill-container" className="">
            <TitleComponent>SKILL</TitleComponent>
            {skillList.map((skill) => {
                return (
                    <SkillElement skillName={skill.skillName} skillSrc={skill.skillSrc}/>
                );
            })}
        </div>
    );
}