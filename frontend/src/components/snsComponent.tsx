import { TitleComponent } from "./titleComponent";

type SnsElementProps = {
    imageAlt: string;
    snsSrc: string;
    snsHref: string;
    snsText: string;
}

const SnsElement = (props: SnsElementProps) => {
    const { imageAlt, snsSrc, snsHref, snsText } = props
    return (
        <div className="flex">
            <img alt={imageAlt} src={snsSrc} className="w-20 h-20"></img>
            <a href={snsHref}><p>{snsText}</p></a>
        </div>
    );
}

export const SnsComponent = () => {
    return (
        <section id="sns-container" className="h-screen flex flex-col justify-center">
            <TitleComponent>SNS</TitleComponent>
            <div className="flex flex-col justify-center items-center">
                <SnsElement 
                    imageAlt="Twitter icon" 
                    snsSrc="images/twitter_icon.png" 
                    snsHref="https://twitter.com/sayyyyyy46" 
                    snsText="@sayyyyyy46" 
                />
                <SnsElement 
                    imageAlt="Qiita icon" 
                    snsSrc="images/qiita_icon.png" 
                    snsHref="https://qiita.com/sayyyyyy" 
                    snsText="@sayyyyyy" 
                />
                <SnsElement 
                    imageAlt="GitHub icon" 
                    snsSrc="images/github_icon.png" 
                    snsHref="https://github.com/sayyyyyy" 
                    snsText="@sayyyyyy" 
                />
                <SnsElement 
                    imageAlt="Zenn icon" 
                    snsSrc="images/zenn_icon.svg" 
                    snsHref="https://zenn.dev/sayyyyyy" 
                    snsText="@sayyyyyy46" 
                />
            </div>
        </section>
    );
}