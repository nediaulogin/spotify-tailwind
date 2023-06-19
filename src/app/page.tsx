import { ChevronLeft, ChevronRight, Home as HomeIcon, Library, Play, Search } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
  <div className="h-screen flex flex-col">
    <div className="flex flex-1">

      <aside className="w-64 bg-zinc-950 p-6">

        <nav className='space-y-6 mt-8'>
          <a href="" className='flex items-center gap-3 text-xs font-semibold text-zinc-200' >
            <HomeIcon />
            Home
          </a>
          <a href="" className='flex items-center gap-3 text-xs font-semibold text-zinc-200'>
          <Search/>
            Search
          </a>
          <a href="" className='flex items-center gap-3 text-xs font-semibold text-zinc-200'>
            <Library/>
            Your Library
          </a>
        </nav>

        <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist</a>
        </nav>
      </aside>

    <main className="flex-1 p-6">
      <div className='flex items-center gap-4'>
        <button className=' rounded-full bg-black/40 p-1'>
          <ChevronLeft/>
        </button>

        <button className=' rounded-full bg-black/40 p-1'>
          <ChevronRight/>
        </button>
      </div>
      <h1 className='font-semibold text-3xl mt-6'>Good Afternoon</h1>
      <div className='grid grid-cols-3 gap-4 mt-4'>

        <a href='a' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/album.png" width={90} height={90} alt='capa'/>
          <strong>Carne Doce</strong>
          <button className='w-9 h-9 pl-0.5 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-7 invisible group-hover:visible'>
            <Play />
          </button>
        </a>
        <a href='a' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/album.png" width={90} height={90} alt='capa'/>
          <strong>Carne Doce</strong>
          <button className='w-9 h-9 pl-0.5 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-7 invisible group-hover:visible'>
            <Play />
          </button>
        </a>
                <a href='a' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/album.png" width={90} height={90} alt='capa'/>
          <strong>Carne Doce</strong>
          <button className='w-9 h-9 pl-0.5 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-7 invisible group-hover:visible'>
            <Play />
          </button>
        </a>
        <a href='a' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/album.png" width={90} height={90} alt='capa'/>
          <strong>Carne Doce</strong>
          <button className='w-9 h-9 pl-0.5 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-7 invisible group-hover:visible'>
            <Play />
          </button>
        </a>
                <a href='a' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/album.png" width={90} height={90} alt='capa'/>
          <strong>Carne Doce</strong>
          <button className='w-9 h-9 pl-0.5 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-7 invisible group-hover:visible'>
            <Play />
          </button>
        </a>
                <a href='a' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/album.png" width={90} height={90} alt='capa'/>
          <strong>Carne Doce</strong>
          <button className='w-9 h-9 pl-0.5 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-7 invisible group-hover:visible'>
            <Play />
          </button>
        </a>
        
      </div>
    </main>    
    </div>
    <footer className="bg-zinc-800 border-t border-zinc-700 p-6">footer</footer>
    </div>
  )
}
