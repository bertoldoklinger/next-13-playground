import React from 'react'



function MarketingLayout({
  children,
}: {
  children: React.ReactNode
} ){
  return (

      <div>
      <h1>MarketingLayout</h1>

      {children}
    </div>

  )
}

export default MarketingLayout
