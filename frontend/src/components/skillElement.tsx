
type SkillElementProps = {
    skillName: string;
}

export const SkillElement = (props: SkillElementProps) => {
    const {skillName} = props
    return (
        // <img alt="skill image" src={skillSrc} className="w-24"></img>
        <p className="flex items-center justify-center m-2 p-2 bg-zinc-400 rounded-3xl whitespace-nowrap">{skillName}</p>
    );
}