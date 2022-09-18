import { useEffect, useState } from 'react';

const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
    return theme;
};

function App() {
    const [theme, setTheme] = useState(getStorageTheme());

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    };

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <main>
            <section className="content">
                <button onClick={toggleTheme}>toggle</button>
                <h1>Dark mode</h1>
                <h2>React</h2>
                <article>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs.
                        Design simple views for each state in your application,
                        and React will efficiently update and render just the right components when
                        your data changes.
                    </p>
                </article>
                <article>
                    <h3>Component-Based</h3>
                    <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.
                    </p>
                </article>
                <article>
                    <h3>Learn Once, Write Anywhere</h3>
                    <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
                    </p>
                </article>
            </section>
        </main>
    );
}

export default App;
