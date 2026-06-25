import { Download, FileText, Trophy, CheckCircle2, AlertTriangle } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function Report({ debate }) {
    if (!debate) return <Empty text="No report yet. Run a debate first." />;

    return (
        <div className="h-full grid grid-cols-12 gap-6">
            <section className="col-span-12 panel flex items-center justify-between">
                <div>
                    <p className="text-sm font-bold text-indigo-600">Analytical Report</p>
                    <h2 className="text-3xl font-black text-slate-950 mt-1">
                        Debate Evaluation Summary
                    </h2>
                </div>

                <button className="px-5 py-3 rounded-2xl bg-indigo-600 text-white font-bold flex items-center gap-2 hover:bg-indigo-500">
                    <Download size={18} />
                    Export PDF
                </button>
            </section>

            <section className="col-span-4 panel">
                <p className="text-sm text-slate-500 font-semibold">Topic</p>
                <h3 className="text-xl font-black text-slate-950 mt-2">
                    {debate.topic}
                </h3>
            </section>

            <section className="col-span-4 panel">
                <p className="text-sm text-slate-500 font-semibold">Domain</p>
                <h3 className="text-3xl font-black text-slate-950 mt-2">
                    {debate.mode}
                </h3>
            </section>

            <section className="col-span-4 panel">
                <p className="text-sm text-slate-500 font-semibold">Evaluation Type</p>
                <h3 className="text-3xl font-black text-slate-950 mt-2">
                    NLP-Based
                </h3>
            </section>

            <section className="col-span-6 panel">
                <div className="flex items-center gap-3 mb-4">
                    <FileText className="text-indigo-600" />
                    <h3 className="section-title mb-0">Executive Summary</h3>
                </div>

                {/* <p className="text-block">{debate.summary}</p> */}
                <div className="markdown-content">
                    <ReactMarkdown>{debate.summary}</ReactMarkdown>
                </div>
            </section>

            <section className="col-span-6 panel bg-gradient-to-br from-indigo-50 to-cyan-50">
                <div className="flex items-center gap-3 mb-4">
                    <Trophy className="text-indigo-600" />
                    <h3 className="section-title mb-0">Verdict Analysis</h3>
                </div>

                {/* <p className="text-block">{debate.judge}</p> */}
                <div className="markdown-content">
                    <ReactMarkdown>{debate.judge}</ReactMarkdown>
                </div>
            </section>

            <section className="col-span-6 panel">
                <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="text-green-600" />
                    <h3 className="section-title mb-0">Strength Indicators</h3>
                </div>

                <ul className="space-y-3 text-sm text-slate-600">
                    <li>• Clear argument structure</li>
                    <li>• Balanced comparison of both perspectives</li>
                    <li>• Strong reasoning and final evaluation</li>
                </ul>
            </section>

            <section className="col-span-6 panel">
                <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="text-yellow-600" />
                    <h3 className="section-title mb-0">Improvement Suggestions</h3>
                </div>

                <ul className="space-y-3 text-sm text-slate-600">
                    <li>• Add source-based fact checking</li>
                    <li>• Improve evidence extraction</li>
                    <li>• Add real sentiment and bias scoring model</li>
                </ul>
            </section>
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