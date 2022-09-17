import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
    const [markdown, setMarkdown] = useState('## Markdown Preview');

    return (
        <main>
            <textarea
                type='input'
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
            ></textarea>

            <section>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </section>
        </main>
    );
}

export default App;
