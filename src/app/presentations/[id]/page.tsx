import ClientRedirect from './client-redirect'

interface PresentationPageProps {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return [
    { id: 'agents-industrial-swe' }
  ]
}

export default async function PresentationPage({ params }: PresentationPageProps) {
  const { id } = await params
  return <ClientRedirect id={id} />
}