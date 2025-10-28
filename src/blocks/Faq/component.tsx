import React from 'react'
import { FaqBlock as FaqBlockProps } from '@/payload-types'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion'
import RichText from '@/components/RichText'

export const FaqBlock: React.FC<FaqBlockProps> = ({ title, accordions }) => {
  return (
    <div className="container">
      {title && <h2 className="mb-8">{title}</h2>}
      {accordions && accordions.length > 0
        ? accordions.map((item, index) => {
            return (
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
                key={`${item.question}-${index}`}
              >
                <AccordionItem value={item.question}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    {item.answer && (
                      <RichText
                        className="mb-0"
                        enableProse={false}
                        enableGutter={true}
                        data={item.answer}
                      />
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )
          })
        : null}
    </div>
  )
}
