import React, { ReactElement, cloneElement } from 'react'
import classNames from 'classnames'
import useBgAndTextClass from '../../hooks/useBgAndTextClass'
import { TailwindColor } from '../@types/TailwindColor'

type InfoCardProps = {
  title: string
  value: string | number
  icon: ReactElement
  color: TailwindColor
  className?: string
}

function InfoCard({ title, value, icon, color, className }: InfoCardProps) {
  return (
    <div className={classNames('bg-white rounded', className)}>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="leading-none">
          <p className="font-semibold text-lg lg:text-2xl">{value}</p>
          <span className="text-xs text-gray-400 uppercase">{title}</span>
        </div>
        <div
          className={classNames(
            'bg-opacity-10 rounded-full w-10 h-10 flex items-center justify-center',
            useBgAndTextClass(color)
          )}
        >
          {cloneElement(icon, { size: 20 })}
        </div>
      </div>
    </div>
  )
}

export default InfoCard
