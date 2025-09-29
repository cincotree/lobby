'use client'

import { useEffect } from 'react'

interface ClientRedirectProps {
  id: string
}

export default function ClientRedirect({ id }: ClientRedirectProps) {
  useEffect(() => {
    // Client-side redirect to the static HTML file
    window.location.replace(`/presentations/${id}/index.html`)
  }, [id])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Redirecting to presentation...</p>
        <p className="text-sm text-gray-500 mt-2">
          If you&apos;re not redirected automatically,
          <a href={`/presentations/${id}/index.html`} className="text-blue-600 hover:underline ml-1">
            click here
          </a>
        </p>
      </div>
    </div>
  )
}