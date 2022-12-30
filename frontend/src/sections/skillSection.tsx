import { TitleComponent } from "../components/titleComponent";
import { SkillElement } from "../components/skillElement";

export const SkillSection = () => {
    const skillList = [
        {skillName: "TypeScript", skillSrc: "images/skills/typescript.png"}
    ]
    return(
        <section id="skill-container" className="h-screen flex flex-col justify-center">
            <TitleComponent>SKILL</TitleComponent>
            {skillList.map((skill) => {
                return (
                    <SkillElement skillName={skill.skillName} skillSrc={skill.skillSrc}/>
                );
            })}
        </section>
    );
}