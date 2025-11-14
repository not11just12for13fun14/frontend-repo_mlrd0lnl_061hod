import React from 'react'
import Spline from '@splinetool/react-spline'
import { Brain, FileText, Bot, Workflow, Image as ImageIcon, Play, Sparkles, CheckCircle2 } from 'lucide-react'

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      {eyebrow && (
        <div className="text-sm font-medium tracking-wider text-blue-600 uppercase mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      {subtitle && <p className="text-gray-600 text-lg leading-relaxed">{subtitle}</p>}
    </div>
  )
}

function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative overflow-hidden" style={{ minHeight: '85vh' }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_10%,rgba(255,255,255,0.85),rgba(255,255,255,0.9))]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 md:pt-36 pb-16 md:pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-white/60 shadow-sm backdrop-blur mb-6">
          <Sparkles className="h-4 w-4 text-purple-600" />
          <span className="text-xs font-medium text-gray-600">AI • RPA • No‑Code</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
          DreamRoute.ai
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-xl text-gray-700 max-w-2xl mx-auto">
          Your AI-powered career guidance assistant
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => handleScrollTo('chatbot-demo')} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition">
            <Bot className="h-5 w-5" />
            Try Chatbot Demo
          </button>
          <button onClick={() => handleScrollTo('rpa-section')} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-gray-900 font-semibold border border-gray-200 hover:border-gray-300 shadow-sm">
            <FileText className="h-5 w-5" />
            Generate Career Report
          </button>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="About Project"
          title="Final-year capstone blending AI, RPA, and No‑Code"
          subtitle="DreamRoute.ai helps students explore careers with smart guidance, automated reports, and a clean interface. It combines AI for insights, RPA for time‑saving automation, and no‑code tools for rapid assembly."
        />
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Brain className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">AI Intelligence</h3>
            <p className="mt-2 text-gray-600">Uses machine learning prompts to suggest paths, skills, and resources tailored to interests.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Workflow className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">RPA Automation</h3>
            <p className="mt-2 text-gray-600">Automates data collection and report generation so you focus on decisions, not paperwork.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="h-10 w-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">No‑Code Friendly</h3>
            <p className="mt-2 text-gray-600">Assembled with visual tools and APIs for quick iteration and professional polish.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ChatMessage({ role = 'user', text }) {
  const isUser = role === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} w-full`}>
      <div className={`max-w-[85%] md:max-w-[70%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${isUser ? 'bg-blue-600 text-white rounded-br-sm' : 'bg-white text-gray-800 border border-gray-100 rounded-bl-sm'}`}>
        {text}
      </div>
    </div>
  )
}

function ChatbotDemo() {
  const messages = [
    { role: 'user', text: 'I enjoy problem solving and design. What careers fit me?' },
    { role: 'ai', text: 'Great combo. Consider Product Design, UX Engineering, or Data Visualization. Would you like a skills roadmap?' },
    { role: 'user', text: 'Yes, suggest a roadmap for the next 6 months.' },
    { role: 'ai', text: 'Phase 1: Foundations (UX principles, Figma, HTML/CSS). Phase 2: Prototyping and accessibility. Phase 3: Portfolio with 2 projects. Shall I generate a report?' },
  ]

  return (
    <section id="chatbot-demo" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="Chatbot Demo"
          title="See how guidance conversations would look"
          subtitle="This is a mock interface to illustrate the experience."
        />
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b bg-white/80 backdrop-blur">
                <div className="flex items-center gap-2 text-gray-700">
                  <Bot className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">DreamRoute Assistant</span>
                </div>
                <div className="text-xs text-gray-500">Mock demo</div>
              </div>
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                {messages.map((m, i) => (
                  <ChatMessage key={i} role={m.role === 'ai' ? 'ai' : 'user'} text={m.text} />
                ))}
              </div>
              <div className="px-4 py-3 bg-white border-t">
                <div className="rounded-xl border border-dashed border-gray-300 px-4 py-3 text-gray-500 text-sm">
                  Type a message… (demo only)
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-gray-900">How it helps</h4>
              <p className="mt-2 text-gray-600 text-sm">Ask questions about roles, skills, courses, and salaries. The assistant suggests learning paths tailored to your goals.</p>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-emerald-50 border border-gray-100">
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Personalized insights</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Skill roadmaps</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Portfolio ideas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function RPASection() {
  const steps = [
    { title: 'Collect Inputs', desc: 'Interests, skills, location, education' },
    { title: 'Scrape & Aggregate', desc: 'Jobs, skills, courses, salaries' },
    { title: 'Analyze with AI', desc: 'Rank roles, map skills, suggest paths' },
    { title: 'Generate Report', desc: 'PDF with plan, links, timeline' },
  ]

  return (
    <section id="rpa-section" className="py-20 md:py-28 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="RPA Automation"
          title="Simple automated workflow"
          subtitle="Robotic Process Automation (RPA) runs a repeatable pipeline that saves time and ensures consistent output."
        />
        <div className="rounded-2xl p-6 md:p-8 bg-white border border-gray-100 shadow-sm">
          <div className="grid md:grid-cols-4 gap-4 md:gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="p-4 rounded-xl bg-gradient-to-b from-gray-50 to-white border border-gray-200">
                  <div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                    <Workflow className="h-6 w-6" />
                  </div>
                  <div className="font-semibold text-gray-900">{i + 1}. {s.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{s.desc}</div>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gray-300">→</div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition">
              <Play className="h-5 w-5" />
              Run Automated Career Report Generator
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const items = [
    { icon: Brain, title: 'AI Career Guidance', desc: 'Recommendations and learning paths tailored to you.' },
    { icon: FileText, title: 'Automatic Report Generation (RPA)', desc: 'One-click, structured PDFs with links and timelines.' },
    { icon: Sparkles, title: 'Clean UI', desc: 'Minimal, modern, and accessible design.' },
    { icon: Workflow, title: 'No-code implementation', desc: 'Built with composable tools for fast iteration.' },
    { icon: CheckCircle2, title: 'Easy to use', desc: 'Clear steps and simple actions at every stage.' },
  ]

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="Features"
          title="What makes DreamRoute.ai helpful"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Screenshots() {
  const placeholders = new Array(6).fill(0)
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="Screenshots"
          title="Add your app screenshots here"
          subtitle="Use these placeholders to showcase onboarding, chatbot, reports, and dashboards."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {placeholders.map((_, i) => (
            <div key={i} className="group aspect-[4/3] rounded-2xl border border-dashed border-gray-300 bg-white/60 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <ImageIcon className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <div className="text-sm font-medium">Screenshot {i + 1}</div>
                <div className="text-xs text-gray-500">Upload later</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 text-center border-t bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-sm text-gray-600">
          <div className="font-medium text-gray-800">Created by Hajira Khan</div>
          <div className="mt-1">Final Year Project – 2025</div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <About />
      <ChatbotDemo />
      <RPASection />
      <Features />
      <Screenshots />
      <Footer />
    </div>
  )
}
