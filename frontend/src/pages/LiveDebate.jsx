import ReactMarkdown from "react-markdown";
import {
    BrainCircuit,
    ShieldCheck,
    Scale,
    Trophy,
} from "lucide-react";

export default function LiveDebate({ debate }) {
    if (!debate) {
        return (
            <div className="panel h-full flex items-center justify-center text-slate-500">
                Run a debate first.
            </div>
        );
    }

    const firstRound = debate.rounds?.[0];

    return (
        <div className="h-full grid grid-cols-12 gap-6">

            {/* HEADER */}

            <section className="col-span-12 panel">
                <p className="text-indigo-600 font-bold text-sm">
                    Debate Intelligence
                </p>

                <h2 className="text-3xl font-black text-slate-950 mt-1">
                    {debate.topic}
                </h2>

                <div className="flex gap-3 mt-4">
                    <Tag text={debate.mode} />
                    <Tag text={debate.tone} />
                    <Tag text={`${debate.rounds.length} Rounds`} />
                </div>
            </section>

            {/* LEFT */}

            <section className="col-span-6 panel">
                <div className="flex items-center justify-between mb-5">
                    <h3 className="font-black text-xl">
                        Advocate Perspective
                    </h3>

                    <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold">
                        Supporting
                    </span>
                </div>

                <div className="markdown-content">
                    <ReactMarkdown>
                        {firstRound?.pro || "No content"}
                    </ReactMarkdown>
                </div>
            </section>

            {/* RIGHT */}

            <section className="col-span-6 panel">
                <div className="flex items-center justify-between mb-5">
                    <h3 className="font-black text-xl">
                        Challenger Perspective
                    </h3>

                    <span className="px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold">
                        Opposing
                    </span>
                </div>

                <div className="markdown-content">
                    <ReactMarkdown>
                        {firstRound?.con || "No content"}
                    </ReactMarkdown>
                </div>
            </section>

            {/* SCORES */}

            <ScoreCard
                title="Logic Score"
                value="86%"
                icon={<BrainCircuit />}
            />

            <ScoreCard
                title="Evidence"
                value="79%"
                icon={<ShieldCheck />}
            />

            <ScoreCard
                title="Balance"
                value="91%"
                icon={<Scale />}
            />

            {/* VERDICT */}

            <section className="col-span-12 panel bg-gradient-to-r from-indigo-50 via-white to-cyan-50">

                <div className="flex gap-4">

                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center">
                        <Trophy />
                    </div>

                    <div className="flex-1">
                        <h3 className="font-black text-2xl text-slate-950">
                            Final Verdict
                        </h3>

                        <div className="markdown-content mt-4">
                            <ReactMarkdown>
                                {debate.judge}
                            </ReactMarkdown>
                        </div>
                    </div>

                </div>

            </section>

        </div>
    );
}

function ScoreCard({ title, value, icon }) {
    return (
        <div className="col-span-4 panel">

            <div className="text-indigo-600 mb-3">
                {icon}
            </div>

            <p className="text-sm text-slate-500 font-semibold">
                {title}
            </p>

            <h3 className="text-4xl font-black text-slate-950 mt-2">
                {value}
            </h3>

            <div className="h-2 bg-slate-100 rounded-full mt-4 overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                    style={{ width: value }}
                />
            </div>

        </div>
    );
}

function Tag({ text }) {
    return (
        <span className="px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-sm font-bold text-slate-700">
            {text}
        </span>
    );
}