import { ServicesBlock as ServicesBlockProps } from '@/payload-types'

import { Media } from '@/components/Media'
import React from 'react'

export const ServicesBlock: React.FC<ServicesBlockProps> = ({ services, title }) => {
  return (
    <div className="container">
      <h2 className={'text-6xl'}>{title}</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {services.map((service, index) => (
          <li
            key={`${service.serviceName}-${index}`}
            className="p-10 bg-gray-400 rounded-lg shadow-md flex flex-col justify-between items-center text-center "
          >
            <span className={'text-5xl'}>{service.serviceIcon}</span>

            <h3 className={'text-4xl'}>{service.serviceName}</h3>
            <p className={'pt-4'}>{service.serviceDescription}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
