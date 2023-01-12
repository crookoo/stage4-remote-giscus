import Giscus from "@giscus/react";

interface Props {
    postId: string;
}

export default function App({ postId }: Props) {
    const theme: string = window.localStorage.getItem('darkmode') === 'true' ? 'dark' : 'light';

    const params = new URLSearchParams(window.location.search);
    const urlId = params.get('id');
    const id = postId ? postId : (urlId ? urlId : '0');

    return (
        <>
            <div>{id}</div>
            <div className="comments-container">
                <Giscus
                    id="comments"
                    repo="crookoo/stage4-comments"
                    repoId="R_kgDOIncVKw"
                    category="Announcements"
                    categoryId="DIC_kwDOIncVK84CTEy4"
                    mapping="specific"
                    term={id}
                    reactionsEnabled="1"
                    emitMetadata="0"
                    inputPosition="top"
                    theme={theme}
                    lang="de"
                    loading="eager"
                    strict="1"
                />
            </div>
        </>
    );
}