type SnsElementProps = {
    imageAlt: string;
    snsSrc: string;
    snsHref: string;
    snsText: string;
}

const SnsElement = (props: SnsElementProps) => {
    const { imageAlt, snsSrc, snsHref, snsText } = props
    return (
        <div>
            <img alt={imageAlt} src={snsSrc}></img>
            <a href={snsHref}><p>{snsText}</p></a>
        </div>
    );
}

export const SnsComponent = () => {
    return (
        <div className="h-screen">
            <h2>SNS</h2>
            
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
    );
}