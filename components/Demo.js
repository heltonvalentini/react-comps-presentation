import React from 'react'
// import video from './eNeIntro.mp4'

const Demo = () => {
  return (
    <div
  dangerouslySetInnerHTML={{
    __html: `
      <video
        style="max-width: 80%"
        controls
        autoplay
        muted
        src="${video}"
      />
    `,
  }}
/>
  )
}

export default Demo
