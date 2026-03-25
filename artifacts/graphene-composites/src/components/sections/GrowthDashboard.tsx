import React, { useState } from 'react';
import {
    BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer, Legend, AreaChart, Area, Cell,
    ComposedChart
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

const BLUE = '#185FA5';
const GREEN = '#1D9E75';
const AMBER = '#BA7517';
const RED = '#E24B4A';
const LTGREEN = '#9FE1CB';

const GROWTH_DATA = [
    { year: '2017', revenue: 10, headcount: 12 },
    { year: '2018', revenue: 18, headcount: 22 },
    { year: '2019', revenue: 32, headcount: 38 },
    { year: '2020', revenue: 28, headcount: 42 },
    { year: '2021', revenue: 45, headcount: 60 },
    { year: '2022', revenue: 68, headcount: 85 },
    { year: '2023', revenue: 90, headcount: 110 },
    { year: '2024', revenue: 118, headcount: 132 },
    { year: '2025', revenue: 150, headcount: 150 },
];

const CAPACITY_DATA = [
    { year: '2017', lines: 2, area: 30 },
    { year: '2018', lines: 4, area: 55 },
    { year: '2019', lines: 6, area: 80 },
    { year: '2020', lines: 8, area: 110 },
    { year: '2021', lines: 10, area: 160 },
    { year: '2022', lines: 13, area: 220 },
    { year: '2023', lines: 16, area: 300 },
    { year: '2024', lines: 18, area: 360 },
    { year: '2025', lines: 20, area: 400 },
];

const EXPORT_DATA = [
    { year: '2019', americas: 28, europe: 20, domestic: 10 },
    { year: '2020', americas: 24, europe: 18, domestic: 9 },
    { year: '2021', americas: 38, europe: 30, domestic: 11 },
    { year: '2022', americas: 52, europe: 42, domestic: 12 },
    { year: '2023', americas: 68, europe: 55, domestic: 13 },
    { year: '2024', americas: 88, europe: 70, domestic: 14 },
    { year: '2025', americas: 110, europe: 88, domestic: 15 },
];

const INDUSTRY_DATA = [
    { year: '2020', historical: 0.72, forecast: null },
    { year: '2021', historical: 0.78, forecast: null },
    { year: '2022', historical: 0.90, forecast: null },
    { year: '2023', historical: 1.05, forecast: null },
    { year: '2024', historical: 1.28, forecast: null },
    { year: '2025', historical: 1.34, forecast: 1.34 },
    { year: '2026', historical: null, forecast: 1.47 },
    { year: '2027', historical: null, forecast: 1.60 },
    { year: '2028', historical: null, forecast: 1.74 },
    { year: '2029', historical: null, forecast: 1.87 },
    { year: '2030', historical: null, forecast: 2.0 },
];

type PanelId = 'growth' | 'capacity' | 'exports' | 'industry';

export function GrowthDashboard() {
    const [activePanel, setActivePanel] = useState<PanelId>('growth');

    const tabs = [
        { id: 'growth', label: 'Company Growth' },
        { id: 'capacity', label: 'Manufacturing Scale' },
        { id: 'exports', label: 'Export Footprint' },
        { id: 'industry', label: 'Industry Outlook' },
    ];

    return (
        <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden mb-12">
            <div className="p-6 md:p-10">
                <div className="flex flex-wrap gap-2 mb-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActivePanel(tab.id as PanelId)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activePanel === tab.id
                                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                                    : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activePanel}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activePanel === 'growth' && (
                            <div className="space-y-8">
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                    <MetricCard label="Founded" value="2017" sub="Savli, Gujarat" />
                                    <MetricCard label="Facility Area" value="400K" sub="sq ft campus" />
                                    <MetricCard label="Team Size" value="150+" sub="professionals" />
                                    <MetricCard label="Export Share" value="95%" sub="Americas & Europe" />
                                </div>
                                <div>
                                    <SectionHeader title="Revenue & Workforce Trajectory" subtitle="2017 – 2025" />
                                    <div className="flex gap-6 mb-4 text-xs font-medium text-muted-foreground">
                                        <LegendItem color={BLUE} label="Revenue Index" />
                                        <LegendItem color={GREEN} label="Headcount" />
                                    </div>
                                    <div className="h-[350px] w-full">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <ComposedChart data={GROWTH_DATA}>
                                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                                                <XAxis dataKey="year" fontSize={12} tickLine={false} axisLine={false} />
                                                <YAxis yAxisId="left" orientation="left" fontSize={11} tickLine={false} axisLine={false} label={{ value: 'Revenue Index', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: '#888' } }} />
                                                <YAxis yAxisId="right" orientation="right" fontSize={11} tickLine={false} axisLine={false} label={{ value: 'Headcount', angle: 90, position: 'insideRight', style: { fontSize: 10, fill: '#888' } }} />
                                                <Tooltip
                                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                                                />
                                                <Bar yAxisId="left" dataKey="revenue" fill={BLUE} radius={[4, 4, 0, 0]} barSize={40} />
                                                <Line yAxisId="right" type="monotone" dataKey="headcount" stroke={GREEN} strokeWidth={3} dot={{ r: 4, fill: GREEN, strokeWidth: 2, stroke: '#white' }} />
                                            </ComposedChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activePanel === 'capacity' && (
                            <div className="space-y-8">
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                    <MetricCard label="Pultrusion Lines" value="20" sub="24×7 operations" />
                                    <MetricCard label="Product Lines" value="3" sub="Pultrusion · Moulding · Grating" />
                                    <MetricCard label="QC Stages" value="3" sub="per piece" />
                                    <MetricCard label="Certification" value="ISO" sub="certified facility" />
                                </div>
                                <div>
                                    <SectionHeader title="Pultrusion Line Expansion" subtitle="2017 – 2025" />
                                    <div className="flex gap-6 mb-4 text-xs font-medium text-muted-foreground">
                                        <LegendItem color={BLUE} label="Active Pultrusion Lines" />
                                        <LegendItem color={RED} label="Facility Area (000 sq ft)" />
                                    </div>
                                    <div className="h-[350px] w-full">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <ComposedChart data={CAPACITY_DATA}>
                                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                                                <XAxis dataKey="year" fontSize={12} tickLine={false} axisLine={false} />
                                                <YAxis yAxisId="left" orientation="left" fontSize={11} tickLine={false} axisLine={false} label={{ value: 'Pultrusion Lines', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: '#888' } }} />
                                                <YAxis yAxisId="right" orientation="right" fontSize={11} tickLine={false} axisLine={false} label={{ value: 'Facility (000 sq ft)', angle: 90, position: 'insideRight', style: { fontSize: 10, fill: '#888' } }} />
                                                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                                                <Bar yAxisId="left" dataKey="lines" fill={BLUE} radius={[4, 4, 0, 0]} barSize={40} />
                                                <Line yAxisId="right" type="monotone" dataKey="area" stroke={RED} strokeWidth={3} dot={{ r: 4, fill: RED }} />
                                            </ComposedChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activePanel === 'exports' && (
                            <div className="space-y-8">
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                    <MetricCard label="Export Markets" value="USA & EU" sub="Primary destinations" />
                                    <MetricCard label="Export Volume" value="95%" sub="of total output" />
                                    <MetricCard label="Port Distance" value="150 km" sub="to nearest seaport" />
                                    <MetricCard label="Growth Rate" value="+22%" sub="CAGR export volume" />
                                </div>
                                <div>
                                    <SectionHeader title="Export Volume Growth by Geography" subtitle="2019 – 2025" />
                                    <div className="flex gap-6 mb-4 text-xs font-medium text-muted-foreground">
                                        <LegendItem color={BLUE} label="Americas" />
                                        <LegendItem color={GREEN} label="Europe" />
                                        <LegendItem color={AMBER} label="Domestic" />
                                    </div>
                                    <div className="h-[350px] w-full">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart data={EXPORT_DATA}>
                                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                                                <XAxis dataKey="year" fontSize={12} tickLine={false} axisLine={false} />
                                                <YAxis fontSize={11} tickLine={false} axisLine={false} label={{ value: 'Volume Index', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: '#888' } }} />
                                                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                                                <Bar dataKey="americas" stackId="a" fill={BLUE} radius={[0, 0, 0, 0]} />
                                                <Bar dataKey="europe" stackId="a" fill={GREEN} />
                                                <Bar dataKey="domestic" stackId="a" fill={AMBER} radius={[4, 4, 0, 0]} />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activePanel === 'industry' && (
                            <div className="space-y-8">
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                    <MetricCard label="India FRP Market 2024" value="$1.28B" sub="USD" />
                                    <MetricCard label="India FRP Market 2030" value="$2.0B" sub="Projected" />
                                    <MetricCard label="Industry CAGR" value="7.8%" sub="2024 – 2030" />
                                    <MetricCard label="Global Market 2025" value="$103B" sub="USD" />
                                </div>
                                <div>
                                    <SectionHeader title="India FRP Composites Market Size" subtitle="$B USD, 2020–2030F" />
                                    <div className="flex gap-6 mb-4 text-xs font-medium text-muted-foreground">
                                        <LegendItem color={BLUE} label="Market Size (Historical)" />
                                        <LegendItem color={LTGREEN} label="Forecast" border={`1px solid ${GREEN}`} />
                                    </div>
                                    <div className="h-[350px] w-full">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={INDUSTRY_DATA}>
                                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                                                <XAxis dataKey="year" fontSize={12} tickLine={false} axisLine={false} />
                                                <YAxis domain={[0.5, 2.2]} fontSize={11} tickLine={false} axisLine={false} label={{ value: 'USD Billion', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: '#888' } }} />
                                                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} formatter={(value: any) => [`$${value}B`, 'Market Size']} />
                                                <Area type="monotone" dataKey="historical" stroke={BLUE} fill={BLUE} fillOpacity={0.1} strokeWidth={3} dot={{ r: 5, fill: BLUE }} />
                                                <Area type="monotone" dataKey="forecast" stroke={GREEN} fill={LTGREEN} fillOpacity={0.2} strokeWidth={3} strokeDasharray="6 4" dot={{ r: 4, fill: GREEN }} />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

function MetricCard({ label, value, sub }: { label: string; value: string; sub: string }) {
    return (
        <div className="bg-secondary/40 border border-border/50 rounded-2xl p-5 hover:bg-secondary/60 transition-colors">
            <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">{label}</div>
            <div className="text-2xl font-bold text-foreground mb-0.5">{value}</div>
            <div className="text-[10px] font-semibold text-primary/80">{sub}</div>
        </div>
    );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
    return (
        <div className="mb-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground/80">{title}</h4>
            <p className="text-xs text-muted-foreground font-medium">{subtitle}</p>
        </div>
    );
}

function LegendItem({ color, label, border }: { color: string; label: string; border?: string }) {
    return (
        <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: color, border: border || 'none' }} />
            <span>{label}</span>
        </div>
    );
}
