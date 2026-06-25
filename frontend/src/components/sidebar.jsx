import {
    LayoutDashboard,
    MessageSquare,
    BarChart3,
    FileText,
    Sparkles,
} from "lucide-react";

export default function Sidebar({ page, setPage }) {
    const items = [
        { key: "overview", label: "Overview", icon: LayoutDashboard },
        { key: "debate", label: "Live Debate", icon: MessageSquare },
        { key: "analytics", label: "Analytics", icon: BarChart3 },
        { key: "report", label: "Report", icon: FileText },
    ];

    return (
        <aside className="w-72 h-screen bg-white border-r border-slate-200/80 p-5 flex flex-col">
            <div className="mb-10 flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-indigo-200">
                    <Sparkles size={21} />
                </div>

                <div>
                    <h1 className="text-2xl font-black tracking-tight text-slate-950">
                        DebateIQ
                    </h1>
                    <p className="text-xs text-slate-500">AI Debate Platform</p>
                </div>
            </div>

            <nav className="space-y-2">
                {items.map((item) => {
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.key}
                            onClick={() => setPage(item.key)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${page === item.key
                                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-100"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                                }`}
                        >
                            <Icon size={18} />
                            <span className="text-sm font-bold">{item.label}</span>
                        </button>
                    );
                })}
            </nav>

            <div className="mt-auto rounded-3xl bg-gradient-to-br from-indigo-50 to-cyan-50 border border-indigo-100 p-4">
                <p className="text-sm font-black text-slate-900">System Status</p>
                <p className="text-xs text-green-600 mt-2 font-semibold">
                    ● Gemini Connected
                </p>
                <p className="text-xs text-slate-500 mt-1">
                    React • FastAPI • Agents
                </p>
            </div>
        </aside>
    );
}