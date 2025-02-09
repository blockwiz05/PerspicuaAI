import type React from "react"

interface WorkflowCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function WorkflowCard({ icon, title, description }: WorkflowCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
      <div className="text-gray-800 mb-6">{icon}</div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  )
}

