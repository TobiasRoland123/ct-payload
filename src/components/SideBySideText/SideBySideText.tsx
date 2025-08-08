import RichText from '@/components/RichText'
import React from 'react'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

export const SideBySideText: React.FC<DefaultTypedEditorState> = (props) => {
  return <RichText className="mb-0" data={props} enableGutter={false} />
}
