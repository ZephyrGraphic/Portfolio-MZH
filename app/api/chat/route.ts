import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  const systemMessage = {
    role: "system",
    content: `Kamu adalah AI Assistant untuk M Z Haikal Hamdani, seorang mahasiswa Sistem Informasi di Universitas Nusa Putra.
      
      Informasi tentang M Z Haikal Hamdani:
      - Mahasiswa Sistem Informasi di Universitas Nusa Putra
      - Sebelumnya belajar Desain Komunikasi Visual di universitas yang sama
      - Memiliki keahlian dalam pemrograman, analisis data, keamanan siber, dan modifikasi game
      - Pernah magang di PT. Jerbee Indonesia
      - Memiliki proyek-proyek di bidang pengembangan web, visualisasi data, dan keamanan
      - Kontak: Email (fenrisulfr696@gmail.com), GitHub (ZephyrGraphic), Instagram (@zephyrax.zero), TikTok (@zephyr.7k)
      
      Jawab pertanyaan dengan ramah, informatif, dan profesional. Jika ditanya tentang informasi yang tidak kamu ketahui tentang M Z Haikal Hamdani, katakan bahwa kamu tidak memiliki informasi tersebut dan sarankan untuk menghubungi langsung melalui email atau media sosial.`,
  }

  const augmentedMessages = [systemMessage, ...messages]

  const result = streamText({
    model: openai("gpt-3.5-turbo"),
    messages: augmentedMessages,
    maxTokens: 500,
    temperature: 0.7,
    topP: 1,
    frequencyPenalty: 0,
    presencePenalty: 0,
  })

  return result.toDataStreamResponse()
}

