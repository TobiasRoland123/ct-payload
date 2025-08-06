import { ServicesBlock as ServicesBlockProps } from '@/payload-types'
import Image from 'next/image'

export const ServicesBlock: React.FC<ServicesBlockProps> = ({ services, title, media }) => {
  const { url } = media
  return (
    <div className="container">
      <h2 className={'text-6xl'}>{title}</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {services.map((service, index) => (
          <li key={index} className="p-10 bg-gray-400 rounded-lg shadow-md">
            <Image
              src={url}
              width={200}
              height={200}
              alt={'test'}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className={'text-4xl'}>{service.serviceName}</h3>
            <p className={'pt-4'}>{service.serviceDescription}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
