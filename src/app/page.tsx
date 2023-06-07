import { Maximize2 } from 'lucide-react'
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Heart, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume2 } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 rounded-full bg-red-500 cursor-pointer'>
            </div>
            <div className='w-3 h-3 rounded-full bg-yellow-500 cursor-pointer'>
            </div>
            <div className='w-3 h-3 rounded-full bg-green-500 cursor-pointer'>
            </div>
          </div>
          <nav className='space-y-4 mt-10'>
            <a href="#" className='flex gap-3 text-sm font-semibold text-zinc-200 items-center'>
              <HomeIcon />
              Home
            </a>
            <a href="#" className='flex gap-3 text-sm font-semibold text-zinc-200 items-center'>
              <Search />
              Search
            </a>
            <a href="#" className='flex gap-3 text-sm font-semibold text-zinc-200 items-center'>
              <Library />
              Library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>
              Today's Top hits
            </a>
            <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>
              Funk Hits
            </a>
            <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>
              Daily Mix 3
            </a>
            <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>
              Playlist Topinha 10
            </a>
          </nav>

        </aside>
        <main className="flex-1 p-6 bg-zinc-900">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='#' className='bg-white/5 group rounded overflow-hidden hover:bg-white/10 transition-colors flex items-center gap-4'>
              <Image src={"/album1.jpg"} width={104} height={104} alt='Capa do Album Swetener da Ariana Grande' />
              <strong>Sweetener</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors flex items-center gap-4 group'>
              <Image src={"/matue.jpg"} width={104} height={104} alt='Capa do Album Swetener do Matue' />
              <strong>Conexões de Máfia</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors flex items-center gap-4 group'>
              <Image src={"/dragons.jpg"} width={104} height={104} alt='Capa do Album de Imagine Dragons' />
              <strong>Evolver</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors flex items-center gap-4 group'>
              <Image src={"/shawn.jpg"} width={104} height={104} alt='Capa do Album Swetener de Shawn Mendes' />
              <strong>Why Everyone</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors flex items-center gap-4 group'>
              <Image src={"/artic.png"} width={104} height={104} alt='Capa do Album Am Artic Monkeys' />
              <strong>Am</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors flex items-center gap-4 group'>
              <Image src={"/billie.jpg"} width={104} height={104} alt='Capa do Album Swetener da Billie Elish' />
              <strong>Happier Than Ever</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h1 className='font-semibold text-2xl mt-10'>Made for José Eduardo</h1>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href='#' className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10 transition-colors'>
              <Image src={"/daily1.jpg"} className='w-full' width={104} height={104} alt='Capa do Album ' />
              <strong>Dayli Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10 transition-colors'>
              <Image src={"/daily2.jpg"} className='w-full' width={104} height={104} alt='Capa do Album ' />
              <strong>Dayli Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10 transition-colors'>
              <Image src={"/dily3.jpg"} className='w-full' width={104} height={104} alt='Capa do Album ' />
              <strong>Dayli Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10 transition-colors'>
              <Image src={"/dayily4.jpg"} className='w-full' width={104} height={104} alt='Capa do Album ' />
              <strong>Dayli Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10 transition-colors'>
              <Image src={"/dailly5.jpg"} className='w-full' width={104} height={104} alt='Capa do Album ' />
              <strong>Dayli Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="p-6 bg-zinc-800 border-t border-zinc-700 flex items-center justify-between">
        <div className='flex items-center gap-3'>
          <Image src={"/album1.jpg"} width={56} height={56} alt='Capa do Album Swetener da Ariana Grande' />
          <div className='flex flex-col mr-3'>
            <strong className='font-normal cursor-pointer hover:underline'>Sweetener</strong>
            <span className='text-xs text-zinc-400'>Ariana Grande</span>
          </div>
          <Heart width={16} height={16} />
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex gap-4 items-center'>
            <Shuffle size={20} className='text-zinc-200 cursor-pointer' />
            <SkipBack size={20} className='text-zinc-200 cursor-pointer' />

            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
              <Play />
            </button>

            <SkipForward size={20} className='text-zinc-200 cursor-pointer' />
            <Repeat size={20} className='text-zinc-200 cursor-pointer' />
          </div>

          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-40 h-1 rounded-full hover:bg-green-500 hover:h-1.5'></div>
            </div>
            <span className='text-xs text-zinc-400'>2:12</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Mic2 width={20} />
          <LayoutList width={20} />
          <Laptop2 width={20} />
          <div className='flex items-center gap-2'>
            <Volume2 width={20} />
            <div className='h-1 rounded-full w-20 bg-zinc-600'>
              <div className='bg-zinc-200 w-10 h-1 rounded-full hover:bg-green-500 hover:h-1.5'></div>
            </div>
          </div>
          <Maximize2 width={20} />
        </div>
      </footer>
    </div>
  )
}
