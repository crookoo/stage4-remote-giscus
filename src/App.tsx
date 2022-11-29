import LocalButton from "./Button";

interface Props {
    postId: string;
}

export default function App(prop: Props) {
    console.log(prop.postId);
    
    return (
        <div id="App2">
            <h1>Basic Host-Remote</h1>
            <h2>App 2: TypeScript</h2>
            <LocalButton />
            <p>{prop.postId}</p>
        </div>
    );
}