
type SkillElementProps = {
    skillName: string;
    skillSrc: string;
}

export const SkillElement = (props: SkillElementProps) => {
    const {skillSrc} = props
    return (
        <img alt="skill image" src={skillSrc} className="w-24"></img>
    );
}