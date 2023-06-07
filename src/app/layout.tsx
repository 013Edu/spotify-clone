import './globals.css'

export const metadata = {
  title: 'Spotify',
  description: 'Play in your favorite music.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="bg-zinc-800 text-zinc-50">{children}</body>
    </html>
  )
}
