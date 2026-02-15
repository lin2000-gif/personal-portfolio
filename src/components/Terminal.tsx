import React, { useState, useEffect, useRef } from 'react';
import { useTerminal, type CommandHistory } from '../context/TerminalContext';
import { useCommand } from '../hooks/useCommand';

const Terminal = () => {
    const { history } = useTerminal();
    const { processCommand } = useCommand();
    const [input, setInput] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    // Initial typing effect state
    const [welcomeText, setWelcomeText] = useState('');

    useEffect(() => {
        const isMobile = window.innerWidth < 600;

        const desktopArt = `
 ____            _                  _           
|  _ \\ _ __ __ _| |_ _   _  __ _ __| |__   __ _ 
| |_) | '__/ _\` | __| | | |/ _\` / __| '_ \\ / _\` |
|  __/| | | (_| | |_| |_| | (_| \\__ \\ | | | (_| |
|_|   |_|  \\__,_|\\__|\\__, |\\__,_|___/_| |_|\\__,_|
                     |___/                       
`;

        const mobileArt = `
 ____  _  __
|  _ \\| |/ /
| |_) | ' / 
|  __/| . \\ 
|_|   |_|\\_\\
`; // "PK" for mobile

        const fullText = isMobile ? mobileArt : desktopArt;

        let i = 0;
        const intervalId = setInterval(() => {
            setWelcomeText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(intervalId);
            }
        }, 1);
        return () => clearInterval(intervalId);
    }, []);


    // Auto-scroll to bottom
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history, welcomeText]);

    // Focus input on click anywhere
    const handleContainerClick = () => {
        inputRef.current?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            processCommand(input);
            setInput('');
        }
        if (e.key === 'ArrowUp') {
            // Future: History navigation
        }
    };

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem' /* Padding for mobile */
        }}>
            {/* Mac Terminal Window */}
            <div style={{
                width: '75%',
                height: '75%',
                maxWidth: '1000px',
                background: 'var(--term-bg)', /* Window bg */
                borderRadius: '12px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                position: 'relative',
                animation: 'popIn 0.3s ease-out'
            }}>
                {/* Title Bar */}
                <div style={{
                    background: '#2d2d2d',
                    padding: '0.8rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: '1px solid #1a1a1a'
                }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', cursor: 'pointer' }}></div>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', cursor: 'pointer' }}></div>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f', cursor: 'pointer' }}></div>
                    </div>
                    <div style={{
                        flex: 1,
                        textAlign: 'center',
                        color: '#999',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                        fontSize: '14px',
                        fontWeight: 500
                    }}>
                        pratyasha — -zsh — 80x24
                    </div>
                </div>

                {/* Terminal Content */}
                <div
                    onClick={handleContainerClick}
                    className="crt-overlay" /* Apply CRT effect here */
                    style={{
                        padding: '2rem',
                        fontFamily: '"Fira Code", monospace',
                        fontSize: '16px',
                        overflowY: 'auto',
                        flex: 1,
                        position: 'relative',
                        zIndex: 1
                    }}
                >
                    {/* ASCII Banner / Welcome Message */}
                    <div style={{ marginBottom: '2rem', whiteSpace: 'pre-wrap', color: 'var(--term-blue)', lineHeight: '1.2' }}>
                        {welcomeText}
                        <div style={{ marginTop: '1rem', color: 'var(--term-text)' }}>
                            Welcome to my portfolio v2.0 <span style={{ color: 'var(--term-dim)' }}>(build 2026.02.15)</span>
                        </div>
                        <div style={{ color: 'var(--term-text)' }}>
                            Type <span style={{ color: 'var(--term-yellow)' }}>help</span> to see available commands.
                        </div>
                    </div>

                    {/* History */}
                    <div>
                        {history.map((item: CommandHistory, index: number) => (
                            <div key={index} style={{ marginBottom: '1rem' }}>
                                <div style={{ marginBottom: '0.2rem' }}>
                                    <span className="terminal-prompt">visitor@pratyasha:~$</span>
                                    <span style={{ color: 'var(--term-yellow)' }}>{item.command}</span>
                                </div>
                                <div style={{ paddingLeft: '0rem' }}>
                                    {item.output}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Line */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span className="terminal-prompt">visitor@pratyasha:~$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="command-input"
                            autoFocus
                            spellCheck="false"
                            autoComplete="off"
                        />
                    </div>
                    <div ref={bottomRef} />
                </div>
            </div>

            <style>{`
                @media (max-width: 600px) {
                    div[style*="width: 75%"] {
                        width: 95% !important;
                        height: 90% !important;
                    }
                    /* Simplified title bar for mobile info */
                }
                @keyframes popIn {
                    0% { transform: scale(0.95); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default Terminal;
