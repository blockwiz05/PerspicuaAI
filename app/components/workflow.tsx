import { SearchIcon } from "./icons/workflow/search-icon"
import { DocumentIcon } from "./icons/workflow/document-icon"
import { VerifyBadgeIcon } from "./icons/workflow/verify-badge-icon"
import { DatabaseIcon } from "./icons/workflow/database-icon"
import { WorkflowCard } from "./workflow-card"

export function Workflow() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-20">
        <h2 className="text-[48px] leading-[1.2] font-normal mb-6">Turning Complexity into Clarity</h2>
        <p className="text-gray-500 text-xl">
          PirspicuaAI transforms dense scientific abstracts into concise, AI-powered summaries verified through
          decentralized validation and stored securely for open access. Navigate research effortlessly with clarity and
          confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <WorkflowCard
          icon={<SearchIcon />}
          title="Enter a Topic"
          description="Search BioRxiv abstracts by keyword, date, or category"
        />
        <WorkflowCard
          icon={<DocumentIcon />}
          title="AI Summarizes"
          description="The AI Agent generates a concise research summary"
        />
        <WorkflowCard
          icon={<VerifyBadgeIcon />}
          title="Predicate Verification"
          description="EigenLayer verifies key claims in the summary"
        />
        <WorkflowCard
          icon={<DatabaseIcon />}
          title="Immutable Storage"
          description="Summaries and metadata are stored securely on IPFS"
        />
      </div>
    </section>
  )
}

