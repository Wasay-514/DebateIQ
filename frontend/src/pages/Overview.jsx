// import {
//     Loader2,
//     BarChart3,
//     BrainCircuit,
//     FileText,
//     ShieldCheck,
//     Activity,
//     Gauge,
//     GitBranch,
// } from "lucide-react";

// export default function Overview({
//     topic,
//     setTopic,
//     rounds,
//     setRounds,
//     mode,
//     setMode,
//     tone,
//     setTone,
//     loading,
//     runDebate,
// }) {
//     return (
//         <div className="h-full grid grid-cols-12 gap-6">
//             {/* LEFT HERO */}
//             <section className="col-span-7 panel flex flex-col justify-between">
//                 <div>
//                     <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 px-4 py-2 text-indigo-700 text-sm font-bold">
//                         <BrainCircuit size={16} />
//                         NLP Debate Intelligence
//                     </span>

//                     <h1 className="text-5xl font-black mt-6 leading-[1.05] tracking-tight text-slate-950">
//                         Analyze debates with{" "}
//                         <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
//                             reasoning, scoring & insights
//                         </span>
//                     </h1>

//                     <p className="text-slate-600 mt-4 max-w-2xl text-[15px] leading-relaxed">
//                         DebateIQ turns any topic into a structured debate, evaluates argument quality,
//                         compares both sides, and generates an analytical report using NLP-style scoring.
//                     </p>

//                     {/* Better middle section */}
//                     <div className="mt-8 grid grid-cols-12 gap-4">
//                         {/* <div className="col-span-7 rounded-[28px] border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-5">
//                             <h3 className="text-lg font-black text-slate-950 mb-4">
//                                 Debate Intelligence Pipeline
//                             </h3>

//                             <PipelineStep icon={<FileText />} title="Topic Understanding" text="Extracts context and debate scope" />
//                             <PipelineStep icon={<GitBranch />} title="Argument Generation" text="Creates both supporting and opposing views" />
//                             <PipelineStep icon={<BarChart3 />} title="NLP Scoring" text="Scores clarity, logic and argument strength" />
//                             <PipelineStep icon={<ShieldCheck />} title="Final Evaluation" text="Produces verdict and report summary" />
//                         </div> */}

//                         {/* add here */}
//                         {/* ************************************************************* */}
// {/* 
//                         <div className="col-span-5 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
//                             <h3 className="text-lg font-black text-slate-950 mb-4">
//                                 Live Metrics Preview
//                             </h3>

//                             <Metric label="Logic Score" value="86%" />
//                             <Metric label="Clarity" value="78%" />
//                             <Metric label="Balance" value="91%" />

//                             <div className="mt-5 rounded-2xl bg-slate-50 border border-slate-200 p-4">
//                                 <p className="text-xs text-slate-500 font-semibold">Model Output</p>
//                                 <h4 className="text-slate-950 font-black mt-1">Structured Verdict</h4>
//                             </div>
//                         </div> */}
//                     </div>
//                 </div>

//                 {/* Bottom stats */}
//                 <div className="grid grid-cols-3 gap-4">
//                     <MiniStat icon={<Activity />} title="Evaluation Layers" value="4" />
//                     <MiniStat icon={<Gauge />} title="Scoring Metrics" value="5+" />
//                     <MiniStat icon={<BarChart3 />} title="Report Type" value="Analytical" />
//                 </div>
//             </section>

//             {/* RIGHT SETUP */}
//             <section className="col-span-5 panel">
//                 <h3 className="text-2xl font-black mb-1 text-slate-950">
//                     Create Debate
//                 </h3>
//                 <p className="text-sm text-slate-500 mb-5">
//                     Enter a topic and generate a structured debate analysis.
//                 </p>

//                 <label className="label">Debate Topic</label>
//                 <textarea
//                     value={topic}
//                     onChange={(e) => setTopic(e.target.value)}
//                     placeholder="Example: AI agents vs traditional automation"
//                     className="input h-28 resize-none"
//                 />

//                 <div className="grid grid-cols-2 gap-4 mt-4">
//                     <div>
//                         <label className="label">Rounds</label>
//                         <select
//                             className="input"
//                             value={rounds}
//                             onChange={(e) => setRounds(Number(e.target.value))}
//                         >
//                             <option value={1}>1 Round</option>
//                             <option value={2}>2 Rounds</option>
//                             <option value={3}>3 Rounds</option>
//                         </select>
//                     </div>

//                     <div>
//                         <label className="label">Domain</label>
//                         <select
//                             className="input"
//                             value={mode}
//                             onChange={(e) => setMode(e.target.value)}
//                         >
//                             <option>Academic</option>
//                             <option>Technology</option>
//                             <option>Ethics</option>
//                             <option>Business</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div className="mt-4">
//                     <label className="label">Debate Style</label>
//                     <select
//                         className="input"
//                         value={tone}
//                         onChange={(e) => setTone(e.target.value)}
//                     >
//                         <option>Balanced</option>
//                         <option>Formal</option>
//                         <option>Critical</option>
//                     </select>
//                 </div>

//                 <button
//                     onClick={runDebate}
//                     disabled={loading}
//                     className="w-full mt-6 h-14 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white font-black flex items-center justify-center gap-2 hover:opacity-95 shadow-lg shadow-indigo-100"
//                 >
//                     {loading ? (
//                         <>
//                             <Loader2 className="animate-spin" />
//                             Analyzing Debate...
//                         </>
//                     ) : (
//                         "Generate Debate Analysis"
//                     )}
//                 </button>

//                 <div className="grid grid-cols-2 gap-4 mt-5">
//                     <Feature icon={<BarChart3 />} title="NLP Scores" />
//                     <Feature icon={<ShieldCheck />} title="Bias Review" />
//                     <Feature icon={<Gauge />} title="Logic Metrics" />
//                     <Feature icon={<FileText />} title="Final Report" />
//                 </div>
//             </section>
//         </div>
//     );
// }

// function PipelineStep({ icon, title, text }) {
//     return (
//         <div className="flex items-start gap-3 mb-4 last:mb-0">
//             <div className="h-10 w-10 rounded-2xl bg-white border border-slate-200 text-indigo-600 flex items-center justify-center shadow-sm">
//                 {icon}
//             </div>
//             <div>
//                 <h4 className="font-black text-slate-950 text-sm">{title}</h4>
//                 <p className="text-xs text-slate-500 mt-1">{text}</p>
//             </div>
//         </div>
//     );
// }

// function Metric({ label, value }) {
//     return (
//         <div className="mb-4 last:mb-0">
//             <div className="flex justify-between text-sm mb-2">
//                 <span className="font-semibold text-slate-600">{label}</span>
//                 <span className="font-black text-slate-950">{value}</span>
//             </div>
//             <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
//                 <div
//                     className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
//                     style={{ width: value }}
//                 />
//             </div>
//         </div>
//     );
// }

// function MiniStat({ icon, title, value }) {
//     return (
//         <div className="rounded-3xl bg-white border border-slate-200 p-4 shadow-sm">
//             <div className="text-indigo-600 mb-2">{icon}</div>
//             <p className="text-slate-500 text-sm font-semibold">{title}</p>
//             <h3 className="text-2xl font-black mt-1 text-slate-950">{value}</h3>
//         </div>
//     );
// }

// function Feature({ icon, title }) {
//     return (
//         <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 flex items-center gap-3">
//             <div className="text-indigo-600">{icon}</div>
//             <p className="text-sm font-bold text-slate-700">{title}</p>
//         </div>
//     );
// }

import {
    ArrowRight,
    BarChart3,
    BrainCircuit,
    FileText,
    Gauge,
    Loader2,
    ShieldCheck,
} from "lucide-react";

export default function Overview({
    topic,
    setTopic,
    rounds,
    setRounds,
    mode,
    setMode,
    tone,
    setTone,
    loading,
    runDebate,
}) {
    return (
        <div className="h-full overflow-hidden">
        {/* <div className="min-h-full"> */}
            <div className="h-full grid grid-rows-[auto_1fr_auto] gap-5">
                {/* HERO */}
                <section className="panel">
                    <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 px-4 py-2 text-indigo-700 text-sm font-bold">
                        <BrainCircuit size={16} />
                        NLP Debate Intelligence
                    </span>

                    <h1 
                    className="mt-5 text-5xl font-black tracking-tight leading-[1.05] text-slate-950">
                        {/* Analyze debates with{" "} */}
                        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                            Analyze debates with reasoning, scoring & insights
                        </span>
                    </h1>

                    <p className="mt-4 max-w-4xl text-[15px] leading-relaxed text-slate-600">
                        DebateIQ turns any topic into a structured debate, evaluates
                        argument quality, compares both sides, and generates an analytical
                        report using NLP-style scoring.
                    </p>
                </section>

                {/* CREATE DEBATE FORM */}
                <section className="panel">
                    <div className="flex items-start justify-between gap-6">
                        <div>
                            <h2 className="text-2xl font-black text-slate-950">
                                Create Debate Analysis
                            </h2>
                            <p className="mt-1 text-sm text-slate-500">
                                Enter a topic and generate a structured debate analysis.
                            </p>
                        </div>

                        <button
                            onClick={runDebate}
                            disabled={loading}
                            className="min-w-64 h-12 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white font-black flex items-center justify-center gap-2 hover:opacity-95 shadow-lg shadow-indigo-100"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin" size={18} />
                                    Analyzing...
                                </>
                            ) : (
                                <>
                                    Generate Analysis
                                    <ArrowRight size={18} />
                                </>
                            )}
                        </button>
                    </div>

                    <div className="mt-6 grid grid-cols-12 gap-5">
                        <div className="col-span-12">
                            <label className="label">Debate Topic</label>
                            <textarea
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                placeholder="Example: AI agents vs traditional automation"
                                className="input h-20 resize-none"
                            />
                        </div>

                        <div className="col-span-4">
                            <label className="label">Domain</label>
                            <select
                                className="input"
                                value={mode}
                                onChange={(e) => setMode(e.target.value)}
                            >
                                <option>Academic</option>
                                <option>Technology</option>
                                <option>Ethics</option>
                                <option>Business</option>
                            </select>
                        </div>

                        <div className="col-span-4">
                            <label className="label">Debate Style</label>
                            <select
                                className="input"
                                value={tone}
                                onChange={(e) => setTone(e.target.value)}
                            >
                                <option>Balanced</option>
                                <option>Formal</option>
                                <option>Critical</option>
                            </select>
                        </div>

                        <div className="col-span-4">
                            <label className="label">Number of Rounds</label>
                            <select
                                className="input"
                                value={rounds}
                                onChange={(e) => setRounds(Number(e.target.value))}
                            >
                                <option value={1}>1 Round</option>
                                <option value={2}>2 Rounds</option>
                                <option value={3}>3 Rounds</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* METRICS */}
                <section className="grid grid-cols-3 gap-5">
                    <MetricCard
                        icon={<Gauge />}
                        title="Evaluation Layers"
                        value="4"
                        text="Logic, clarity, balance and final verdict."
                    />

                    <MetricCard
                        icon={<BarChart3 />}
                        title="Scoring Metrics"
                        value="5+"
                        text="Argument strength, evidence and consistency."
                    />

                    <MetricCard
                        icon={<FileText />}
                        title="Report Type"
                        value="Analytical"
                        text="Structured summary with verdict insights."
                    />
                </section>
            </div>
        </div>
    );
}

function MetricCard({ icon, title, value, text }) {
    // return (
    //     <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.05)]">
    //         <div className="h-11 w-11 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
    //             {icon}
    //         </div>

    //         <p className="mt-4 text-sm font-bold text-slate-500">{title}</p>
    //         <h3 className="mt-1 text-3xl font-black text-slate-950">{value}</h3>
    //         <p className="mt-2 text-sm text-slate-500">{text}</p>
    //     </div>
    // );
}