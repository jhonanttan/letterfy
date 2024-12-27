import React, { useContext } from 'react';
import { assets, favoriteSongs } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';

const Sidebar = () => {
  const navigate = useNavigate();
  const { playWithId } = useContext(PlayerContext);

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div onClick={() => navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-14" src={assets.sticker_1} alt="logo" />
          <p className="font-bold text-4xl ml-5">Letterfy</p>
        </div>
      </div>

      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div onClick={() => navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="Home Icon" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="Search Icon" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      <div className="bg-[#121212] h-[70%] rounded overflow-y-auto p-4">
        <h2 className="text-xl font-bold mb-4">Suas músicas favoritas</h2>
        <ul>
          {favoriteSongs.map((song) => (
            <li
              key={song.id}
              className="flex items-center gap-3 mb-3 cursor-pointer hover:bg-[#242424] p-2 rounded"
              onClick={() => playWithId(song.id)}
            >
              <img className="w-10 h-10 rounded" src={song.image} alt={song.name} />
              <div className="flex flex-col">
                <p className="font-semibold">{song.name}</p>
                <p className="text-sm text-gray-400">{song.duration}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;