// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from './assets/vite.svg'
// // import heroImg from './assets/hero.png'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <section id="center">
// //         <div className="hero">
// //           <img src={heroImg} className="base" width="170" height="179" alt="" />
// //           <img src={reactLogo} className="framework" alt="React logo" />
// //           <img src={viteLogo} className="vite" alt="Vite logo" />
// //         </div>
// //         <div>
// //           <h1>Get started</h1>
// //           <p>
// //             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
// //           </p>
// //         </div>
// //         <button
// //           type="button"
// //           className="counter"
// //           onClick={() => setCount((count) => count + 1)}
// //         >
// //           Count is {count}
// //         </button>
// //       </section>

// //       <div className="ticks"></div>

// //       <section id="next-steps">
// //         <div id="docs">
// //           <svg className="icon" role="presentation" aria-hidden="true">
// //             <use href="/icons.svg#documentation-icon"></use>
// //           </svg>
// //           <h2>Documentation</h2>
// //           <p>Your questions, answered</p>
// //           <ul>
// //             <li>
// //               <a href="https://vite.dev/" target="_blank">
// //                 <img className="logo" src={viteLogo} alt="" />
// //                 Explore Vite
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://react.dev/" target="_blank">
// //                 <img className="button-icon" src={reactLogo} alt="" />
// //                 Learn more
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //         <div id="social">
// //           <svg className="icon" role="presentation" aria-hidden="true">
// //             <use href="/icons.svg#social-icon"></use>
// //           </svg>
// //           <h2>Connect with us</h2>
// //           <p>Join the Vite community</p>
// //           <ul>
// //             <li>
// //               <a href="https://github.com/vitejs/vite" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#github-icon"></use>
// //                 </svg>
// //                 GitHub
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://chat.vite.dev/" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#discord-icon"></use>
// //                 </svg>
// //                 Discord
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://x.com/vite_js" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#x-icon"></use>
// //                 </svg>
// //                 X.com
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://bsky.app/profile/vite.dev" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#bluesky-icon"></use>
// //                 </svg>
// //                 Bluesky
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //       </section>

// //       <div className="ticks"></div>
// //       <section id="spacer"></section>
// //     </>
// //   )
// // }

// // export default App



// // import { useState } from "react";
// // import { startDebate } from "./services/api";
// // import { Brain, Scale, Trophy, Loader2 } from "lucide-react";

// // function App() {
// //   const [topic, setTopic] = useState("");
// //   const [rounds, setRounds] = useState(2);
// //   const [mode, setMode] = useState("Academic");
// //   const [tone, setTone] = useState("Balanced");
// //   const [loading, setLoading] = useState(false);
// //   const [debate, setDebate] = useState(null);

// //   const handleRunDebate = async () => {
// //     if (!topic.trim()) return alert("Please enter a topic");

// //     setLoading(true);
// //     setDebate(null);

// //     try {
// //       const result = await startDebate({
// //         topic,
// //         rounds,
// //         mode,
// //         tone,
// //       });

// //       setDebate(result.data);
// //     } catch (error) {
// //       console.error(error);
// //       alert("Backend/Gemini error. Check terminal.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-slate-950 text-white">
// //       <div className="max-w-7xl mx-auto px-6 py-8">

// //         <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 to-indigo-950 p-8 mb-8">
// //           <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
// //             ⚖️ DebateIQ
// //           </h1>
// //           <p className="text-slate-300 mt-3">
// //             AI Debate Intelligence Platform powered by Multi-Agent Gemini System
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
// //           <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-5">
// //             <label className="text-sm text-slate-400">Debate Topic</label>
// //             <input
// //               value={topic}
// //               onChange={(e) => setTopic(e.target.value)}
// //               placeholder="Example: Should AI replace teachers?"
// //               className="w-full mt-2 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
// //             />
// //           </div>

// //           <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
// //             <label className="text-sm text-slate-400">Rounds</label>
// //             <select
// //               value={rounds}
// //               onChange={(e) => setRounds(Number(e.target.value))}
// //               className="w-full mt-2 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3"
// //             >
// //               <option value={1}>1 Round</option>
// //               <option value={2}>2 Rounds</option>
// //               <option value={3}>3 Rounds</option>
// //             </select>
// //           </div>

// //           <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
// //             <label className="text-sm text-slate-400">Mode</label>
// //             <select
// //               value={mode}
// //               onChange={(e) => setMode(e.target.value)}
// //               className="w-full mt-2 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3"
// //             >
// //               <option>Academic</option>
// //               <option>Casual</option>
// //               <option>Tech</option>
// //               <option>Ethics</option>
// //             </select>
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
// //           <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
// //             <label className="text-sm text-slate-400">Tone</label>
// //             <select
// //               value={tone}
// //               onChange={(e) => setTone(e.target.value)}
// //               className="w-full mt-2 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3"
// //             >
// //               <option>Balanced</option>
// //               <option>Formal</option>
// //               <option>Aggressive</option>
// //             </select>
// //           </div>

// //           <button
// //             onClick={handleRunDebate}
// //             disabled={loading}
// //             className="lg:col-span-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl font-bold text-lg hover:opacity-90 transition flex items-center justify-center gap-2"
// //           >
// //             {loading ? (
// //               <>
// //                 <Loader2 className="animate-spin" />
// //                 Agents Debating...
// //               </>
// //             ) : (
// //               "🚀 Start Debate"
// //             )}
// //           </button>
// //         </div>

// //         {debate && (
// //           <>
// //             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
// //               <Kpi icon={<Brain />} title="Agents" value="5" />
// //               <Kpi icon={<Scale />} title="Rounds" value={debate.rounds.length} />
// //               <Kpi icon={<Trophy />} title="Mode" value={debate.mode} />
// //               <Kpi icon={<Scale />} title="Tone" value={debate.tone} />
// //             </div>

// //             <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
// //               <h2 className="text-2xl font-bold mb-3">🎙 Moderator Opening</h2>
// //               <p className="text-slate-300 whitespace-pre-line">{debate.moderator}</p>
// //             </section>

// //             {debate.rounds.map((item) => (
// //               <div key={item.round} className="mb-8">
// //                 <h2 className="text-2xl font-bold mb-4">Round {item.round}</h2>

// //                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //                   <DebateCard title="🟢 PRO Agent" text={item.pro} color="green" />
// //                   <DebateCard title="🔴 CON Agent" text={item.con} color="red" />
// //                 </div>
// //               </div>
// //             ))}

// //             <section className="bg-yellow-950/40 border border-yellow-600 rounded-2xl p-6 mb-8">
// //               <h2 className="text-2xl font-bold mb-3">⚖️ Judge Result</h2>
// //               <p className="text-slate-200 whitespace-pre-line">{debate.judge}</p>
// //             </section>

// //             <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
// //               <h2 className="text-2xl font-bold mb-3">📌 Summary</h2>
// //               <p className="text-slate-300 whitespace-pre-line">{debate.summary}</p>
// //             </section>
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // function Kpi({ icon, title, value }) {
// //   return (
// //     <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
// //       <div className="text-cyan-400 mb-3">{icon}</div>
// //       <p className="text-slate-400 text-sm">{title}</p>
// //       <h3 className="text-3xl font-black">{value}</h3>
// //     </div>
// //   );
// // }

// // function DebateCard({ title, text, color }) {
// //   const border = color === "green" ? "border-green-500" : "border-red-500";

// //   return (
// //     <div className={`bg-slate-900 border ${border} rounded-2xl p-6`}>
// //       <h3 className="text-xl font-bold mb-3">{title}</h3>
// //       <p className="text-slate-300 whitespace-pre-line">{text}</p>
// //     </div>
// //   );
// // }

// // export default App;

// // import { useState } from "react";
// // import { startDebate } from "./services/api";
// // import {
// //   Brain,
// //   Scale,
// //   Trophy,
// //   Loader2,
// //   Sparkles,
// //   MessageSquare,
// //   BarChart3,
// //   FileText,
// // } from "lucide-react";

// // function App() {
// //   const [topic, setTopic] = useState("");
// //   const [rounds, setRounds] = useState(2);
// //   const [mode, setMode] = useState("Academic");
// //   const [tone, setTone] = useState("Balanced");
// //   const [loading, setLoading] = useState(false);
// //   const [debate, setDebate] = useState(null);

// //   const handleRunDebate = async () => {
// //     if (!topic.trim()) return alert("Please enter a debate topic");

// //     setLoading(true);
// //     setDebate(null);

// //     try {
// //       const result = await startDebate({ topic, rounds, mode, tone });
// //       setDebate(result.data);
// //     } catch (error) {
// //       console.error(error);
// //       alert("Backend/Gemini error. Check terminal.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#0B1020] text-white">
// //       <div className="flex">
// //         {/* Sidebar */}
// //         <aside className="hidden lg:flex w-72 min-h-screen border-r border-slate-800 bg-[#0F172A] p-6 flex-col">
// //           <div className="flex items-center gap-3 mb-10">
// //             <div className="h-11 w-11 rounded-2xl bg-indigo-500 flex items-center justify-center">
// //               <Scale />
// //             </div>
// //             <div>
// //               <h1 className="text-xl font-bold">DebateIQ</h1>
// //               <p className="text-xs text-slate-400">AI Debate Platform</p>
// //             </div>
// //           </div>

// //           <nav className="space-y-3 text-slate-300">
// //             <Nav icon={<Sparkles size={18} />} text="Overview" active />
// //             <Nav icon={<MessageSquare size={18} />} text="Live Debate" />
// //             <Nav icon={<BarChart3 size={18} />} text="Analytics" />
// //             <Nav icon={<FileText size={18} />} text="Report" />
// //           </nav>

// //           <div className="mt-auto rounded-2xl bg-slate-900 border border-slate-800 p-4">
// //             <p className="text-sm font-semibold">Project Stack</p>
// //             <p className="text-xs text-slate-400 mt-2">
// //               React • FastAPI • Gemini • NLP Scoring
// //             </p>
// //           </div>
// //         </aside>

// //         {/* Main */}
// //         <main className="flex-1 p-6 lg:p-8">
// //           {/* Header */}
// //           <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-[#111827] to-indigo-950 p-8 mb-8">
// //             <div className="max-w-4xl">
// //               <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-400/20 px-4 py-2 text-sm text-indigo-300 mb-5">
// //                 <Brain size={16} /> Multi-Agent AI System
// //               </span>

// //               <h2 className="text-4xl lg:text-6xl font-black leading-tight">
// //                 AI Debate Intelligence Platform
// //               </h2>

// //               <p className="text-slate-300 mt-4 max-w-2xl">
// //                 Run structured AI debates using Pro, Con, Moderator, Judge, and
// //                 Summary agents. Generate arguments, reasoning, scoring, and
// //                 professional reports.
// //               </p>
// //             </div>
// //           </section>

// //           {/* Setup */}
// //           <section className="grid grid-cols-1 xl:grid-cols-4 gap-5 mb-8">
// //             <div className="xl:col-span-2 card">
// //               <label className="label">Debate Topic</label>
// //               <input
// //                 value={topic}
// //                 onChange={(e) => setTopic(e.target.value)}
// //                 placeholder="Example: Should AI replace teachers?"
// //                 className="input"
// //               />
// //             </div>

// //             <div className="card">
// //               <label className="label">Rounds</label>
// //               <select
// //                 value={rounds}
// //                 onChange={(e) => setRounds(Number(e.target.value))}
// //                 className="input"
// //               >
// //                 <option value={1}>1 Round</option>
// //                 <option value={2}>2 Rounds</option>
// //                 <option value={3}>3 Rounds</option>
// //               </select>
// //             </div>

// //             <div className="card">
// //               <label className="label">Mode</label>
// //               <select
// //                 value={mode}
// //                 onChange={(e) => setMode(e.target.value)}
// //                 className="input"
// //               >
// //                 <option>Academic</option>
// //                 <option>Tech</option>
// //                 <option>Ethics</option>
// //                 <option>Casual</option>
// //               </select>
// //             </div>

// //             <div className="card">
// //               <label className="label">Tone</label>
// //               <select
// //                 value={tone}
// //                 onChange={(e) => setTone(e.target.value)}
// //                 className="input"
// //               >
// //                 <option>Balanced</option>
// //                 <option>Formal</option>
// //                 <option>Aggressive</option>
// //               </select>
// //             </div>

// //             <button
// //               onClick={handleRunDebate}
// //               disabled={loading}
// //               className="xl:col-span-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition font-bold text-lg flex items-center justify-center gap-3 min-h-[86px]"
// //             >
// //               {loading ? (
// //                 <>
// //                   <Loader2 className="animate-spin" />
// //                   Agents are debating...
// //                 </>
// //               ) : (
// //                 "🚀 Start AI Debate"
// //               )}
// //             </button>
// //           </section>

// //           {/* Empty State */}
// //           {!debate && !loading && (
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
// //               <Feature title="Agentic AI" text="Multiple agents collaborate to debate, judge, and summarize." />
// //               <Feature title="Resume Friendly" text="Full-stack AI project with React frontend and FastAPI backend." />
// //               <Feature title="Analytics Ready" text="Can be extended with scoring, charts, history, and exports." />
// //             </div>
// //           )}

// //           {/* Results */}
// //           {debate && (
// //             <>
// //               <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
// //                 <Kpi title="Agents" value="5" icon={<Brain />} />
// //                 <Kpi title="Rounds" value={debate.rounds.length} icon={<Scale />} />
// //                 <Kpi title="Mode" value={debate.mode} icon={<Trophy />} />
// //                 <Kpi title="Tone" value={debate.tone} icon={<Sparkles />} />
// //               </div>

// //               <section className="card mb-8">
// //                 <h3 className="section-title">🎙 Moderator Opening</h3>
// //                 <p className="text-slate-300 whitespace-pre-line">{debate.moderator}</p>
// //               </section>

// //               {debate.rounds.map((item) => (
// //                 <section key={item.round} className="mb-8">
// //                   <h3 className="section-title mb-4">Round {item.round}</h3>

// //                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
// //                     <DebateCard title="🟢 PRO Agent" text={item.pro} type="pro" />
// //                     <DebateCard title="🔴 CON Agent" text={item.con} type="con" />
// //                   </div>
// //                 </section>
// //               ))}

// //               <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
// //                 <div className="card border-yellow-500/40">
// //                   <h3 className="section-title">⚖️ Judge Result</h3>
// //                   <p className="text-slate-300 whitespace-pre-line">{debate.judge}</p>
// //                 </div>

// //                 <div className="card">
// //                   <h3 className="section-title">📌 Debate Summary</h3>
// //                   <p className="text-slate-300 whitespace-pre-line">{debate.summary}</p>
// //                 </div>
// //               </section>
// //             </>
// //           )}
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }

// // function Nav({ icon, text, active }) {
// //   return (
// //     <div
// //       className={`flex items-center gap-3 px-4 py-3 rounded-xl ${
// //         active ? "bg-indigo-600 text-white" : "hover:bg-slate-800"
// //       }`}
// //     >
// //       {icon}
// //       <span>{text}</span>
// //     </div>
// //   );
// // }

// // function Kpi({ title, value, icon }) {
// //   return (
// //     <div className="card">
// //       <div className="text-indigo-400 mb-3">{icon}</div>
// //       <p className="text-sm text-slate-400">{title}</p>
// //       <h3 className="text-3xl font-black mt-1">{value}</h3>
// //     </div>
// //   );
// // }

// // function Feature({ title, text }) {
// //   return (
// //     <div className="card">
// //       <h3 className="text-xl font-bold mb-2">{title}</h3>
// //       <p className="text-slate-400">{text}</p>
// //     </div>
// //   );
// // }

// // function DebateCard({ title, text, type }) {
// //   const color =
// //     type === "pro"
// //       ? "border-green-500/50 bg-green-950/20"
// //       : "border-red-500/50 bg-red-950/20";

// //   return (
// //     <div className={`rounded-2xl border ${color} p-6`}>
// //       <h4 className="text-xl font-bold mb-3">{title}</h4>
// //       <p className="text-slate-300 whitespace-pre-line">{text}</p>
// //     </div>
// //   );
// // }

// // export default App;

// // import { useState } from "react";
// // import {
// //   LayoutDashboard,
// //   MessageSquare,
// //   BarChart3,
// //   FileText,
// // } from "lucide-react";

// // function App() {
// //   const [page, setPage] = useState("overview");

// //   return (
// //     <div className="h-screen flex bg-[#020617] text-white">

// //       {/* SIDEBAR */}
// //       <aside className="w-64 bg-gradient-to-b from-[#0B1220] to-[#0A0F1C] p-6 flex flex-col">

// //         <div className="mb-10">
// //           <h1 className="text-2xl font-bold">DebateIQ</h1>
// //           <p className="text-xs text-slate-400">AI Platform</p>
// //         </div>

// //         <nav className="space-y-2">

// //           <SidebarItem
// //             icon={<LayoutDashboard size={18} />}
// //             text="Overview"
// //             active={page === "overview"}
// //             onClick={() => setPage("overview")}
// //           />

// //           <SidebarItem
// //             icon={<MessageSquare size={18} />}
// //             text="Live Debate"
// //             active={page === "debate"}
// //             onClick={() => setPage("debate")}
// //           />

// //           <SidebarItem
// //             icon={<BarChart3 size={18} />}
// //             text="Analytics"
// //             active={page === "analytics"}
// //             onClick={() => setPage("analytics")}
// //           />

// //           <SidebarItem
// //             icon={<FileText size={18} />}
// //             text="Report"
// //             active={page === "report"}
// //             onClick={() => setPage("report")}
// //           />

// //         </nav>

// //       </aside>

// //       {/* MAIN */}
// //       <main className="flex-1 p-6">
// //         {page === "overview" && <Page title="Overview" />}
// //         {page === "debate" && <Page title="Live Debate" />}
// //         {page === "analytics" && <Page title="Analytics" />}
// //         {page === "report" && <Page title="Report" />}
// //       </main>

// //     </div>
// //   );
// // }

// // function SidebarItem({ icon, text, active, onClick }) {
// //   return (
// //     <button
// //       onClick={onClick}
// //       className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
// //         active
// //           ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
// //           : "text-slate-400 hover:bg-[#111827]"
// //       }`}
// //     >
// //       {icon}
// //       <span className="text-sm font-medium">{text}</span>
// //     </button>
// //   );
// // }

// // function Page({ title }) {
// //   return (
// //     <div className="h-full flex items-center justify-center text-3xl text-slate-400">
// //       {title} Page
// //     </div>
// //   );
// // }

// // export default App;

// // import { useState } from "react";
// // import { startDebate } from "./services/api";
// // import {
// //   LayoutDashboard,
// //   MessageSquare,
// //   BarChart3,
// //   FileText,
// //   Loader2,
// //   Brain,
// //   Scale,
// //   Trophy,
// //   Sparkles,
// // } from "lucide-react";

// // function App() {
// //   const [page, setPage] = useState("overview");
// //   const [topic, setTopic] = useState("");
// //   const [rounds, setRounds] = useState(2);
// //   const [mode, setMode] = useState("Academic");
// //   const [tone, setTone] = useState("Balanced");
// //   const [loading, setLoading] = useState(false);
// //   const [debate, setDebate] = useState(null);

// //   const runDebate = async () => {
// //     if (!topic.trim()) return alert("Enter debate topic");

// //     setLoading(true);

// //     try {
// //       const res = await startDebate({ topic, rounds, mode, tone });
// //       setDebate(res.data);
// //       setPage("debate");
// //     } catch (err) {
// //       console.error(err);
// //       alert("Backend/Gemini error");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="h-screen flex bg-[#020617] text-white overflow-hidden">
// //       <aside className="w-64 bg-[#0b1220] p-4 flex flex-col">
// //         <div className="mb-8 px-2">
// //           <h1 className="text-2xl font-bold">DebateIQ</h1>
// //           <p className="text-xs text-slate-400">AI Debate Platform</p>
// //         </div>

// //         <nav className="space-y-3">
// //           <SidebarItem icon={<LayoutDashboard size={18} />} text="Overview" active={page === "overview"} onClick={() => setPage("overview")} />
// //           <SidebarItem icon={<MessageSquare size={18} />} text="Live Debate" active={page === "debate"} onClick={() => setPage("debate")} />
// //           <SidebarItem icon={<BarChart3 size={18} />} text="Analytics" active={page === "analytics"} onClick={() => setPage("analytics")} />
// //           <SidebarItem icon={<FileText size={18} />} text="Report" active={page === "report"} onClick={() => setPage("report")} />
// //         </nav>

// //         <div className="mt-auto rounded-2xl bg-slate-900 border border-slate-800 p-4">
// //           <p className="text-sm font-semibold">Stack</p>
// //           <p className="text-xs text-slate-400 mt-1">React • FastAPI • Gemini</p>
// //         </div>
// //       </aside>

// //       <main className="flex-1 h-screen p-6 overflow-hidden">
// //         {page === "overview" && (
// //           <Overview
// //             topic={topic}
// //             setTopic={setTopic}
// //             rounds={rounds}
// //             setRounds={setRounds}
// //             mode={mode}
// //             setMode={setMode}
// //             tone={tone}
// //             setTone={setTone}
// //             runDebate={runDebate}
// //             loading={loading}
// //           />
// //         )}

// //         {page === "debate" && <LiveDebate debate={debate} loading={loading} />}
// //         {page === "analytics" && <Analytics debate={debate} />}
// //         {page === "report" && <Report debate={debate} />}
// //       </main>
// //     </div>
// //   );
// // }

// // function SidebarItem({ icon, text, active, onClick }) {
// //   return (
// //     <button
// //       onClick={onClick}
// //       className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
// //         active
// //           ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
// //           : "text-slate-300 hover:bg-slate-800"
// //       }`}
// //     >
// //       {icon}
// //       <span className="text-sm font-medium">{text}</span>
// //     </button>
// //   );
// // }

// // function Overview({ topic, setTopic, rounds, setRounds, mode, setMode, tone, setTone, runDebate, loading }) {
// //   return (
// //     <div className="h-full grid grid-cols-12 gap-5">
// //       <section className="col-span-7 card flex flex-col justify-between bg-gradient-to-br from-slate-900 to-indigo-950">
// //         <div>
// //           <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-400/20 px-4 py-2 text-indigo-300 text-sm">
// //             <Brain size={16} /> Multi-Agent AI System
// //           </div>

// //           <h2 className="text-5xl font-black mt-6 leading-tight">
// //             AI Debate Intelligence Platform
// //           </h2>

// //           <p className="text-slate-300 mt-4 max-w-xl">
// //             Run structured debates using Moderator, Pro, Con, Judge and Summary agents.
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-3 gap-4">
// //           <MiniCard title="Agents" value="5" />
// //           <MiniCard title="Engine" value="Gemini" />
// //           <MiniCard title="Mode" value={mode} />
// //         </div>
// //       </section>

// //       <section className="col-span-5 card">
// //         <h3 className="text-2xl font-bold mb-5">Debate Setup</h3>

// //         <label className="label">Topic</label>
// //         <textarea
// //           value={topic}
// //           onChange={(e) => setTopic(e.target.value)}
// //           placeholder="Should AI replace teachers?"
// //           className="input h-28 resize-none"
// //         />

// //         <div className="grid grid-cols-2 gap-4 mt-4">
// //           <div>
// //             <label className="label">Rounds</label>
// //             <select value={rounds} onChange={(e) => setRounds(Number(e.target.value))} className="input">
// //               <option value={1}>1 Round</option>
// //               <option value={2}>2 Rounds</option>
// //               <option value={3}>3 Rounds</option>
// //             </select>
// //           </div>

// //           <div>
// //             <label className="label">Mode</label>
// //             <select value={mode} onChange={(e) => setMode(e.target.value)} className="input">
// //               <option>Academic</option>
// //               <option>Tech</option>
// //               <option>Ethics</option>
// //               <option>Casual</option>
// //             </select>
// //           </div>
// //         </div>

// //         <div className="mt-4">
// //           <label className="label">Tone</label>
// //           <select value={tone} onChange={(e) => setTone(e.target.value)} className="input">
// //             <option>Balanced</option>
// //             <option>Formal</option>
// //             <option>Aggressive</option>
// //           </select>
// //         </div>

// //         <button
// //           onClick={runDebate}
// //           disabled={loading}
// //           className="w-full mt-6 h-14 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold flex items-center justify-center gap-2"
// //         >
// //           {loading ? <><Loader2 className="animate-spin" /> Running Agents...</> : "🚀 Start Debate"}
// //         </button>
// //       </section>
// //     </div>
// //   );
// // }

// // function LiveDebate({ debate, loading }) {
// //   if (loading) return <Empty text="Agents are debating..." loading />;
// //   if (!debate) return <Empty text="Run a debate first from Overview." />;

// //   const first = debate.rounds?.[0];

// //   return (
// //     <div className="h-full grid grid-cols-12 gap-5">
// //       <section className="col-span-12 grid grid-cols-4 gap-5">
// //         <Kpi icon={<Brain />} label="Agents" value="5" />
// //         <Kpi icon={<Scale />} label="Rounds" value={debate.rounds.length} />
// //         <Kpi icon={<Trophy />} label="Mode" value={debate.mode} />
// //         <Kpi icon={<Sparkles />} label="Tone" value={debate.tone} />
// //       </section>

// //       <section className="col-span-4 card">
// //         <h3 className="panel-title">🎙 Moderator</h3>
// //         <p className="panel-text">{debate.moderator}</p>
// //       </section>

// //       <section className="col-span-4 card border-green-500/40">
// //         <h3 className="panel-title">🟢 PRO Agent</h3>
// //         <p className="panel-text">{first?.pro}</p>
// //       </section>

// //       <section className="col-span-4 card border-red-500/40">
// //         <h3 className="panel-title">🔴 CON Agent</h3>
// //         <p className="panel-text">{first?.con}</p>
// //       </section>

// //       <section className="col-span-12 card border-yellow-500/40">
// //         <h3 className="panel-title">⚖️ Judge Result</h3>
// //         <p className="panel-text">{debate.judge}</p>
// //       </section>
// //     </div>
// //   );
// // }

// // function Analytics({ debate }) {
// //   if (!debate) return <Empty text="No analytics yet. Run a debate first." />;

// //   return (
// //     <div className="h-full grid grid-cols-12 gap-5">
// //       <Kpi label="Total Rounds" value={debate.rounds.length} icon={<Scale />} />
// //       <Kpi label="Arguments" value={debate.rounds.length * 2} icon={<MessageSquare />} />
// //       <Kpi label="Agents Used" value="5" icon={<Brain />} />
// //       <Kpi label="AI Engine" value="Gemini" icon={<Sparkles />} />

// //       <section className="col-span-6 card">
// //         <h3 className="panel-title">Score Overview</h3>
// //         <div className="mt-8 space-y-5">
// //           <Bar label="PRO Strength" value={80} />
// //           <Bar label="CON Strength" value={74} />
// //           <Bar label="Logic Quality" value={86} />
// //           <Bar label="Clarity" value={78} />
// //         </div>
// //       </section>

// //       <section className="col-span-6 card">
// //         <h3 className="panel-title">Debate Metadata</h3>
// //         <div className="mt-6 space-y-4 text-slate-300">
// //           <p><b>Topic:</b> {debate.topic}</p>
// //           <p><b>Mode:</b> {debate.mode}</p>
// //           <p><b>Tone:</b> {debate.tone}</p>
// //           <p><b>Status:</b> Completed</p>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // function Report({ debate }) {
// //   if (!debate) return <Empty text="No report yet. Run a debate first." />;

// //   return (
// //     <div className="h-full grid grid-cols-12 gap-5">
// //       <section className="col-span-4 card">
// //         <h3 className="panel-title">Topic</h3>
// //         <p className="text-slate-300 mt-3">{debate.topic}</p>
// //       </section>

// //       <section className="col-span-4 card">
// //         <h3 className="panel-title">Mode</h3>
// //         <p className="text-3xl font-black mt-3">{debate.mode}</p>
// //       </section>

// //       <section className="col-span-4 card">
// //         <h3 className="panel-title">Rounds</h3>
// //         <p className="text-3xl font-black mt-3">{debate.rounds.length}</p>
// //       </section>

// //       <section className="col-span-6 card">
// //         <h3 className="panel-title">📌 Summary</h3>
// //         <p className="panel-text">{debate.summary}</p>
// //       </section>

// //       <section className="col-span-6 card border-yellow-500/40">
// //         <h3 className="panel-title">⚖️ Final Judgement</h3>
// //         <p className="panel-text">{debate.judge}</p>
// //       </section>
// //     </div>
// //   );
// // }

// // function Kpi({ icon, label, value }) {
// //   return (
// //     <div className="card col-span-3">
// //       <div className="text-indigo-400 mb-2">{icon}</div>
// //       <p className="text-sm text-slate-400">{label}</p>
// //       <h3 className="text-3xl font-black mt-1">{value}</h3>
// //     </div>
// //   );
// // }

// // function MiniCard({ title, value }) {
// //   return (
// //     <div className="rounded-2xl bg-slate-950/60 border border-slate-800 p-4">
// //       <p className="text-slate-400 text-sm">{title}</p>
// //       <h3 className="text-2xl font-bold">{value}</h3>
// //     </div>
// //   );
// // }

// // function Bar({ label, value }) {
// //   return (
// //     <div>
// //       <div className="flex justify-between text-sm mb-2">
// //         <span>{label}</span>
// //         <span>{value}%</span>
// //       </div>
// //       <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
// //         <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500" style={{ width: `${value}%` }} />
// //       </div>
// //     </div>
// //   );
// // }

// // function Empty({ text, loading }) {
// //   return (
// //     <div className="h-full card flex items-center justify-center text-slate-400">
// //       {loading && <Loader2 className="animate-spin mr-3" />}
// //       {text}
// //     </div>
// //   );
// // }

// // export default App;


// // import { useState } from "react";
// // import { startDebate } from "./services/api";
// // import {
// //   Scale,
// //   Settings,
// //   MessageSquare,
// //   FileText,
// //   Loader2,
// //   Brain,
// // } from "lucide-react";

// // function App() {
// //   const [page, setPage] = useState("setup");
// //   const [topic, setTopic] = useState("");
// //   const [rounds, setRounds] = useState(2);
// //   const [mode, setMode] = useState("Academic");
// //   const [tone, setTone] = useState("Balanced");
// //   const [loading, setLoading] = useState(false);
// //   const [debate, setDebate] = useState(null);

// //   const runDebate = async () => {
// //     if (!topic.trim()) return alert("Enter debate topic");

// //     setLoading(true);
// //     setDebate(null);

// //     try {
// //       const res = await startDebate({ topic, rounds, mode, tone });
// //       setDebate(res.data);
// //       setPage("debate");
// //     } catch (err) {
// //       console.error(err);
// //       alert("Backend/Gemini error");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="h-screen overflow-hidden bg-[#0B1020] text-white flex">
// //       <aside className="w-72 h-screen bg-[#0F172A] border-r border-slate-800 p-6 flex flex-col">
// //         <div className="flex items-center gap-3 mb-10">
// //           <div className="w-11 h-11 rounded-xl bg-indigo-600 flex items-center justify-center">
// //             <Scale />
// //           </div>
// //           <div>
// //             <h1 className="text-xl font-bold">DebateIQ</h1>
// //             <p className="text-xs text-slate-400">AI Debate Platform</p>
// //           </div>
// //         </div>

// //         <nav className="space-y-3">
// //           <NavItem
// //             icon={<Settings size={18} />}
// //             text="Setup"
// //             active={page === "setup"}
// //             onClick={() => setPage("setup")}
// //           />
// //           <NavItem
// //             icon={<MessageSquare size={18} />}
// //             text="Debate"
// //             active={page === "debate"}
// //             onClick={() => setPage("debate")}
// //           />
// //           <NavItem
// //             icon={<FileText size={18} />}
// //             text="Report"
// //             active={page === "report"}
// //             onClick={() => setPage("report")}
// //           />
// //         </nav>

// //         <div className="mt-auto rounded-2xl bg-slate-900 border border-slate-800 p-4">
// //           <p className="text-sm font-semibold">Tech Stack</p>
// //           <p className="text-xs text-slate-400 mt-1">
// //             React • FastAPI • Gemini • Agents
// //           </p>
// //         </div>
// //       </aside>

// //       <main className="flex-1 h-screen overflow-hidden p-6">
// //         {page === "setup" && (
// //           <SetupPage
// //             topic={topic}
// //             setTopic={setTopic}
// //             rounds={rounds}
// //             setRounds={setRounds}
// //             mode={mode}
// //             setMode={setMode}
// //             tone={tone}
// //             setTone={setTone}
// //             runDebate={runDebate}
// //             loading={loading}
// //           />
// //         )}

// //         {page === "debate" && <DebatePage debate={debate} loading={loading} />}

// //         {page === "report" && <ReportPage debate={debate} />}
// //       </main>
// //     </div>
// //   );
// // }

// // function SetupPage({
// //   topic,
// //   setTopic,
// //   rounds,
// //   setRounds,
// //   mode,
// //   setMode,
// //   tone,
// //   setTone,
// //   runDebate,
// //   loading,
// // }) {
// //   return (
// //     <div className="h-full grid grid-cols-12 gap-6">
// //       <section className="col-span-7 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 border border-slate-800 p-8 flex flex-col justify-between">
// //         <div>
// //           <span className="inline-flex items-center gap-2 text-sm text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full">
// //             <Brain size={16} /> Multi-Agent AI System
// //           </span>

// //           <h2 className="text-5xl font-black mt-6 leading-tight">
// //             AI Debate Intelligence Platform
// //           </h2>

// //           <p className="text-slate-300 mt-4 max-w-xl">
// //             Create structured debates using Moderator, Pro, Con, Judge and
// //             Summary agents.
// //           </p>
// //         </div>

// //         <button
// //           onClick={runDebate}
// //           disabled={loading}
// //           className="h-16 rounded-2xl bg-indigo-600 hover:bg-indigo-500 font-bold text-lg flex items-center justify-center gap-3"
// //         >
// //           {loading ? (
// //             <>
// //               <Loader2 className="animate-spin" /> Running Agents...
// //             </>
// //           ) : (
// //             "🚀 Start Debate"
// //           )}
// //         </button>
// //       </section>

// //       <section className="col-span-5 rounded-3xl bg-slate-900 border border-slate-800 p-6">
// //         <h3 className="text-2xl font-bold mb-6">Debate Setup</h3>

// //         <label className="label">Topic</label>
// //         <textarea
// //           value={topic}
// //           onChange={(e) => setTopic(e.target.value)}
// //           placeholder="Should AI replace teachers?"
// //           className="input h-32 resize-none"
// //         />

// //         <div className="grid grid-cols-2 gap-4 mt-4">
// //           <div>
// //             <label className="label">Rounds</label>
// //             <select
// //               value={rounds}
// //               onChange={(e) => setRounds(Number(e.target.value))}
// //               className="input"
// //             >
// //               <option value={1}>1 Round</option>
// //               <option value={2}>2 Rounds</option>
// //               <option value={3}>3 Rounds</option>
// //             </select>
// //           </div>

// //           <div>
// //             <label className="label">Mode</label>
// //             <select
// //               value={mode}
// //               onChange={(e) => setMode(e.target.value)}
// //               className="input"
// //             >
// //               <option>Academic</option>
// //               <option>Tech</option>
// //               <option>Ethics</option>
// //               <option>Casual</option>
// //             </select>
// //           </div>
// //         </div>

// //         <div className="mt-4">
// //           <label className="label">Tone</label>
// //           <select
// //             value={tone}
// //             onChange={(e) => setTone(e.target.value)}
// //             className="input"
// //           >
// //             <option>Balanced</option>
// //             <option>Formal</option>
// //             <option>Aggressive</option>
// //           </select>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // function DebatePage({ debate, loading }) {
// //   if (loading) {
// //     return (
// //       <div className="h-full flex items-center justify-center">
// //         <Loader2 className="animate-spin mr-3" />
// //         Agents are debating...
// //       </div>
// //     );
// //   }

// //   if (!debate) {
// //     return <Empty text="Run a debate first from Setup page." />;
// //   }

// //   const firstRound = debate.rounds?.[0];

// //   return (
// //     <div className="h-full grid grid-cols-12 gap-6">
// //       <section className="col-span-4 card">
// //         <h3 className="text-xl font-bold mb-3">🎙 Moderator</h3>
// //         <p className="text-slate-300 text-sm">{debate.moderator}</p>
// //       </section>

// //       <section className="col-span-4 card">
// //         <h3 className="text-xl font-bold mb-3">🟢 PRO Agent</h3>
// //         <p className="text-slate-300 text-sm">{firstRound?.pro}</p>
// //       </section>

// //       <section className="col-span-4 card">
// //         <h3 className="text-xl font-bold mb-3">🔴 CON Agent</h3>
// //         <p className="text-slate-300 text-sm">{firstRound?.con}</p>
// //       </section>

// //       <section className="col-span-12 card">
// //         <h3 className="text-xl font-bold mb-3">⚖️ Judge Result</h3>
// //         <p className="text-slate-300 text-sm">{debate.judge}</p>
// //       </section>
// //     </div>
// //   );
// // }

// // function ReportPage({ debate }) {
// //   if (!debate) {
// //     return <Empty text="No report yet. Run a debate first." />;
// //   }

// //   return (
// //     <div className="h-full grid grid-cols-12 gap-6">
// //       <section className="col-span-4 card">
// //         <h3 className="text-xl font-bold">Topic</h3>
// //         <p className="text-slate-300 mt-3">{debate.topic}</p>
// //       </section>

// //       <section className="col-span-4 card">
// //         <h3 className="text-xl font-bold">Mode</h3>
// //         <p className="text-3xl font-black mt-3">{debate.mode}</p>
// //       </section>

// //       <section className="col-span-4 card">
// //         <h3 className="text-xl font-bold">Rounds</h3>
// //         <p className="text-3xl font-black mt-3">{debate.rounds.length}</p>
// //       </section>

// //       <section className="col-span-12 card">
// //         <h3 className="text-xl font-bold mb-3">📌 Summary</h3>
// //         <p className="text-slate-300">{debate.summary}</p>
// //       </section>
// //     </div>
// //   );
// // }

// // function NavItem({ icon, text, active, onClick }) {
// //   return (
// //     <button
// //       onClick={onClick}
// //       className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
// //         active ? "bg-indigo-600 text-white" : "text-slate-400 hover:bg-slate-800"
// //       }`}
// //     >
// //       {icon}
// //       {text}
// //     </button>
// //   );
// // }

// // function Empty({ text }) {
// //   return (
// //     <div className="h-full rounded-3xl border border-slate-800 bg-slate-900 flex items-center justify-center text-slate-400">
// //       {text}
// //     </div>
// //   );
// // }

// // export default App;




// // ....
// // const [page, setPage] = useState("overview");
// // import { useState } from "react";
// // import { startDebate } from "./services/api";
// // import {
// //     Brain,
// //     Scale,
// //     Trophy,
// //     Loader2,
// //     Sparkles,
// //     MessageSquare,
// //     BarChart3,
// //     FileText,
// // } from "lucide-react";

// // function App() {
// //     const [topic, setTopic] = useState("");
// //     const [rounds, setRounds] = useState(2);
// //     const [mode, setMode] = useState("Academic");
// //     const [tone, setTone] = useState("Balanced");
// //     const [loading, setLoading] = useState(false);
// //     const [debate, setDebate] = useState(null);

// //     const handleRunDebate = async () => {
// //         if (!topic.trim()) return alert("Please enter a debate topic");

// //         setLoading(true);
// //         setDebate(null);

// //         try {
// //             const result = await startDebate({ topic, rounds, mode, tone });
// //             setDebate(result.data);
// //         } catch (error) {
// //             console.error(error);
// //             alert("Backend/Gemini error. Check terminal.");
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     return (
// //         <div className="min-h-screen bg-[#0B1020] text-white">
// //             <div className="flex">
// //                 {/* Sidebar */}
// //                 <aside className="hidden lg:flex w-72 min-h-screen border-r border-slate-800 bg-[#0F172A] p-6 flex-col">
// //                     <div className="flex items-center gap-3 mb-10">
// //                         <div className="h-11 w-11 rounded-2xl bg-indigo-500 flex items-center justify-center">
// //                             <Scale />
// //                         </div>
// //                         <div>
// //                             <h1 className="text-xl font-bold">DebateIQ</h1>
// //                             <p className="text-xs text-slate-400">AI Debate Platform</p>
// //                         </div>
// //                     </div>

// //                     <nav className="space-y-3 text-slate-300">
// //                         <Nav icon={<Sparkles size={18} />} text="Overview" active />
// //                         <Nav icon={<MessageSquare size={18} />} text="Live Debate" />
// //                         <Nav icon={<BarChart3 size={18} />} text="Analytics" />
// //                         <Nav icon={<FileText size={18} />} text="Report" />
// //                     </nav>

// //                     <div className="mt-auto rounded-2xl bg-slate-900 border border-slate-800 p-4">
// //                         <p className="text-sm font-semibold">Project Stack</p>
// //                         <p className="text-xs text-slate-400 mt-2">
// //                             React • FastAPI • Gemini • NLP Scoring
// //                         </p>
// //                     </div>
// //                 </aside>

// //                 {/* Main */}
// //                 <main className="flex-1 p-6 lg:p-8">
// //                     {/* Header */}
// //                     <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-[#111827] to-indigo-950 p-8 mb-8">
// //                         <div className="max-w-4xl">
// //                             <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-400/20 px-4 py-2 text-sm text-indigo-300 mb-5">
// //                                 <Brain size={16} /> Multi-Agent AI System
// //                             </span>

// //                             <h2 className="text-4xl lg:text-6xl font-black leading-tight">
// //                                 AI Debate Intelligence Platform
// //                             </h2>

// //                             <p className="text-slate-300 mt-4 max-w-2xl">
// //                                 Run structured AI debates using Pro, Con, Moderator, Judge, and
// //                                 Summary agents. Generate arguments, reasoning, scoring, and
// //                                 professional reports.
// //                             </p>
// //                         </div>
// //                     </section>

// //                     {/* Setup */}
// //                     <section className="grid grid-cols-1 xl:grid-cols-4 gap-5 mb-8">
// //                         <div className="xl:col-span-2 card">
// //                             <label className="label">Debate Topic</label>
// //                             <input
// //                                 value={topic}
// //                                 onChange={(e) => setTopic(e.target.value)}
// //                                 placeholder="Example: Should AI replace teachers?"
// //                                 className="input"
// //                             />
// //                         </div>

// //                         <div className="card">
// //                             <label className="label">Rounds</label>
// //                             <select
// //                                 value={rounds}
// //                                 onChange={(e) => setRounds(Number(e.target.value))}
// //                                 className="input"
// //                             >
// //                                 <option value={1}>1 Round</option>
// //                                 <option value={2}>2 Rounds</option>
// //                                 <option value={3}>3 Rounds</option>
// //                             </select>
// //                         </div>

// //                         <div className="card">
// //                             <label className="label">Mode</label>
// //                             <select
// //                                 value={mode}
// //                                 onChange={(e) => setMode(e.target.value)}
// //                                 className="input"
// //                             >
// //                                 <option>Academic</option>
// //                                 <option>Tech</option>
// //                                 <option>Ethics</option>
// //                                 <option>Casual</option>
// //                             </select>
// //                         </div>

// //                         <div className="card">
// //                             <label className="label">Tone</label>
// //                             <select
// //                                 value={tone}
// //                                 onChange={(e) => setTone(e.target.value)}
// //                                 className="input"
// //                             >
// //                                 <option>Balanced</option>
// //                                 <option>Formal</option>
// //                                 <option>Aggressive</option>
// //                             </select>
// //                         </div>

// //                         <button
// //                             onClick={handleRunDebate}
// //                             disabled={loading}
// //                             className="xl:col-span-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition font-bold text-lg flex items-center justify-center gap-3 min-h-[86px]"
// //                         >
// //                             {loading ? (
// //                                 <>
// //                                     <Loader2 className="animate-spin" />
// //                                     Agents are debating...
// //                                 </>
// //                             ) : (
// //                                 "🚀 Start AI Debate"
// //                             )}
// //                         </button>
// //                     </section>

// //                     {/* Empty State */}
// //                     {!debate && !loading && (
// //                         <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
// //                             <Feature title="Agentic AI" text="Multiple agents collaborate to debate, judge, and summarize." />
// //                             <Feature title="Resume Friendly" text="Full-stack AI project with React frontend and FastAPI backend." />
// //                             <Feature title="Analytics Ready" text="Can be extended with scoring, charts, history, and exports." />
// //                         </div>
// //                     )}

// //                     {/* Results */}
// //                     {debate && (
// //                         <>
// //                             <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
// //                                 <Kpi title="Agents" value="5" icon={<Brain />} />
// //                                 <Kpi title="Rounds" value={debate.rounds.length} icon={<Scale />} />
// //                                 <Kpi title="Mode" value={debate.mode} icon={<Trophy />} />
// //                                 <Kpi title="Tone" value={debate.tone} icon={<Sparkles />} />
// //                             </div>

// //                             <section className="card mb-8">
// //                                 <h3 className="section-title">🎙 Moderator Opening</h3>
// //                                 <p className="text-slate-300 whitespace-pre-line">{debate.moderator}</p>
// //                             </section>

// //                             {debate.rounds.map((item) => (
// //                                 <section key={item.round} className="mb-8">
// //                                     <h3 className="section-title mb-4">Round {item.round}</h3>

// //                                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
// //                                         <DebateCard title="🟢 PRO Agent" text={item.pro} type="pro" />
// //                                         <DebateCard title="🔴 CON Agent" text={item.con} type="con" />
// //                                     </div>
// //                                 </section>
// //                             ))}

// //                             <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
// //                                 <div className="card border-yellow-500/40">
// //                                     <h3 className="section-title">⚖️ Judge Result</h3>
// //                                     <p className="text-slate-300 whitespace-pre-line">{debate.judge}</p>
// //                                 </div>

// //                                 <div className="card">
// //                                     <h3 className="section-title">📌 Debate Summary</h3>
// //                                     <p className="text-slate-300 whitespace-pre-line">{debate.summary}</p>
// //                                 </div>
// //                             </section>
// //                         </>
// //                     )}
// //                 </main>
// //             </div>
// //         </div>
// //     );
// // }

// // function Nav({ icon, text, active }) {
// //     return (
// //         <div
// //             className={`flex items-center gap-3 px-4 py-3 rounded-xl ${active ? "bg-indigo-600 text-white" : "hover:bg-slate-800"
// //                 }`}
// //         >
// //             {icon}
// //             <span>{text}</span>
// //         </div>
// //     );
// // }

// // function Kpi({ title, value, icon }) {
// //     return (
// //         <div className="card">
// //             <div className="text-indigo-400 mb-3">{icon}</div>
// //             <p className="text-sm text-slate-400">{title}</p>
// //             <h3 className="text-3xl font-black mt-1">{value}</h3>
// //         </div>
// //     );
// // }

// // function Feature({ title, text }) {
// //     return (
// //         <div className="card">
// //             <h3 className="text-xl font-bold mb-2">{title}</h3>
// //             <p className="text-slate-400">{text}</p>
// //         </div>
// //     );
// // }

// // function DebateCard({ title, text, type }) {
// //     const color =
// //         type === "pro"
// //             ? "border-green-500/50 bg-green-950/20"
// //             : "border-red-500/50 bg-red-950/20";

// //     return (
// //         <div className={`rounded-2xl border ${color} p-6`}>
// //             <h4 className="text-xl font-bold mb-3">{title}</h4>
// //             <p className="text-slate-300 whitespace-pre-line">{text}</p>
// //         </div>
// //     );
// // }

// // export default App;


// // final 
// // import { useState } from "react";

// // import Sidebar from "./components/Sidebar";

// // import Overview from "./pages/Overview";
// // import LiveDebate from "./pages/LiveDebate";
// // import Analytics from "./pages/Analytics";
// // import Report from "./pages/Report";

// // function App() {

// //     const [page, setPage] = useState("overview");

// //     return (
// //         <div className="h-screen bg-[#030712] text-white flex overflow-hidden">

// //             <Sidebar page={page} setPage={setPage} />

// //             <main className="flex-1 p-6 overflow-hidden">

// //                 {page === "overview" && <Overview />}

// //                 {page === "debate" && <LiveDebate />}

// //                 {page === "analytics" && <Analytics />}

// //                 {page === "report" && <Report />}

// //             </main>

// //         </div>
// //     );
// // }

// // export default App;




// // one last
// // import { useState } from "react";
// // import Sidebar from "./components/Sidebar";
// // import Overview from "./pages/Overview";
// // import LiveDebate from "./pages/LiveDebate";
// // import Analytics from "./pages/Analytics";
// // import Report from "./pages/Report";
// // import { startDebate } from "./services/api";

// // export default function App() {
// //     const [page, setPage] = useState("overview");
// //     const [topic, setTopic] = useState("");
// //     const [rounds, setRounds] = useState(2);
// //     const [mode, setMode] = useState("Academic");
// //     const [tone, setTone] = useState("Balanced");
// //     const [loading, setLoading] = useState(false);
// //     const [debate, setDebate] = useState(null);

// //     const runDebate = async () => {
// //         if (!topic.trim()) return alert("Enter debate topic");

// //         setLoading(true);

// //         try {
// //             const res = await startDebate({ topic, rounds, mode, tone });
// //             setDebate(res.data);
// //             setPage("debate");
// //         } catch (err) {
// //             console.error(err);
// //             alert("Backend/Gemini error. Check terminal.");
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     return (
// //         <div className="h-screen overflow-hidden bg-[#030712] text-white flex">
// //             <Sidebar page={page} setPage={setPage} />

// //             <main className="flex-1 h-screen overflow-hidden p-5">
// //                 {page === "overview" && (
// //                     <Overview
// //                         topic={topic}
// //                         setTopic={setTopic}
// //                         rounds={rounds}
// //                         setRounds={setRounds}
// //                         mode={mode}
// //                         setMode={setMode}
// //                         tone={tone}
// //                         setTone={setTone}
// //                         loading={loading}
// //                         runDebate={runDebate}
// //                     />
// //                 )}

// //                 {page === "debate" && (
// //                     <LiveDebate debate={debate} loading={loading} />
// //                 )}

// //                 {page === "analytics" && <Analytics debate={debate} />}

// //                 {page === "report" && <Report debate={debate} />}
// //             </main>
// //         </div>
// //     );
// // }


// // import { useState } from "react";
// // import Sidebar from "./components/Sidebar";
// // import Overview from "./pages/Overview";
// // import LiveDebate from "./pages/LiveDebate";
// // import Analytics from "./pages/Analytics";
// // import Report from "./pages/Report";
// // import { startDebate } from "./services/api";

// // export default function App() {
// //     const [page, setPage] = useState("overview");
// //     const [topic, setTopic] = useState("");
// //     const [rounds, setRounds] = useState(2);
// //     const [mode, setMode] = useState("Academic");
// //     const [tone, setTone] = useState("Balanced");
// //     const [loading, setLoading] = useState(false);
// //     const [debate, setDebate] = useState(null);

// //     const runDebate = async () => {
// //         if (!topic.trim()) return alert("Enter debate topic");

// //         setLoading(true);

// //         try {
// //             const res = await startDebate({ topic, rounds, mode, tone });
// //             setDebate(res.data);
// //             setPage("debate");
// //         } catch (err) {
// //             console.error(err);
// //             alert("Backend/Gemini error. Check terminal.");
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     return (
// //         <div className="h-screen overflow-hidden bg-slate-50 text-slate-950 flex">
// //             <Sidebar page={page} setPage={setPage} />

// //             <main className="flex-1 h-screen overflow-hidden p-5">
// //                 {page === "overview" && (
// //                     <Overview
// //                         topic={topic}
// //                         setTopic={setTopic}
// //                         rounds={rounds}
// //                         setRounds={setRounds}
// //                         mode={mode}
// //                         setMode={setMode}
// //                         tone={tone}
// //                         setTone={setTone}
// //                         loading={loading}
// //                         runDebate={runDebate}
// //                     />
// //                 )}

// //                 {page === "debate" && <LiveDebate debate={debate} loading={loading} />}
// //                 {page === "analytics" && <Analytics debate={debate} />}
// //                 {page === "report" && <Report debate={debate} />}
// //             </main>
// //         </div>
// //     );
// // }

// // import { useState } from "react";
// // import Sidebar from "./components/Sidebar";
// // import Overview from "./pages/Overview";
// // import LiveDebate from "./pages/LiveDebate";
// // import Analytics from "./pages/Analytics";
// // import Report from "./pages/Report";
// // import { startDebate } from "./services/api";

// // export default function App() {
// //     const [page, setPage] = useState("overview");
// //     const [topic, setTopic] = useState("");
// //     const [rounds, setRounds] = useState(2);
// //     const [mode, setMode] = useState("Academic");
// //     const [tone, setTone] = useState("Balanced");
// //     const [loading, setLoading] = useState(false);
// //     const [debate, setDebate] = useState(null);

// //     const runDebate = async () => {
// //         if (!topic.trim()) return alert("Enter debate topic");
// //         setLoading(true);

// //         try {
// //             const res = await startDebate({ topic, rounds, mode, tone });
// //             setDebate(res.data);
// //             setPage("debate");
// //         } catch (err) {
// //             console.error(err);
// //             alert("Backend/Gemini error.");
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     return (
// //         <div className="h-screen overflow-hidden bg-[#f6f7fb] text-slate-950 flex">
// //             <Sidebar page={page} setPage={setPage} />

// //             <main className="flex-1 h-screen overflow-hidden p-6">
// //                 {page === "overview" && (
// //                     <Overview
// //                         topic={topic}
// //                         setTopic={setTopic}
// //                         rounds={rounds}
// //                         setRounds={setRounds}
// //                         mode={mode}
// //                         setMode={setMode}
// //                         tone={tone}
// //                         setTone={setTone}
// //                         loading={loading}
// //                         runDebate={runDebate}
// //                     />
// //                 )}

// //                 {page === "debate" && <LiveDebate debate={debate} loading={loading} />}
// //                 {page === "analytics" && <Analytics debate={debate} />}
// //                 {page === "report" && <Report debate={debate} />}
// //             </main>
// //         </div>
// //     );
// // }


// // import { useState } from "react";
// // import Sidebar from "./components/Sidebar";
// // import Overview from "./pages/Overview";
// // import LiveDebate from "./pages/LiveDebate";
// // import Analytics from "./pages/Analytics";
// // import Report from "./pages/Report";
// // import { startDebate } from "./services/api";

// // export default function App() {
// //     const [page, setPage] = useState("overview");
// //     const [topic, setTopic] = useState("");
// //     const [rounds, setRounds] = useState(2);
// //     const [mode, setMode] = useState("Academic");
// //     const [tone, setTone] = useState("Balanced");
// //     const [loading, setLoading] = useState(false);
// //     const [debate, setDebate] = useState(null);

// //     const runDebate = async () => {
// //         if (!topic.trim()) return alert("Enter debate topic");

// //         setLoading(true);

// //         try {
// //             const res = await startDebate({ topic, rounds, mode, tone });
// //             setDebate(res.data);
// //             setPage("debate");
// //         } catch (err) {
// //             console.error(err);
// //             alert("Backend/Gemini error.");
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     return (
// //         <div className="h-screen overflow-hidden bg-white text-slate-950 flex">
// //             <Sidebar page={page} setPage={setPage} />

// //             <main className="flex-1 h-screen overflow-hidden p-6 bg-white">
// //                 {page === "overview" && (
// //                     <Overview
// //                         topic={topic}
// //                         setTopic={setTopic}
// //                         rounds={rounds}
// //                         setRounds={setRounds}
// //                         mode={mode}
// //                         setMode={setMode}
// //                         tone={tone}
// //                         setTone={setTone}
// //                         loading={loading}
// //                         runDebate={runDebate}
// //                     />
// //                 )}

// //                 {page === "debate" && <LiveDebate debate={debate} loading={loading} />}
// //                 {page === "analytics" && <Analytics debate={debate} />}
// //                 {page === "report" && <Report debate={debate} />}
// //             </main>
// //         </div>
// //     );
// // }

// import { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import Overview from "./pages/Overview";
// import LiveDebate from "./pages/LiveDebate";
// import Analytics from "./pages/Analytics";
// import Report from "./pages/Report";
// import { startDebate } from "./services/api";

// export default function App() {
//     const [page, setPage] = useState("overview");
//     const [topic, setTopic] = useState("");
//     const [rounds, setRounds] = useState(2);
//     const [mode, setMode] = useState("Academic");
//     const [tone, setTone] = useState("Balanced");
//     const [loading, setLoading] = useState(false);
//     const [debate, setDebate] = useState(null);

//     const runDebate = async () => {
//         if (!topic.trim()) return alert("Enter debate topic");

//         setLoading(true);

//         try {
//             const res = await startDebate({ topic, rounds, mode, tone });
//             setDebate(res.data);
//             setPage("debate");
//         } catch (err) {
//             console.error(err);
//             alert("Backend/Gemini error.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="h-screen overflow-hidden bg-[#f8fafc] text-slate-950 flex">
//             <Sidebar page={page} setPage={setPage} />

//             <main className="flex-1 h-screen overflow-y-auto p-6 bg-[radial-gradient(circle_at_top_left,#eef2ff,transparent_35%),linear-gradient(180deg,#ffffff,#f8fafc)]">
//                 {page === "overview" && (
//                     <Overview
//                         topic={topic}
//                         setTopic={setTopic}
//                         rounds={rounds}
//                         setRounds={setRounds}
//                         mode={mode}
//                         setMode={setMode}
//                         tone={tone}
//                         setTone={setTone}
//                         loading={loading}
//                         runDebate={runDebate}
//                     />
//                 )}

//                 {page === "debate" && <LiveDebate debate={debate} loading={loading} />}
//                 {page === "analytics" && <Analytics debate={debate} />}
//                 {page === "report" && <Report debate={debate} />}
//             </main>
//         </div>
//     );
// }

// import { useState } from "react";
// import {
//   Sparkles,
//   LayoutDashboard,
//   MessageSquare,
//   BarChart3,
//   FileText,
//   ArrowRight,
// } from "lucide-react";

// const API_URL = "http://127.0.0.1:8000";

// export default function App() {
//   const [activeTab, setActiveTab] = useState("overview");
//   const [topic, setTopic] = useState("");
//   const [domain, setDomain] = useState("Academic");
//   const [style, setStyle] = useState("balanced");
//   const [rounds, setRounds] = useState("2");
//   const [debate, setDebate] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   async function generateDebate() {
//     if (!topic.trim()) {
//       setError("Please enter a debate topic.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const res = await fetch(`${API_URL}/api/debate/start`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           topic,
//           debate_style: style,
//         }),
//       });

//       if (!res.ok) throw new Error("Backend error");

//       const data = await res.json();
//       setDebate({
//         ...data.data,
//         topic,
//         domain,
//         debate_style: style,
//         rounds,
//       });

//       setActiveTab("live");
//     } catch (err) {
//       setError("Backend connect nahi ho raha. FastAPI running check karo.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="min-h-screen bg-slate-50 flex">
//       <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

//       <main className="flex-1 p-6 overflow-y-auto">
//         {activeTab === "overview" && (
//           <Overview
//             topic={topic}
//             setTopic={setTopic}
//             domain={domain}
//             setDomain={setDomain}
//             style={style}
//             setStyle={setStyle}
//             rounds={rounds}
//             setRounds={setRounds}
//             generateDebate={generateDebate}
//             loading={loading}
//             error={error}
//           />
//         )}

//         {activeTab === "live" && <LiveDebate debate={debate} />}
//         {activeTab === "analytics" && <Analytics debate={debate} />}
//         {activeTab === "report" && <Report debate={debate} />}
//       </main>
//     </div>
//   );
// }

// function Sidebar({ activeTab, setActiveTab }) {
//   const items = [
//     { id: "overview", label: "Overview", icon: <LayoutDashboard size={18} /> },
//     { id: "live", label: "Live Debate", icon: <MessageSquare size={18} /> },
//     { id: "analytics", label: "Analytics", icon: <BarChart3 size={18} /> },
//     { id: "report", label: "Report", icon: <FileText size={18} /> },
//   ];

//   return (
//     <aside className="w-[280px] bg-white border-r border-slate-200 p-4 flex flex-col justify-between">
//       <div>
//         <div className="flex items-center gap-3 mb-10">
//           <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white flex items-center justify-center shadow-lg">
//             <Sparkles />
//           </div>
//           <div>
//             <h1 className="text-2xl font-black text-slate-950">DebateIQ</h1>
//             <p className="text-sm text-slate-500">AI Debate Platform</p>
//           </div>
//         </div>

//         <nav className="space-y-3">
//           {items.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => setActiveTab(item.id)}
//               className={`w-full flex items-center gap-3 px-5 py-3 rounded-2xl font-bold transition ${
//                 activeTab === item.id
//                   ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
//                   : "text-slate-600 hover:bg-slate-100"
//               }`}
//             >
//               {item.icon}
//               {item.label}
//             </button>
//           ))}
//         </nav>
//       </div>

//       <div className="rounded-3xl bg-cyan-50 border border-cyan-100 p-4">
//         <h3 className="font-black text-slate-950">System Status</h3>
//         <p className="text-sm text-green-600 font-bold mt-2">• Groq Connected</p>
//         <p className="text-sm text-slate-500 mt-1">React • FastAPI • LangGraph</p>
//       </div>
//     </aside>
//   );
// }

// function Overview({
//   topic,
//   setTopic,
//   domain,
//   setDomain,
//   style,
//   setStyle,
//   rounds,
//   setRounds,
//   generateDebate,
//   loading,
//   error,
// }) {
//   return (
//     <div className="space-y-6">
//       <section className="bg-white rounded-[28px] border border-slate-200 p-6 shadow-sm">
//         <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 px-4 py-2 text-indigo-700 font-bold text-sm">
//           <Sparkles size={16} /> NLP Debate Intelligence
//         </span>

//         <h1 className="text-5xl font-black mt-6 leading-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
//           Analyze debates with reasoning, scoring & insights
//         </h1>

//         <p className="mt-5 text-slate-600 max-w-4xl">
//           DebateIQ turns any topic into a structured debate, evaluates argument
//           quality, compares both sides, and generates an analytical report using
//           NLP-style scoring.
//         </p>
//       </section>

//       <section className="bg-white rounded-[28px] border border-slate-200 p-6 shadow-sm">
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-2xl font-black text-slate-950">
//               Create Debate Analysis
//             </h2>
//             <p className="text-slate-500 mt-1">
//               Enter a topic and generate a structured debate analysis.
//             </p>
//           </div>

//           <button
//             onClick={generateDebate}
//             disabled={loading}
//             className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 font-black shadow-lg disabled:opacity-60 flex items-center gap-2"
//           >
//             {loading ? "Generating..." : "Generate Analysis"}
//             <ArrowRight size={18} />
//           </button>
//         </div>

//         <label className="block mt-8 text-sm font-bold text-slate-500">
//           Debate Topic
//         </label>

//         <textarea
//           value={topic}
//           onChange={(e) => setTopic(e.target.value)}
//           placeholder="Example: AI agents vs traditional automation"
//           className="mt-3 w-full h-20 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-indigo-500"
//         />

//         {error && (
//           <p className="mt-3 text-sm font-bold text-red-500">{error}</p>
//         )}

//         <div className="grid grid-cols-3 gap-5 mt-8">
//           <SelectBox label="Domain" value={domain} setValue={setDomain} options={["Academic", "Technology", "Business", "Ethics"]} />
//           <SelectBox label="Debate Style" value={style} setValue={setStyle} options={["balanced", "aggressive", "formal"]} />
//           <SelectBox label="Number of Rounds" value={rounds} setValue={setRounds} options={["1", "2", "3"]} />
//         </div>
//       </section>
//     </div>
//   );
// }

// function SelectBox({ label, value, setValue, options }) {
//   return (
//     <div>
//       <label className="text-sm font-bold text-slate-500">{label}</label>
//       <select
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none"
//       >
//         {options.map((item) => (
//           <option key={item} value={item}>{item}</option>
//         ))}
//       </select>
//     </div>
//   );
// }

// function LiveDebate({ debate }) {
//   if (!debate) return <Empty text="No debate yet. Generate analysis first." />;

//   return (
//     <div className="grid grid-cols-2 gap-6">
//       <Panel title="Pro Agent Arguments">
//         {debate.pro_arguments?.map((arg, i) => (
//           <TextCard key={i} text={arg} />
//         ))}
//       </Panel>

//       <Panel title="Con Agent Arguments">
//         {debate.con_arguments?.map((arg, i) => (
//           <TextCard key={i} text={arg} />
//         ))}
//       </Panel>

//       <Panel title="Rebuttals">
//         <pre className="text-sm whitespace-pre-wrap text-slate-600">
//           {JSON.stringify(debate.rebuttals, null, 2)}
//         </pre>
//       </Panel>

//       <Panel title="Judge Feedback">
//         <pre className="text-sm whitespace-pre-wrap text-slate-600">
//           {JSON.stringify(debate.judge_feedback, null, 2)}
//         </pre>
//       </Panel>
//     </div>
//   );
// }

// function Analytics({ debate }) {
//   if (!debate) return <Empty text="No analytics yet. Run a debate first." />;

//   const scores = debate.scores || {};
//   const judge = debate.judge_feedback || {};
//   const pro = scores.pro_score || 0;
//   const con = scores.con_score || 0;
//   const balance = Math.max(0, 100 - Math.abs(pro - con));

//   return (
//     <div className="grid grid-cols-12 gap-6">
//       <Kpi title="Arguments" value={(debate.pro_arguments?.length || 0) + (debate.con_arguments?.length || 0)} />
//       <Kpi title="Pro Score" value={`${pro}%`} />
//       <Kpi title="Con Score" value={`${con}%`} />
//       <Kpi title="Winner" value={judge.winner || "Pending"} />

//       <section className="col-span-6 bg-white rounded-3xl border border-slate-200 p-6">
//         <h3 className="text-xl font-black">Score Comparison</h3>
//         <Score label="Pro Agent" value={pro} />
//         <Score label="Con Agent" value={con} />
//         <Score label="Balance" value={balance} />
//       </section>

//       <section className="col-span-6 bg-white rounded-3xl border border-slate-200 p-6">
//         <h3 className="text-xl font-black">Judge Reasoning</h3>
//         <p className="mt-4 text-slate-600">{judge.reason || judge.overall_summary}</p>
//       </section>
//     </div>
//   );
// }

// function Report({ debate }) {
//   if (!debate) return <Empty text="No report yet. Run a debate first." />;

//   return (
//     <div className="bg-white rounded-3xl border border-slate-200 p-8">
//       <h2 className="text-3xl font-black text-slate-950">Final Debate Report</h2>
//       <p className="text-slate-500 mt-2">Topic: {debate.topic}</p>

//       <div className="mt-8 space-y-6">
//         <ReportSection title="Moderator Plan" data={debate.moderator_plan} />
//         <ReportSection title="Pro Arguments" data={debate.pro_arguments} />
//         <ReportSection title="Con Arguments" data={debate.con_arguments} />
//         <ReportSection title="Rebuttals" data={debate.rebuttals} />
//         <ReportSection title="Judge Feedback" data={debate.judge_feedback} />
//         <ReportSection title="Scores" data={debate.scores} />
//       </div>
//     </div>
//   );
// }

// function Panel({ title, children }) {
//   return (
//     <section className="bg-white rounded-3xl border border-slate-200 p-6">
//       <h3 className="text-xl font-black text-slate-950 mb-4">{title}</h3>
//       {children}
//     </section>
//   );
// }

// function TextCard({ text }) {
//   return (
//     <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 mb-3 text-slate-600">
//       {text}
//     </div>
//   );
// }

// function Kpi({ title, value }) {
//   return (
//     <div className="col-span-3 bg-white rounded-3xl border border-slate-200 p-6">
//       <p className="text-sm text-slate-500 font-bold">{title}</p>
//       <h3 className="text-3xl font-black text-slate-950 mt-2">{value}</h3>
//     </div>
//   );
// }

// function Score({ label, value }) {
//   return (
//     <div className="mt-5">
//       <div className="flex justify-between text-sm font-bold">
//         <span>{label}</span>
//         <span>{value}%</span>
//       </div>
//       <div className="h-3 bg-slate-100 rounded-full mt-2 overflow-hidden">
//         <div
//           className="h-full bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-full"
//           style={{ width: `${value}%` }}
//         />
//       </div>
//     </div>
//   );
// }

// function ReportSection({ title, data }) {
//   return (
//     <div>
//       <h3 className="font-black text-xl mb-3">{title}</h3>
//       <pre className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm whitespace-pre-wrap text-slate-600">
//         {JSON.stringify(data, null, 2)}
//       </pre>
//     </div>
//   );
// }

// function Empty({ text }) {
//   return (
//     <div className="h-full bg-white rounded-3xl border border-slate-200 flex items-center justify-center text-slate-500 p-10">
//       {text}
//     </div>
//   );
// }


import { useState } from "react";
import {
  Sparkles,
  LayoutDashboard,
  MessageSquare,
  BarChart3,
  FileText,
  ArrowRight,
  Trophy,
  BrainCircuit,
  ShieldCheck,
  Activity,
  Loader2,
  Moon,
  Sun,
} from "lucide-react";

const API_URL = "http://127.0.0.1:8000";

export default function App() {
const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [topic, setTopic] = useState("");
  const [domain, setDomain] = useState("Academic");
  const [style, setStyle] = useState("balanced");
  const [rounds, setRounds] = useState("2");
  const [debate, setDebate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState("Preparing agents...");
  const [error, setError] = useState("");

  async function generateDebate() {
    if (!topic.trim()) {
      setError("Please enter a debate topic.");
      return;
    }

    setLoading(true);
    setError("");
    setDebate(null);

    const steps = [
      "Moderator is structuring the debate...",
      "Pro Agent is building arguments...",
      "Con Agent is preparing counterpoints...",
      "Judge Agent is evaluating reasoning...",
      "Generating final analytics...",
    ];

    let index = 0;
    const interval = setInterval(() => {
      setLoadingStep(steps[index % steps.length]);
      index++;
    }, 1200);

    try {
      const res = await fetch(`${API_URL}/api/debate/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, debate_style: style }),
      });

      if (!res.ok) throw new Error("Backend error");

      const data = await res.json();

      setDebate({
        ...data.data,
        topic,
        domain,
        debate_style: style,
        rounds,
      });

      setActiveTab("live");
    } catch {
      setError("Backend connect nahi ho raha. FastAPI running check karo.");
    } finally {
      clearInterval(interval);
      setLoading(false);
      setLoadingStep("Preparing agents...");
    }
  }

  return (
    // <div className="min-h-screen bg-[#f6f8fc] flex text-slate-900">
    <div
  className={`min-h-screen flex transition-colors duration-300 ${
    darkMode ? "dark-theme text-white" : "light-theme text-slate-900"
  }`}
>
      {/* <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} /> */}

<Sidebar
  activeTab={activeTab}
  setActiveTab={setActiveTab}
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>
      <main className="flex-1 p-6 overflow-y-auto">
        {activeTab === "overview" && (
          <Overview
            topic={topic}
            setTopic={setTopic}
            domain={domain}
            setDomain={setDomain}
            style={style}
            setStyle={setStyle}
            rounds={rounds}
            setRounds={setRounds}
            generateDebate={generateDebate}
            loading={loading}
            loadingStep={loadingStep}
            error={error}
            debate={debate}
          />
        )}

        {activeTab === "live" && <LiveDebate debate={debate} loading={loading} />}
        {activeTab === "analytics" && <Analytics debate={debate} />}
        {activeTab === "report" && <Report debate={debate} />}
      </main>
    </div>
  );
}

// function Sidebar({ activeTab, setActiveTab }) {
//   const items = [
//     { id: "overview", label: "Overview", icon: <LayoutDashboard size={18} /> },
//     { id: "live", label: "Live Debate", icon: <MessageSquare size={18} /> },
//     { id: "analytics", label: "Analytics", icon: <BarChart3 size={18} /> },
//     { id: "report", label: "Report", icon: <FileText size={18} /> },
//   ];

//   return (
//     <aside className="w-[282px] bg-white border-r border-slate-200 p-5 flex flex-col justify-between">
//       <div>
//         <div className="flex items-center gap-3 mb-10">
//           <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-indigo-200">
//             <Sparkles />
//           </div>
//           <div>
//             <h1 className="text-2xl font-black">DebateIQ</h1>
//             <p className="text-sm text-slate-500">AI Debate Platform</p>
//           </div>
//         </div>

//         <nav className="space-y-3">
//           {items.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => setActiveTab(item.id)}
//               className={`w-full flex items-center gap-3 px-5 py-3 rounded-2xl font-bold transition ${
//                 activeTab === item.id
//                   ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-100"
//                   : "text-slate-600 hover:bg-slate-100"
//               }`}
//             >
//               {item.icon}
//               {item.label}
//             </button>
//           ))}
//         </nav>
//       </div>

//       <div className="rounded-3xl bg-gradient-to-br from-cyan-50 to-indigo-50 border border-cyan-100 p-4">
//         <h3 className="font-black">System Status</h3>
//         <p className="text-sm text-green-600 font-bold mt-2">● Groq Connected</p>
//         <p className="text-sm text-slate-500 mt-1">LangGraph • FastAPI • React</p>
//       </div>
//     </aside>
//   );
// }


function Sidebar({ activeTab, setActiveTab, darkMode, setDarkMode }) {
  const items = [
    { id: "overview", label: "Overview", icon: <LayoutDashboard size={18} /> },
    { id: "live", label: "Live Debate", icon: <MessageSquare size={18} /> },
    { id: "analytics", label: "Analytics", icon: <BarChart3 size={18} /> },
    { id: "report", label: "Report", icon: <FileText size={18} /> },
  ];

  return (
    <aside className="w-[282px] bg-white/70 backdrop-blur-xl border-r border-slate-200 p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-indigo-200">
            <Sparkles />
          </div>

          <div>
            <h1 className="text-2xl font-black">DebateIQ</h1>
            <p className="text-sm text-slate-500">AI Debate Platform</p>
          </div>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mb-6 w-full flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/60 px-4 py-3 font-bold text-slate-700 hover:bg-slate-100 transition dark-toggle"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <nav className="space-y-3">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-5 py-3 rounded-2xl font-bold transition ${
                activeTab === item.id
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-100"
                  : "text-slate-600 hover:bg-slate-100 nav-muted"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-cyan-50 to-indigo-50 border border-cyan-100 p-4 status-card">
        <h3 className="font-black">System Status</h3>
        <p className="text-sm text-green-600 font-bold mt-2">● Groq Connected</p>
        <p className="text-sm text-slate-500 mt-1">
          LangGraph • FastAPI • React
        </p>
      </div>
    </aside>
  );
}
function Overview(props) {
  return (
    <div className="space-y-6">
      <section className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm">
        <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 px-4 py-2 text-indigo-700 font-bold text-sm">
          <BrainCircuit size={16} /> LangGraph Debate Intelligence
        </span>

        <h1 className="text-5xl font-black mt-6 leading-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
          Analyze debates with reasoning, scoring & insights
        </h1>

        <p className="mt-5 text-slate-600 max-w-4xl">
          DebateIQ turns any topic into a structured multi-agent debate using Moderator,
          Pro, Con, Rebuttal, Judge and Scoring agents.
        </p>
      </section>

      <section className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm">
        <div className="flex items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black">Create Debate Analysis</h2>
            <p className="text-slate-500 mt-1">
              Enter a topic and let LangGraph agents generate a full debate.
            </p>
          </div>

          <button
            onClick={props.generateDebate}
            disabled={props.loading}
            className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 font-black shadow-lg disabled:opacity-60 flex items-center gap-2"
          >
            {props.loading ? (
              <>
                <Loader2 className="animate-spin" size={18} /> Running Agents
              </>
            ) : (
              <>
                Generate Analysis <ArrowRight size={18} />
              </>
            )}
          </button>
        </div>

        <textarea
          value={props.topic}
          onChange={(e) => props.setTopic(e.target.value)}
          placeholder="Example: Should AI agents replace traditional automation?"
          className="mt-7 w-full h-24 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-indigo-500 text-lg"
        />

        {props.loading && (
          <div className="mt-4 rounded-2xl bg-indigo-50 border border-indigo-100 p-4 text-indigo-700 font-bold">
            {props.loadingStep}
          </div>
        )}

        {props.error && (
          <p className="mt-3 text-sm font-bold text-red-500">{props.error}</p>
        )}

        <div className="grid grid-cols-3 gap-5 mt-7">
          <SelectBox label="Domain" value={props.domain} setValue={props.setDomain} options={["Academic", "Technology", "Business", "Ethics"]} />
          <SelectBox label="Debate Style" value={props.style} setValue={props.setStyle} options={["balanced", "aggressive", "formal"]} />
          <SelectBox label="Number of Rounds" value={props.rounds} setValue={props.setRounds} options={["1", "2", "3"]} />
        </div>
      </section>

      <section className="grid grid-cols-4 gap-5">
        <Feature icon={<MessageSquare />} title="Multi-Agent Debate" text="Pro and Con agents debate from both sides." />
        <Feature icon={<ShieldCheck />} title="Judge Review" text="Judge agent evaluates logic and reasoning." />
        <Feature icon={<BarChart3 />} title="Analytics" text="Scores, balance, winner and argument quality." />
        <Feature icon={<FileText />} title="Final Report" text="Structured report for portfolio-ready output." />
      </section>
    </div>
  );
}

function LiveDebate({ debate, loading }) {
  if (loading) return <Empty text="Agents are preparing the debate..." />;
  if (!debate) return <Empty text="No debate yet. Generate analysis first." />;

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white border border-slate-200 p-6">
        <h2 className="text-3xl font-black">Live Debate Room</h2>
        <p className="text-slate-500 mt-2">{debate.topic}</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <DebateColumn title="Advocate Agent" tone="Pro" items={debate.pro_arguments} color="indigo" />
        <DebateColumn title="Challenger Agent" tone="Con" items={debate.con_arguments} color="rose" />
      </div>

      <Panel title="Rebuttal Exchange">
        <pre className="text-sm whitespace-pre-wrap text-slate-600">
          {JSON.stringify(debate.rebuttals, null, 2)}
        </pre>
      </Panel>
    </div>
  );
}

function Analytics({ debate }) {
  if (!debate) return <Empty text="No analytics yet. Run a debate first." />;

  const scores = debate.scores || {};
  const judge = debate.judge_feedback || {};
  const pro = scores.pro_score || 82;
  const con = scores.con_score || 78;
  const balance = Math.max(0, 100 - Math.abs(pro - con));

  return (
    <div className="grid grid-cols-12 gap-6">
      <Kpi title="Total Arguments" value={(debate.pro_arguments?.length || 0) + (debate.con_arguments?.length || 0)} icon={<MessageSquare />} />
      <Kpi title="Pro Score" value={`${pro}%`} icon={<Activity />} />
      <Kpi title="Con Score" value={`${con}%`} icon={<BrainCircuit />} />
      <Kpi title="Winner" value={judge.winner || "Pending"} icon={<Trophy />} />

      <section className="col-span-5 panel">
        <h3 className="section-title">Argument Quality Index</h3>
        <Score label="Logic" value={pro} />
        <Score label="Clarity" value={Math.min(pro + 4, 100)} />
        <Score label="Relevance" value={balance} />
        <Score label="Rebuttal Strength" value={con} />
      </section>

      <section className="col-span-4 panel">
        <h3 className="section-title">Debate Balance</h3>
        <div className="mt-8 flex justify-center">
          <div className="h-52 w-52 rounded-full bg-gradient-to-br from-indigo-600 via-cyan-400 to-purple-500 flex items-center justify-center">
            <div className="h-32 w-32 rounded-full bg-white flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-slate-500 font-bold">Balance</p>
                <h3 className="text-3xl font-black">{balance}%</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="col-span-3 panel">
        <h3 className="section-title">Metadata</h3>
        <Meta label="Style" value={debate.debate_style || "Balanced"} />
        <Meta label="Domain" value={debate.domain || "Academic"} />
        <Meta label="Status" value="Completed" />
      </section>

      <section className="col-span-12 panel bg-gradient-to-r from-indigo-50 to-cyan-50">
        <h3 className="text-xl font-black">Judge Intelligence Summary</h3>
        <p className="text-slate-600 mt-2">
          {judge.reason || judge.overall_summary || "The debate has been evaluated using argument quality, clarity, balance and reasoning strength."}
        </p>
      </section>
    </div>
  );
}

function Report({ debate }) {
  if (!debate) return <Empty text="No report yet. Run a debate first." />;

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white border border-slate-200 p-8">
        <h2 className="text-3xl font-black">Final Debate Report</h2>
        <p className="text-slate-500 mt-2">{debate.topic}</p>
      </div>

      <ReportSection title="Moderator Plan" data={debate.moderator_plan} />
      <ReportSection title="Pro Arguments" data={debate.pro_arguments} />
      <ReportSection title="Con Arguments" data={debate.con_arguments} />
      <ReportSection title="Rebuttals" data={debate.rebuttals} />
      <ReportSection title="Judge Feedback" data={debate.judge_feedback} />
      <ReportSection title="Scores" data={debate.scores} />
    </div>
  );
}

function DebateColumn({ title, tone, items = [], color }) {
  return (
    <section className="rounded-3xl bg-white border border-slate-200 p-6">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-xl font-black">{title}</h3>
        <span className={`text-xs font-black px-3 py-1 rounded-full ${color === "indigo" ? "bg-indigo-50 text-indigo-700" : "bg-rose-50 text-rose-700"}`}>
          {tone}
        </span>
      </div>

      {items.map((item, i) => (
        <div key={i} className="rounded-2xl bg-slate-50 border border-slate-200 p-4 mb-3">
          <p className="text-xs font-black text-slate-400 mb-1">Argument {i + 1}</p>
          <p className="text-slate-700">{item}</p>
        </div>
      ))}
    </section>
  );
}

function SelectBox({ label, value, setValue, options }) {
  return (
    <div>
      <label className="text-sm font-bold text-slate-500">{label}</label>
      <select value={value} onChange={(e) => setValue(e.target.value)} className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none">
        {options.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="rounded-3xl bg-white border border-slate-200 p-5">
      <div className="text-indigo-600 mb-3">{icon}</div>
      <h3 className="font-black">{title}</h3>
      <p className="text-sm text-slate-500 mt-2">{text}</p>
    </div>
  );
}

function Panel({ title, children }) {
  return (
    <section className="panel">
      <h3 className="section-title mb-4">{title}</h3>
      {children}
    </section>
  );
}

function Kpi({ title, value, icon }) {
  return (
    <div className="col-span-3 panel">
      <div className="text-indigo-600 mb-3">{icon}</div>
      <p className="text-sm text-slate-500 font-bold">{title}</p>
      <h3 className="text-3xl font-black mt-1">{value}</h3>
    </div>
  );
}

function Score({ label, value }) {
  return (
    <div className="mt-5">
      <div className="flex justify-between text-sm font-bold">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-3 bg-slate-100 rounded-full mt-2 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-full" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function Meta({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 mt-4">
      <p className="text-xs text-slate-500 font-bold">{label}</p>
      <h4 className="font-black mt-1">{value}</h4>
    </div>
  );
}

function ReportSection({ title, data }) {
  return (
    <div className="rounded-3xl bg-white border border-slate-200 p-6">
      <h3 className="text-xl font-black mb-3">{title}</h3>
      <pre className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm whitespace-pre-wrap text-slate-600">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

function Empty({ text }) {
  return (
    <div className="h-full bg-white rounded-3xl border border-slate-200 flex items-center justify-center text-slate-500 p-10">
      {text}
    </div>
  );
}