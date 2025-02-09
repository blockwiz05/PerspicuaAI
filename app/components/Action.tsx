export default function Action() {
    return (
      <div className="min-h-screen bg-[#1C1C1C] text-white px-4 py-16">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto mb-16 space-y-4">
          <h1 className="text-5xl font-light">See PerspicuaAI in Action</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Explore AI-generated research summaries in real time. Search, verify, and access insights instantly experience
            the power of decentralized knowledge at your fingertips.
          </p>
        </div>
  
        {/* Application Interface */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex">
              {/* Sidebar */}
              <div className="w-64 border-r border-gray-100 p-4">
                {/* Top Search */}
                <div className="flex items-center gap-3 mb-6">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
  
                {/* Timeline */}
                <div className="space-y-6 text-sm">
                  <div>
                    <h3 className="text-gray-400 mb-2">Today</h3>
                    <p className="text-gray-900">Latest research on AI/ML</p>
                  </div>
                  <div>
                    <h3 className="text-gray-400 mb-2">Yesterday</h3>
                    <div className="space-y-2">
                      <p className="text-gray-900">Emerging therapies for...</p>
                      <p className="text-gray-900">How gut microbiome in...</p>
                      <p className="text-gray-900">Breakthroughs in CRISP...</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-400 mb-2">Previous 7 Days</h3>
                    <div className="space-y-2">
                      <p className="text-gray-900">Gene therapy advance...</p>
                      <p className="text-gray-900">New nanotechnology a...</p>
                      <p className="text-gray-900">New discoveries in the t...</p>
                      <p className="text-gray-900">Advancements in early...</p>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Main Content */}
              <div className="flex-1 p-2">
                {/* Top Bar */}
                <div className="flex justify-between items-center mb-4">
                  <div className="relative flex-1 max-w-md">
                    <input
                      type="text"
                      placeholder="Search for research..."
                      className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100"
                    />
                    <svg
                      className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                 
                </div>
  
                {/* Article Content */}
                <div className="bg-gray-50 rounded-xl p-12">
                <p className="flex items-center w-[25vw] float-end gap-2 px-4 py-2 bg-black text-white rounded-full text-xs">
                    Breakthroughs in CRISPR gene editing for genetic disorders
                  </p>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <span className="font-mono text-sm">AI</span>
                  </button>
                  <h2 className="text-xs font-medium text-gray-900 mb-4">
                    "Advancements in CRISPR Technology for Treating Genetic Disorders"
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-xs">
                    Recent breakthroughs in CRISPR-based gene editing have revolutionized the treatment of genetic
                    disorders, offering precise and efficient genome modifications. Researchers have successfully
                    leveraged CRISPR-Cas9 and its evolved variants to correct disease-causing mutations in conditions such
                    as sickle cell anemia, cystic fibrosis, and muscular dystrophy. Innovations like prime editing and
                    base editing have further enhanced accuracy, while minimizing unintended mutations. Additionally,
                    clinical trials have demonstrated promising results, paving the way for potential therapeutic
                    applications. As regulatory frameworks evolve, CRISPR technology continues to move toward safer and
                    more effective gene therapies, marking a transformative shift in genetic medicine.
                  </p>
                  <div className="flex gap-3 mt-6">
                    <button className="p-2 hover:bg-gray-200 rounded-full">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded-full">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded-full">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4z"
                        />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded-full">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded-full">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
  
                {/* Bottom Search */}
                <div className="mt-8 relative">
                  <input
                    type="text"
                    placeholder="Search for 'Alzheimer's disease'"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100"
                  />
                  <svg
                    className="w-5 h-5 text-gray-400 absolute left-3 top-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }