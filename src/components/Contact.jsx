"use client";

import React, { useState } from "react";
import { Terminal, Lock, Copy, CheckCircle2 } from "lucide-react";

const openPorts = [
  { port: 443, service: "HTTPS (LinkedIn)", href: "https://www.linkedin.com/in/deepanshu-sehgal01/", color: "text-blue-400" },
  { port: 22, service: "SSH (GitHub)", href: "https://github.com/Deepanshu-Sehgal", color: "text-white" },
  { port: 8080, service: "TCP (LeetCode)", href: "https://leetcode.com/u/DeepanshuSehgal112/", color: "text-yellow-500" },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const emailCommand = "ssh deepanshu@sehgal.dev -p 22";

  const handleCopy = () => {
    navigator.clipboard.writeText("deepanshusehgal1506@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacts" className="relative z-10 w-full py-24 px-4 sm:px-8 md:px-16 max-w-5xl mx-auto overflow-hidden">
      
      {/* SSH Connection Terminal */}
      <div className="bg-[#0b0c10] border border-white/10 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative overflow-hidden font-mono mt-10">
        
        {/* Terminal Header */}
        <div className="bg-[#1a1b26] px-5 py-3 border-b border-white/5 flex items-center gap-3 relative">
          <div className="flex gap-2 z-10">
            <div className="w-3.5 h-3.5 rounded-full bg-red-500/80"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-green-500/80"></div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center gap-2 text-xs sm:text-sm text-gray-500 tracking-wider font-semibold pointer-events-none">
            <Lock size={14} className="text-green-500/80" />
            <span>root@secure-server: ~</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 sm:p-10 text-gray-300 space-y-10 relative">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Handshake Sequence */}
          <div className="space-y-2 opacity-80 text-sm sm:text-base">
            <p className="text-teal-400">Initiating secure handshake protocol...</p>
            <p className="text-green-400">[OK] Connection established on port 443</p>
            <p className="text-blue-400">[INFO] RSA key fingerprint recognized.</p>
          </div>

          <div className="py-4 border-l-[3px] border-teal-500/40 pl-5">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3 font-sans tracking-tight">
              Ready to deploy your next project?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
              I am actively looking for new opportunities to build scalable architectures and automate complex pipelines. My network ports are currently open for new connections.
            </p>
          </div>

          {/* Interactive SSH Command */}
          <div className="mt-8">
            <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
              <Terminal size={14} /> Execute to connect
            </div>
            
            <div className="group relative bg-[#111218] border border-white/10 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-teal-500/40 transition-colors shadow-inner">
              
              <div className="flex items-center gap-4 w-full">
                <span className="text-teal-500 font-bold hidden sm:block">$</span>
                <code className="text-teal-300 font-bold text-sm sm:text-lg tracking-wide w-full truncate">
                  {emailCommand}
                </code>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button 
                  onClick={handleCopy}
                  className="flex items-center justify-center p-2.5 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg transition-colors border border-white/10"
                  title="Copy Email Address"
                >
                  {copied ? <CheckCircle2 size={20} className="text-green-500" /> : <Copy size={20} />}
                </button>
                
                <a
                  href="mailto:deepanshusehgal1506@gmail.com"
                  className="flex items-center justify-center gap-2 px-6 py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg transition-all border border-teal-400/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.4)] w-full sm:w-auto"
                >
                  Connect
                </a>
              </div>
            </div>
          </div>

          {/* Open Network Ports (Socials) */}
          <div className="pt-8 mt-8 border-t border-white/5">
             <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-5 flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
               Available Network Ports
             </div>
             
             <div className="flex flex-wrap gap-4">
                {openPorts.map((port, idx) => (
                  <a 
                    key={idx}
                    href={port.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-black/40 border border-white/5 hover:border-white/20 hover:bg-white/5 px-4 py-2.5 rounded-lg transition-all group shadow-sm"
                  >
                    <span className="text-gray-500 text-xs font-bold w-14 text-right tracking-widest group-hover:text-gray-400 transition-colors">PORT {port.port}</span>
                    <span className="w-[2px] h-4 bg-white/10 group-hover:bg-white/30 transition-colors"></span>
                    <span className={`${port.color} text-sm font-bold tracking-wide`}>
                      {port.service}
                    </span>
                  </a>
                ))}
             </div>
          </div>

        </div>
      </div>

      {/* Footer System Logout */}
      <div className="mt-20 text-center font-mono text-gray-500 text-xs sm:text-sm flex flex-col items-center gap-3">
        <div className="opacity-60 bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
          System.exit(0) // Session Terminated Successfully.
        </div>
        <div className="flex items-center gap-3 opacity-40 font-sans tracking-wide mt-2">
          <span>© {new Date().getFullYear()} Deepanshu Sehgal.</span>
          <span>|</span>
          <span>Deployed with <span className="text-red-500">❤️</span> & Coffee</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
