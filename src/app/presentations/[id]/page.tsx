import ClientRedirect from './client-redirect'

interface PresentationPageProps {
  params: { id: string }
}

export function generateStaticParams() {
  return [
    { id: 'agents-industrial-swe' }
  ]
}

export default function PresentationPage({ params }: PresentationPageProps) {
  return <ClientRedirect id={params.id} />
}