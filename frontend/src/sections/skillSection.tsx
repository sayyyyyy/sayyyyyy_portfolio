import { TitleComponent } from "../components/titleComponent";
import { SkillElement } from "../components/skillElement";

export const SkillSection = () => {
    const webFrontendSkillList = [
        {skillName: "HTML"},
        {skillName: "CSS"},
        {skillName: "Sass"},
        {skillName: "Tailwind CSS"},
        {skillName: "JavaScript"},
        {skillName: "TypeScript", skillSrc: "images/skills/typescript.png"},
        {skillName: "Vue.js"},
        {skillName: "Nuxt.js"},
        {skillName: "React"},
        {skillName: "Angular.js"},
    ]
    const webBackEndSkillList = [
        {skillName: "Python"},
        {skillName: "Flask"},
        {skillName: "PHP"},
        {skillName: "C#"},
    ]
    const gameSkillList = [
        {skillName: "Unity"},
    ]

    const mobileSkillList = [
        {skillName: "Dart"},
        {skillName: "Flutter"},
    ]

    const otherSkillList = [
        {skillName: "C"},
        {skillName: "Git"},
        {skillName: "Docker"},
        {skillName: "Solidity"},
    ]

    return(
        <div id="skill-container" className="">
            <TitleComponent>SKILL</TitleComponent>
            <h3>WebFrontEnd</h3>
            <div className="flex">
            {webFrontendSkillList.map((skill) => {
                return (
                    <SkillElement skillName={skill.skillName}/>
                );
            })}
            </div>
            <h3>WebBackEnd</h3>
            <div className="flex">
            {webBackEndSkillList.map((skill) => {
                return (
                    <SkillElement skillName={skill.skillName}/>
                );
            })}
            </div>
            <h3>Game</h3>
            <div className="flex">
            {gameSkillList.map((skill) => {
                return (
                    <SkillElement skillName={skill.skillName}/>
                );
            })}
            </div>
            <h3>Mobile</h3>
            <div className="flex">
            {mobileSkillList.map((skill) => {
                return (
                    <SkillElement skillName={skill.skillName}/>
                );
            })}
            </div>
            <h3>Others</h3>
            <div className="flex">
            {otherSkillList.map((skill) => {
                return (
                    <SkillElement skillName={skill.skillName}/>
                );
            })}
            </div>
        </div>
    );
}