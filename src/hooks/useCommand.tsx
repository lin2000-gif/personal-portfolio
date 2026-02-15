import { useTerminal } from '../context/TerminalContext';
import { portfolioData } from '../data';

export const useCommand = () => {
    const { pushToHistory, clearHistory } = useTerminal();

    const processCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();

        if (!trimmedCmd) {
            pushToHistory('', null);
            return;
        }

        if (trimmedCmd === 'clear' || trimmedCmd === 'cls') {
            clearHistory();
            return;
        }

        let output;

        switch (trimmedCmd) {
            case 'help':
                output = (
                    <div style={{ color: 'var(--term-text)' }}>
                        <div>Available commands:</div>
                        <div style={{ paddingLeft: '20px', marginTop: '5px' }}>
                            <span style={{ color: 'var(--term-yellow)' }}>about</span>      - Who am I?
                        </div>
                        <div style={{ paddingLeft: '20px' }}>
                            <span style={{ color: 'var(--term-yellow)' }}>experience</span> - Work history
                        </div>
                        <div style={{ paddingLeft: '20px' }}>
                            <span style={{ color: 'var(--term-yellow)' }}>education</span>  - Academic background
                        </div>
                        <div style={{ paddingLeft: '20px' }}>
                            <span style={{ color: 'var(--term-yellow)' }}>skills</span>     - Technical skills
                        </div>
                        <div style={{ paddingLeft: '20px' }}>
                            <span style={{ color: 'var(--term-yellow)' }}>contact</span>    - Get in touch
                        </div>
                        <div style={{ paddingLeft: '20px' }}>
                            <span style={{ color: 'var(--term-yellow)' }}>clear</span>      - Clear terminal
                        </div>
                    </div>
                );
                break;

            case 'about':
                const { personal } = portfolioData;
                output = (
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '10px', marginBottom: '10px' }}>
                        <pre style={{
                            fontFamily: 'monospace',
                            lineHeight: '1.2',
                            color: 'var(--term-cursor)',
                            margin: 0
                        }}>
                            {`
    .--.
   |o_o |  <-- ${personal.name}
   |:_/ |      ${personal.role}
  //   \\ \\     ${personal.location}
 (|     | )
/'\\_   _/\`\\
\\___)=(___/
`}
                        </pre>
                        <div>
                            <div style={{ color: 'var(--term-blue)', fontWeight: 'bold' }}>{personal.name}</div>
                            <div style={{ color: 'var(--term-purple)' }}>{personal.role} @ {personal.company}</div>
                            <div style={{ color: 'var(--term-text)', marginTop: '5px', maxWidth: '500px' }}>
                                {personal.about}
                            </div>
                            <div style={{ marginTop: '1rem', color: 'var(--term-dim)' }}>
                                Type <span style={{ color: 'var(--term-yellow)' }}>contact</span> to reach me.
                            </div>
                        </div>
                    </div>
                );
                break;

            case 'education':
                output = (
                    <div>
                        {portfolioData.personal.education.map((edu, index) => (
                            <div key={index} style={{ marginBottom: '1.5rem', fontFamily: 'monospace' }}>
                                <div style={{ color: 'var(--term-blue)' }}>
                                    🎓 {edu.institution}
                                </div>
                                <div style={{ marginLeft: '1rem', borderLeft: '2px solid var(--term-blue)', paddingLeft: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
                                    <div style={{ color: 'var(--term-text)' }}>{edu.degree}</div>
                                    <div style={{ color: 'var(--term-yellow)', marginTop: '0.5rem' }}>
                                        {edu.date} | {edu.grade}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );
                break;

            case 'experience':
                output = (
                    <div>
                        {portfolioData.experience.map(exp => (
                            <div key={exp.id} style={{ marginBottom: '1.5rem', fontFamily: 'monospace' }}>
                                <div style={{ color: 'var(--term-purple)' }}>
                                    ╔══ {exp.role} @ {exp.company}
                                </div>
                                <div style={{ marginLeft: '1rem', borderLeft: '2px solid var(--term-purple)', paddingLeft: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
                                    <div style={{ color: 'var(--term-yellow)', marginBottom: '0.5rem' }}>
                                        {exp.date} | {exp.location}
                                    </div>
                                    <div style={{ color: 'var(--term-text)', lineHeight: '1.6' }}>
                                        {exp.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );
                break;

            case 'skills':
                const { skills } = portfolioData.personal;
                output = (
                    <div style={{ border: '1px solid var(--term-green)', padding: '1rem', maxWidth: '100%' }}>
                        <div style={{
                            color: 'var(--term-bg)',
                            background: 'var(--term-green)',
                            padding: '0.2rem 1rem',
                            marginBottom: '1rem',
                            fontWeight: 'bold',
                            display: 'inline-block'
                        }}>
                            TECHNICAL SKILLS
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, auto) 1fr', gap: '0.5rem 1.5rem' }}>
                            <div style={{ color: 'var(--term-green)' }}>Languages:</div>
                            <div>{skills.languages.join(', ')}</div>

                            <div style={{ color: 'var(--term-green)' }}>Technologies:</div>
                            <div>{skills.cloud.join(', ')}</div>

                            <div style={{ color: 'var(--term-green)' }}>Frameworks:</div>
                            <div>{skills.frameworks.join(', ')}</div>
                        </div>
                    </div>
                );
                break;

            case 'contact':
                output = (
                    <div>
                        <div style={{ marginBottom: '1rem' }}>
                            You can reach me via:
                        </div>
                        <div>Email: <a href={portfolioData.personal.social.email} style={{ color: 'var(--term-blue)' }}>{portfolioData.personal.social.email.replace('mailto:', '')}</a></div>
                        <div>LinkedIn: <a href={portfolioData.personal.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--term-blue)' }}>Pratyasha Kalita</a></div>
                    </div>
                );
                break;

            default:
                output = (
                    <div style={{ color: 'var(--term-red)' }}>
                        Command not found: <span style={{ textDecoration: 'underline' }}>{trimmedCmd}</span>. Type <span style={{ color: 'var(--term-yellow)' }}>help</span> to see available commands.
                    </div>
                );
        }

        pushToHistory(cmd, output);
    };

    return { processCommand };
};
