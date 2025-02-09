export default function ResearchSummaryPage() {
    return (
      <main className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="flex-1 flex flex-col justify-center px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto space-y-6 text-left"> {/* Changed text alignment */}
            <h1 className="text-4xl md:text-5xl tracking-tight">
              Navigate Breakthroughs with AI-Powered Insights
            </h1>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl">
              Harness the power of AI and decentralized verification to access clear, concise, and trustworthy research
              insights faster than ever before.
            </p>
            <div className="pt-4">
              <button className="px-6 py-2.5 rounded-full border border-gray-300 hover:border-gray-400 transition-colors text-gray-800">
                Learn How It Works
              </button>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-[#1C1C1C] text-gray-300 px-6 py-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-4">
            <p className="text-sm">
              Made With
              <span className="text-red-500 mx-1">❤</span>
              Cognivis & Team
            </p>
            <p className="text-sm">Copyright © 2024, Created by Perspicua AI</p>
          </div>
        </footer>
      </main>
    )
  }
  