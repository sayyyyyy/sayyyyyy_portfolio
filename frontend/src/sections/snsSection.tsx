import { TitleComponent } from "../components/titleComponent";

type SnsElementProps = {
    imageAlt: string;
    snsSrc: string;
    snsHref: string;
    snsText: string;
}

const SnsElement = (props: SnsElementProps) => {
    const { imageAlt, snsSrc, snsHref, snsText } = props
    return (
        <a href={snsHref}>
            <div className="flex p-4">
                <img alt={imageAlt} src={snsSrc} className="w-10 h-10"></img>
                <p className="text-xl pl-4 mt-1">{snsText}</p>
            </div>
        </a>
    );
}

export const SnsSection = () => {
    return (
        <section id="sns-container" className="mt-24">
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