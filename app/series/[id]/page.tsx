import { notFound } from "next/navigation"
import SeriesDetailPageClient from "./SeriesDetailPageClient"

// This data would typically come from a CMS or API
const photoSeries = [
  {
    id: "shadows-and-light",
    title: "SHADOWS & LIGHT",
    description: "A study of contrast and form through architectural elements and natural light.",
    fullDescription:
      "This series explores the interplay between light and shadow in architectural spaces. Shot over the course of six months in various cities, these images capture how natural light transforms structures throughout the day. The high contrast black and white treatment emphasizes form, texture, and the geometric patterns created by light passing through different architectural elements.",
    year: "2023",
    count: 24,
    featuredImage: "/shadow2.jpg",
    previewImages: ["/shadow3.jpg", "/shadow4.jpg", "/shadow5.jpg", "/shadow6.jpg"],
    images: [
      {
        src: "/shadow.jpg",
        alt: "Architectural shadows 1",
        caption: "Morning light, Museum of Modern Art",
      },
      {
        src: "/shadow3.jpg",
        alt: "Architectural shadows 2",
        caption: "Stairwell patterns, Downtown",
      },
      {
        src: "/shadow4.jpg",
        alt: "Architectural shadows 3",
        caption: "Window reflections, Financial District",
      },
      {
        src: "/shadow5.jpg",
        alt: "Architectural shadows 4",
        caption: "Concrete and light, Brutalist Library",
      },
      {
        src: "/shadow6.jpg",
        alt: "Architectural shadows 5",
        caption: "Skylight patterns, Central Station",
      },
      {
        src: "/shadow7.jpg",
        alt: "Architectural shadows 6",
        caption: "Facade details, Historic Quarter",
      },
      {
        src: "/shadow8.jpg",
        alt: "Architectural shadows 7",
        caption: "Column shadows, National Gallery",
      },
      {
        src: "/lonso7.jpg",
        alt: "Architectural shadows 8",
        caption: "Sunset angles, Glass Tower",
      },
      {
        src: "/lonso3.jpg",
        alt: "Architectural shadows 9",
        caption: "Light wells, Underground Passage",
      },
    ],
  },
  {
    id: "analog-memories",
    title: "ANALOG MEMORIES",
    description: "Shot entirely on 35mm film, this series explores nostalgia through vintage techniques and subjects.",
    fullDescription:
      "Analog Memories is a deeply personal project shot entirely on vintage film cameras using expired film stock. The chemical imperfections, light leaks, and grain are embraced as essential elements that contribute to the nostalgic quality of these images. Each photograph captures everyday moments with a timeless quality that feels both familiar and distant.",
    year: "2022",
    count: 18,
    featuredImage: "/a.jpg",
    previewImages: ["/a2.jpg", "/a3.jpg", "/a4.jpg", "/a5.jpg"],
    images: [
      {
        src: "/a7.jpg",
        alt: "Analog photo 1",
        caption: "Summer afternoon, Kodak Portra 400",
      },
      { src: "/a2.jpg", alt: "Analog photo 2", caption: "Corner store, Ilford HP5" },
      { src: "/a3.jpg", alt: "Analog photo 3", caption: "Vintage car, Fuji Superia 400" },
      { src: "/a4.jpg", alt: "Analog photo 4", caption: "Diner counter, Kodak Tri-X" },
      { src: "/a5.jpg", alt: "Analog photo 5", caption: "Record store, Lomography 800" },
      { src: "/a6.jpg", alt: "Analog photo 6", caption: "Neon signs, CineStill 800T" },
      { src: "/a1.jpg", alt: "Analog photo 7", caption: "Polaroid memories, SX-70 film" },
      {
        src: "/a8.jpg",
        alt: "Analog photo 8",
        caption: "Childhood bedroom, Kodak Gold 200",
      },
      {
        src: "/a9.jpg",
        alt: "Analog photo 9",
        caption: "Drive-in theater, Expired Ektachrome",
      },
    ],
  },
  {
    id: "urban-textures",
    title: "URBAN TEXTURES",
    description: "Documenting the layers of history and human interaction in city environments.",
    fullDescription:
      "Urban Textures examines the physical surfaces of the city as a record of time and human activity. From weathered walls and peeling posters to the patina of well-worn public spaces, these photographs document how urban environments are constantly transformed by both natural elements and human intervention. The series reveals beauty in decay and celebrates the unintentional artistry created by layers of history.",
    year: "2021",
    count: 32,
    featuredImage: "/c.jpg",
    previewImages: ["/c5.jpg", "/c4.jpg", "/c3.jpg", "/c2.jpg"],
    images: [
      { src: "/c2.jpg", alt: "Urban texture 1", caption: "Weathered brick, East Side" },
      {
        src: "/c5.jpg",
        alt: "Urban texture 2",
        caption: "Peeling posters, Theater District",
      },
      {
        src: "/c3.jpg",
        alt: "Urban texture 3",
        caption: "Rust patterns, Industrial Zone",
      },
      { src: "/c4.jpg", alt: "Urban texture 4", caption: "Graffiti layers, Underpass" },
      { src: "/c6.jpg", alt: "Urban texture 5", caption: "Cracked pavement, Downtown" },
      { src: "/c7.jpg", alt: "Urban texture 6", caption: "Metal patina, Harbor Area" },
      {
        src: "/c8.jpg",
        alt: "Urban texture 7",
        caption: "Worn doorway, Historic District",
      },
      { src: "/c1.jpg", alt: "Urban texture 8", caption: "Subway tiles, Metro Station" },
      { src: "/c.jpg", alt: "Urban texture 9", caption: "Painted signage, Old Market" },
    ],
  },
]

// Función para generar los parámetros estáticos
export async function generateStaticParams() {
  return photoSeries.map((series) => ({
    id: series.id,
  }))
}

interface SeriesPageProps {
  params: {
    id: string
  }
}

// Change the page component to be async and await the params
export default async function SeriesDetailPage({ params }: SeriesPageProps) {
  // Await the params before using them
  const id = await params.id

  // Find the series by ID
  const series = photoSeries.find((s) => s.id === id)

  // If series not found, show 404
  if (!series) {
    notFound()
  }

  return <SeriesDetailPageClient params={{ id }} />
}

