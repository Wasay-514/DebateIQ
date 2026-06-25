// import {
//     BarChart3,
//     BrainCircuit,
//     MessageSquare,
//     Activity,
//     ShieldCheck,
// } from "lucide-react";

// export default function Analytics({ debate }) {
//     if (!debate) return <Empty text="No analytics yet. Run a debate first." />;

//     return (
//         <div className="h-full grid grid-cols-12 gap-6">
//             <Kpi title="Arguments" value={debate.rounds.length * 2} icon={<MessageSquare />} />
//             <Kpi title="Reasoning Score" value="86%" icon={<BrainCircuit />} />
//             <Kpi title="Balance Score" value="78%" icon={<Activity />} />
//             <Kpi title="Bias Review" value="Low" icon={<ShieldCheck />} />

//             <section className="col-span-5 panel">
//                 <h3 className="section-title">Argument Quality Index</h3>

//                 <div className="mt-6 space-y-5">
//                     <Score label="Logic" value={86} />
//                     <Score label="Clarity" value={91} />
//                     <Score label="Evidence" value={74} />
//                     <Score label="Consistency" value={82} />
//                     <Score label="Persuasion" value={79} />
//                 </div>
//             </section>

//             <section className="col-span-4 panel">
//                 <h3 className="section-title">Debate Distribution</h3>

//                 <div className="mt-8 flex items-center justify-center">
//                     <div className="relative h-52 w-52 rounded-full bg conic-gradient flex items-center justify-center">
//                         <div className="h-32 w-32 rounded-full bg-white flex items-center justify-center border border-slate-200">
//                             <div className="text-center">
//                                 <p className="text-sm text-slate-500 font-semibold">Balance</p>
//                                 <h3 className="text-3xl font-black text-slate-950">78%</h3>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-3 mt-6">
//                     <Legend color="bg-indigo-500" label="Advocate" />
//                     <Legend color="bg-cyan-400" label="Challenger" />
//                 </div>
//             </section>

//             <section className="col-span-3 panel">
//                 <h3 className="section-title">Metadata</h3>

//                 <div className="space-y-4 mt-5 text-sm">
//                     <Meta label="Domain" value={debate.mode} />
//                     <Meta label="Style" value={debate.tone} />
//                     <Meta label="Rounds" value={debate.rounds.length} />
//                     <Meta label="Status" value="Completed" />
//                 </div>
//             </section>

//             <section className="col-span-12 panel bg-gradient-to-r from-indigo-50 to-cyan-50">
//                 <div className="flex items-center gap-4">
//                     <div className="h-12 w-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center">
//                         <BarChart3 />
//                     </div>

//                     <div>
//                         <h3 className="text-xl font-black text-slate-950">
//                             Debate Intelligence Summary
//                         </h3>
//                         <p className="text-slate-600 text-sm mt-1">
//                             This dashboard converts generated debate content into measurable
//                             NLP-style indicators including clarity, logic, evidence quality,
//                             consistency and bias review.
//                         </p>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// function Kpi({ title, value, icon }) {
//     return (
//         <div className="col-span-3 panel">
//             <div className="text-indigo-600 mb-3">{icon}</div>
//             <p className="text-sm text-slate-500 font-semibold">{title}</p>
//             <h3 className="text-3xl font-black text-slate-950 mt-1">{value}</h3>
//         </div>
//     );
// }

// function Score({ label, value }) {
//     return (
//         <div>
//             <div className="flex justify-between text-sm mb-2">
//                 <span className="font-semibold text-slate-600">{label}</span>
//                 <span className="font-black text-slate-950">{value}%</span>
//             </div>

//             <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
//                 <div
//                     className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
//                     style={{ width: `${value}%` }}
//                 />
//             </div>
//         </div>
//     );
// }

// function Meta({ label, value }) {
//     return (
//         <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
//             <p className="text-xs text-slate-500 font-semibold">{label}</p>
//             <h4 className="font-black text-slate-950 mt-1">{value}</h4>
//         </div>
//     );
// }

// function Legend({ color, label }) {
//     return (
//         <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
//             <span className={`h-3 w-3 rounded-full ${color}`} />
//             {label}
//         </div>
//     );
// }

// function Empty({ text }) {
//     return (
//         <div className="h-full panel flex items-center justify-center text-slate-500">
//             {text}
//         </div>
//     );
// }

// function getScoreFromText(text = "", base = 70) {
//     let score = base;

//     const length = text.length;

//     if (length > 500) score += 8;
//     if (length > 900) score += 5;
//     if (text.includes("because") || text.includes("therefore")) score += 4;
//     if (text.includes("however") || text.includes("although")) score += 4;
//     if (text.includes("evidence") || text.includes("research")) score += 5;

//     return Math.min(score, 95);
// }


import {
    BarChart3,
    BrainCircuit,
    MessageSquare,
    Activity,
    ShieldCheck,
} from "lucide-react";

export default function Analytics({ debate }) {
    if (!debate) return <Empty text="No analytics yet. Run a debate first." />;

    const proArguments = debate.pro_arguments || [];
    const conArguments = debate.con_arguments || [];
    const judge = debate.judge_feedback || {};
    const scores = debate.scores || {};

    const allText = [
        ...proArguments,
        ...conArguments,
        JSON.stringify(debate.rebuttals || {}),
        JSON.stringify(judge),
    ].join(" ");

    const logicScore = judge.logic_score || getScoreFromText(allText, 72);
    const clarityScore = judge.clarity_score || getScoreFromText(allText, 74);
    const evidenceScore = judge.evidence_score || getScoreFromText(allText, 68);
    const consistencyScore = judge.consistency_score || getScoreFromText(allText, 70);
    const persuasionScore = judge.persuasion_score || getScoreFromText(allText, 69);

    const balanceScore =
        scores.balance_score ||
        getBalanceScore(proArguments.length, conArguments.length);

    const totalArguments = proArguments.length + conArguments.length;

    return (
        <div className="h-full grid grid-cols-12 gap-6">
            <Kpi
                title="Arguments"
                value={totalArguments}
                icon={<MessageSquare />}
            />

            <Kpi
                title="Reasoning Score"
                value={`${logicScore}%`}
                icon={<BrainCircuit />}
            />

            <Kpi
                title="Balance Score"
                value={`${balanceScore}%`}
                icon={<Activity />}
            />

            <Kpi
                title="Bias Review"
                value={judge.bias || "Low"}
                icon={<ShieldCheck />}
            />

            <section className="col-span-5 panel">
                <h3 className="section-title">Argument Quality Index</h3>

                <div className="mt-6 space-y-5">
                    <Score label="Logic" value={logicScore} />
                    <Score label="Clarity" value={clarityScore} />
                    <Score label="Evidence" value={evidenceScore} />
                    <Score label="Consistency" value={consistencyScore} />
                    <Score label="Persuasion" value={persuasionScore} />
                </div>
            </section>

            <section className="col-span-4 panel">
                <h3 className="section-title">Debate Distribution</h3>

                <div className="mt-8 flex items-center justify-center">
                    <div className="relative h-52 w-52 rounded-full bg conic-gradient flex items-center justify-center">
                        <div className="h-32 w-32 rounded-full bg-white flex items-center justify-center border border-slate-200">
                            <div className="text-center">
                                <p className="text-sm text-slate-500 font-semibold">Balance</p>
                                <h3 className="text-3xl font-black text-slate-950">
                                    {balanceScore}%
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                    <Legend color="bg-indigo-500" label="Advocate" />
                    <Legend color="bg-cyan-400" label="Challenger" />
                </div>
            </section>

            <section className="col-span-3 panel">
                <h3 className="section-title">Metadata</h3>

                <div className="space-y-4 mt-5 text-sm">
                    <Meta label="Domain" value={debate.mode || "AI Debate"} />
                    <Meta label="Style" value={debate.debate_style || debate.tone || "Balanced"} />
                    <Meta label="Winner" value={judge.winner || "Pending"} />
                    <Meta label="Status" value="Completed" />
                </div>
            </section>

            <section className="col-span-12 panel bg-gradient-to-r from-indigo-50 to-cyan-50">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center">
                        <BarChart3 />
                    </div>

                    <div>
                        <h3 className="text-xl font-black text-slate-950">
                            Debate Intelligence Summary
                        </h3>
                        <p className="text-slate-600 text-sm mt-1">
                            {judge.overall_summary ||
                                judge.reason ||
                                "This dashboard converts generated debate content into measurable NLP-style indicators including clarity, logic, evidence quality, consistency and bias review."}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

function Kpi({ title, value, icon }) {
    return (
        <div className="col-span-3 panel">
            <div className="text-indigo-600 mb-3">{icon}</div>
            <p className="text-sm text-slate-500 font-semibold">{title}</p>
            <h3 className="text-3xl font-black text-slate-950 mt-1">{value}</h3>
        </div>
    );
}

function Score({ label, value }) {
    return (
        <div>
            <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold text-slate-600">{label}</span>
                <span className="font-black text-slate-950">{value}%</span>
            </div>

            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                    style={{ width: `${value}%` }}
                />
            </div>
        </div>
    );
}

function Meta({ label, value }) {
    return (
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
            <p className="text-xs text-slate-500 font-semibold">{label}</p>
            <h4 className="font-black text-slate-950 mt-1">{value}</h4>
        </div>
    );
}

function Legend({ color, label }) {
    return (
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
            <span className={`h-3 w-3 rounded-full ${color}`} />
            {label}
        </div>
    );
}

function Empty({ text }) {
    return (
        <div className="h-full panel flex items-center justify-center text-slate-500">
            {text}
        </div>
    );
}

function getScoreFromText(text = "", base = 70) {
    let score = base;
    const lowerText = text.toLowerCase();
    const length = text.length;

    if (length > 500) score += 8;
    if (length > 900) score += 5;
    if (lowerText.includes("because") || lowerText.includes("therefore")) score += 4;
    if (lowerText.includes("however") || lowerText.includes("although")) score += 4;
    if (lowerText.includes("evidence") || lowerText.includes("research")) score += 5;

    return Math.min(score, 95);
}

function getBalanceScore(proCount = 0, conCount = 0) {
    const total = proCount + conCount;

    if (total === 0) return 0;

    const difference = Math.abs(proCount - conCount);
    const balance = 100 - Math.round((difference / total) * 100);

    return Math.max(balance, 0);
}