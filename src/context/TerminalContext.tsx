import React, { createContext, useState, useContext, type ReactNode } from 'react';

export type CommandHistory = {
    command: string;
    output: ReactNode;
};

interface TerminalContextType {
    history: CommandHistory[];
    pushToHistory: (command: string, output: ReactNode) => void;
    clearHistory: () => void;
}

const TerminalContext = createContext<TerminalContextType | undefined>(undefined);

export const TerminalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [history, setHistory] = useState<CommandHistory[]>([]);

    const pushToHistory = (command: string, output: ReactNode) => {
        setHistory(prev => [...prev, { command, output }]);
    };

    const clearHistory = () => {
        setHistory([]);
    };

    return (
        <TerminalContext.Provider value={{ history, pushToHistory, clearHistory }}>
            {children}
        </TerminalContext.Provider>
    );
};

export const useTerminal = () => {
    const context = useContext(TerminalContext);
    if (!context) {
        throw new Error('useTerminal must be used within a TerminalProvider');
    }
    return context;
};
