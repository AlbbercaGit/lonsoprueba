import { generateStaticParams } from "./page.static"
import SeriesDetailPageClient from "./page.client"

interface SeriesPageProps {
  params: {
    id: string
  }
}

export { generateStaticParams }

export default function SeriesDetailPage({ params }: SeriesPageProps) {
  return <SeriesDetailPageClient params={params} />
}

