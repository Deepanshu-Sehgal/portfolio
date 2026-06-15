"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

const COMMANDS = {
  help: "Available commands: whoami, skills, projects, clear, hire, deploy, color [green|pink|light|dark]",
  whoami: "Deepanshu Sehgal - Full Stack Developer & DevOps Engineer specializing in robust cloud architectures.",
  skills: "MERN Stack, Java, Spring Boot, Docker, Kubernetes, AWS, Jenkins, CI/CD, React, Next.js",
  projects: "1. DevOps CI/CD Pipeline\n2. MERN E-Commerce\n3. NLP Complaint Automation\nType 'clear' to reset.",
  hire: "Excellent choice! Reach out at deepanshusehgal1506@gmail.com",
  deploy: "Initializing deployment sequence...\n[||||||||||] 100%\nSuccessfully deployed Deepanshu to your team!"
};

export default function TerminalSection() {
  const [history, setHistory] = useState([
    { type: "system", content: "DeepanshuOS v1.0.0 (tty1)" },
    { type: "system", content: "Type 'help' to see available commands." }
  ]);
  const [input, setInput] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    let newHistory = [...history, { type: "user", content: `visitor@deepanshu-portfolio:~$ ${cmd}` }];
    
    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    if (cmd.startsWith("color ")) {
      const color = cmd.split(" ")[1];
      if (color === "green") {
        document.documentElement.style.setProperty('--theme-filter', 'hue-rotate(270deg)');
        document.documentElement.style.setProperty('--theme-inverse-filter', 'hue-rotate(-270deg)');
        newHistory.push({ type: "output", content: "Theme updated to Green Matrix mode." });
      } else if (color === "pink") {
        document.documentElement.style.setProperty('--theme-filter', 'hue-rotate(150deg)');
        document.documentElement.style.setProperty('--theme-inverse-filter', 'hue-rotate(-150deg)');
        newHistory.push({ type: "output", content: "Theme updated to Cyberpunk Pink." });
      } else if (color === "light") {
        document.documentElement.style.setProperty('--theme-filter', 'invert(1) hue-rotate(180deg)');
        document.documentElement.style.setProperty('--theme-inverse-filter', 'hue-rotate(-180deg) invert(1)');
        newHistory.push({ type: "output", content: "Theme updated to Light mode. My eyes!" });
      } else if (color === "dark") {
        document.documentElement.style.setProperty('--theme-filter', 'none');
        document.documentElement.style.setProperty('--theme-inverse-filter', 'none');
        newHistory.push({ type: "output", content: "Theme restored to standard Dark Space mode." });
      } else {
        newHistory.push({ type: "error", content: `bash: color: invalid argument '${color}'. Try green, pink, light, or dark.` });
      }
      setHistory(newHistory);
      setInput("");
      return;
    }

    if (COMMANDS[cmd]) {
      newHistory.push({ type: "output", content: COMMANDS[cmd] });
    } else {
      newHistory.push({ type: "error", content: `bash: ${cmd}: command not found` });
    }

    setHistory(newHistory);
    setInput("");
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      if (input.trim() === "") {
        setHistory([...history, { type: "user", content: `visitor@deepanshu-portfolio:~$ ` }]);
        setInput("");
        return;
      }
      executeCommand(input);
    }
  };

  return (
    <section id="terminal" data-aos="fade-up" className="w-full max-w-5xl mx-auto py-12 px-6 sm:px-10 z-10 relative">
      <div className="text-center mb-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500 tracking-tight">
          Interactive Terminal
        </h2>
        <p className="text-gray-400">Run some Linux commands to learn more about me!</p>
        
        {/* Command Hints */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {Object.keys(COMMANDS).filter(cmd => cmd !== "help").map(cmd => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-3 py-1 text-xs font-mono bg-teal-500/10 text-teal-300 border border-teal-500/30 rounded hover:bg-teal-500/20 hover:scale-105 transition-all"
            >
              {cmd}
            </button>
          ))}
          <button
            onClick={() => executeCommand("color green")}
            className="px-3 py-1 text-xs font-mono bg-green-500/10 text-green-400 border border-green-500/30 rounded hover:bg-green-500/20 hover:scale-105 transition-all"
          >
            color green
          </button>
          <button
            onClick={() => executeCommand("color light")}
            className="px-3 py-1 text-xs font-mono bg-white/10 text-white border border-white/30 rounded hover:bg-white/20 hover:scale-105 transition-all"
          >
            color light
          </button>
          <button
            onClick={() => executeCommand("clear")}
            className="px-3 py-1 text-xs font-mono bg-red-500/10 text-red-400 border border-red-500/30 rounded hover:bg-red-500/20 hover:scale-105 transition-all"
          >
            clear
          </button>
        </div>
      </div>

      <div className="flex flex-col bg-[#0a0a0a]/90 backdrop-blur-md border border-teal-500/30 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(20,184,166,0.15)] h-[400px]">
        {/* Header */}
        <div className="flex justify-between items-center bg-[#111] px-4 py-3 border-b border-teal-500/20 select-none">
          <div className="flex gap-2 items-center">
            <TerminalIcon size={16} className="text-teal-400" />
            <span className="text-xs text-gray-400 font-mono tracking-widest">root@deepanshu:~</span>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
        </div>

        {/* Body */}
        <div 
          ref={containerRef}
          className="flex-1 p-4 overflow-y-auto font-mono text-sm sm:text-base space-y-2 custom-scrollbar" 
          onClick={() => document.getElementById("terminal-input-inline").focus()}
        >
          {history.map((line, i) => (
            <div key={i} className={`${line.type === "error" ? "text-red-400" : line.type === "output" ? "text-gray-300" : line.type === "system" ? "text-teal-300/70" : "text-teal-400"} whitespace-pre-wrap`}>
              {line.content}
            </div>
          ))}
          <div className="flex items-center text-teal-400">
            <span className="mr-2">visitor@deepanshu-portfolio:~$</span>
            <input
              id="terminal-input-inline"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent outline-none text-white font-mono"
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
