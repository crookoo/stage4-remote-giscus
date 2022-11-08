import React from 'react';
import { createRoot } from 'react-dom/client';
import parse, { Element } from 'html-react-parser';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

function App() {
    return (
        <div className="App">
            {parse('<p id="replace">text</p>', {
                replace: domNode => {
                    if (domNode instanceof Element && domNode.attribs && domNode.attribs.id === 'replace') {
                        return <span>replaced</span>;
                    }
                }
            })
            }
        </div>
    );
}