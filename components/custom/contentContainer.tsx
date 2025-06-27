import React from 'react'

const ContentContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full space-y-4 mx-auto py-8 px-8 md:px-12">
            {children}
        </div >
    )
}

export default ContentContainer