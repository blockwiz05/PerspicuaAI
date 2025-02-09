import { DocumentClockIcon } from "./icons/document-clock-icon"
import { VerifyIcon } from "./icons/verify-icon"
import { LockIcon } from "./icons/lock-icon"
import { FeatureCard } from "./feature-card"

export function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-20">
        <h2 className="text-[48px] leading-[1.2] font-normal mb-6">What Makes PirspicuaAI the Future of Research?</h2>
        <p className="text-gray-600 text-xl">
          Cut through the clutter of scientific literature with AI-powered summaries, decentralized verification, and
          open-access storage. PirspicuaAI ensures research insights are clear, reliable, and accessible to everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <FeatureCard
          icon={<DocumentClockIcon />}
          title="Time-Saving Summaries"
          description="AI-powered abstracts in seconds"
        />
        <FeatureCard icon={<VerifyIcon />} title="Verified for Accuracy" description="EigenLayer-backed trust system" />
        <FeatureCard icon={<LockIcon />} title="Open & Secure" description="Stored on IPFS, ensuring transparency" />
      </div>
    </section>
  )
}

