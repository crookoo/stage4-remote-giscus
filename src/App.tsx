import Giscus from "@giscus/react";

interface Props {
    postId: string;
}

export default function App(prop: Props) {
    console.log(prop.postId);

    return (
        <>
            <div>{prop.postId}</div>
            <div className="comments-container">
                <Giscus
                    id="comments"
                    repo="crookoo/stage4-comments"
                    repoId="R_kgDOIncVKw"
                    category="Announcements"
                    categoryId="DIC_kwDOIncVK84CTEy4"
                    mapping="specific"
                    term={prop.postId}
                    reactionsEnabled="1"
                    emitMetadata="0"
                    inputPosition="top"
                    theme="light"
                    lang="de"
                    loading="eager"
                    strict="1"
                />
            </div>
        </>
    );
}