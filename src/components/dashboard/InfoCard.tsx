import React, { ReactElement } from 'react'

type InfoCardProps = {
  title: string
  value: string | number
  icon: ReactElement
  color: string
}

function InfoCard({ title, value, icon, color }: InfoCardProps) {
  return (
    <div className="bg-white rounded">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="leading-none">
          <p className="font-semibold text-lg lg:text-2xl">{value}</p>
          <span className="text-xs text-gray-400 uppercase">{title}</span>
        </div>
        <div
          className={`bg-${color}-500 text-${color}-500 bg-opacity-10 rounded-full w-10 h-10 flex items-center justify-center`}
        >
          {icon}
        </div>
      </div>
    </div>
  )
}

export default InfoCard
