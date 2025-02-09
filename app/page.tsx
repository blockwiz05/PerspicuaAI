"use client";

import { usePrivy } from "@privy-io/react-auth";
import { Features } from "./components/features";
import { Workflow } from "./components/workflow";
import Action from "./components/Action";
import ResearchSummaryPage from "./components/ResearchSummaryPage";

export default function Page() {
  const { ready, authenticated, login, logout, user } = usePrivy();

  // Get the connected wallet address
  const walletAddress = user?.wallet?.address;

  // Function to truncate the address (e.g., 0x1234...abcd)
  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <>
    <main className="min-h-screen w-full relative overflow-hidden">
      {/* Background DNA Image */}
      <div
        className="absolute top-0 right-0 w-[1300px] h-[1300px] bg-no-repeat bg-contain z-0 opacity-50"
        style={{
          backgroundImage: `url('/pirspecua.png')`,
          backgroundPosition: "right top",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <nav className="flex justify-between items-center py-8">
          <h1 className="text-xl font-normal">PerspicuaAI</h1>

          {authenticated ? (
            <div className="flex items-center space-x-4">
              {/* Show Truncated Wallet Address */}
              <span className="bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm">
                {truncateAddress(walletAddress || "")}
              </span>

              {/* Logout Button */}
              <button
                onClick={logout}
                className="bg-red-500 text-white px-6 py-2 rounded-full text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={login}
              className="bg-black text-white px-6 py-2 rounded-full text-sm"
            >
              Connect Wallet
            </button>
          )}
        </nav>

        {/* Hero Section */}
        <div className="mt-24 max-w-3xl">
          <h2 className="text-[56px] leading-[1.2] font-normal mb-6">
            Decentralized AI-Powered Research Insights
          </h2>
          <p className="text-gray-600 text-xl mb-12">
            Cut through the noise. Get AI-generated, verified, and decentralized research summaries for faster knowledge discovery.
          </p>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search for 'Alzheimer's disease'"
              className="w-full px-6 py-4 rounded-full border border-gray-200 text-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
            />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Search"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
    <Features/>
    <Workflow />
    <Action />
     <ResearchSummaryPage />
    </>
  );
}
