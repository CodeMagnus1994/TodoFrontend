import React from 'react'
import { Header} from "@kokitotsos/react-components"


function SpaceHeader() {
  return (
    <div
  style={{
    height: 100
  }}
>
  <Header
    breakpoint={800}
    links={[
      {
        href: 'http://localhost:5173',
        text: 'HomePage'
      },
      {
        href: 'http://localhost:5173/gettodo',
        text: 'get todo'
      }
    ]}
    style={{
      position: 'absolute'
    }}
  />
</div>
  )
}

export default SpaceHeader