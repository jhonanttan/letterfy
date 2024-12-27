import React, { useRef } from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

const DisplayHome = () => {
  // Refs para acessar as listas de álbuns e músicas
  const albumListRef = useRef(null)
  const songListRef = useRef(null)

  // Função para rolar a lista de álbuns para a direita
  const scrollAlbums = (direction) => {
    if (albumListRef.current) {
      albumListRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth',
      })
    }
  }

  // Função para rolar a lista de músicas para a direita
  const scrollSongs = (direction) => {
    if (songListRef.current) {
      songListRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <Navbar />
      
      {/* Álbuns mais tocados */}
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Álbuns mais tocados</h1>
        <div className='relative group'>
          {/* Lista de álbuns */}
          <div className='flex overflow-x-auto space-x-4 pb-4 scrollbar-hide' ref={albumListRef}>
            {albumsData.map((item, index) => (
              <AlbumItem 
                key={index} 
                name={item.name} 
                desc={item.desc} 
                id={item.id} 
                image={item.image} 
              />
            ))}
          </div>

          {/* Botão para rolar para a esquerda */}
          <div className='absolute top-1/2 left-0 mb-4 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <button 
              onClick={() => scrollAlbums('left')}
              className='bg-transparent text-white p-2 hover:text-gray-400 focus:outline-none'>
              <span className='text-2xl'>⬅</span>
            </button>
          </div>

          {/* Botão para rolar para a direita */}
          <div className='absolute top-1/2 right-0 mb-4 mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <button 
              onClick={() => scrollAlbums('right')}
              className='bg-transparent text-white p-2 hover:text-gray-400 focus:outline-none'>
              <span className='text-2xl'>➡</span>
            </button>
          </div>
        </div>
      </div>

      {/* Músicas mais tocadas */}
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Músicas mais tocadas</h1>
        <div className='relative group'>
          {/* Lista de músicas */}
          <div className='flex overflow-x-auto space-x-4 pb-4 scrollbar-hide' ref={songListRef}>
            {songsData.map((item, index) => (
              <SongItem 
                key={index} 
                name={item.name} 
                desc={item.desc} 
                id={item.id} 
                image={item.image} 
              />
            ))}
          </div>

          {/* Botão para rolar para a esquerda */}
          <div className='absolute top-1/2 left-0 mb-4 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <button 
              onClick={() => scrollSongs('left')}
              className='bg-transparent text-white p-2 hover:text-gray-400 focus:outline-none'>
              <span className='text-2xl'>⬅</span>
            </button>
          </div>

          {/* Botão para rolar para a direita */}
          <div className='absolute top-1/2 right-0 mb-4 mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <button 
              onClick={() => scrollSongs('right')}
              className='bg-transparent text-white p-2 hover:text-gray-400 focus:outline-none'>
              <span className='text-2xl'>➡</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DisplayHome
