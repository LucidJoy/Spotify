import React, { useState, useEffect } from "react";
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
  LockOpenIcon,
} from "@heroicons/react/outline";
import SpotifyWebApi from "spotify-web-api-node";
import { signOut, useSession } from "next-auth/react";
import useSpotify from "../hooks/useSpotify";

const Sidebar = () => {
  const [playlists, setPlaylists] = useState([]);
  const { data: session, status } = useSession();
  const spotifyApi = useSpotify();

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  console.log(playlists);

  return (
    <div className='text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide'>
      <div className='space-y-4'>
        <button className='flex items-center space-x-2 hover:text-white'>
          <LockOpenIcon className='h-5 w-5' onClick={() => signOut()} />
          <p>Log out</p>
        </button>

        <button className='flex items-center space-x-2 hover:text-white'>
          <HomeIcon className='h-5 w-5' />
          <p>Home</p>
        </button>

        <button className='flex items-center space-x-2 hover:text-white'>
          <SearchIcon className='h-5 w-5' />
          <p>Search</p>
        </button>

        <button className='flex items-center space-x-2 hover:text-white'>
          <LibraryIcon className='h-5 w-5' />
          <p>Your Library</p>
        </button>

        <hr className='border-t-[0.1px] border-gray-800' />

        {/* ----- */}

        <button className='flex items-center space-x-2 hover:text-white'>
          <PlusCircleIcon className='h-5 w-5' />
          <p>Create Playlist</p>
        </button>

        <button className='flex items-center space-x-2 hover:text-white'>
          <HeartIcon className='h-5 w-5' />
          <p>Your Library</p>
        </button>

        <button className='flex items-center space-x-2 hover:text-white'>
          <RssIcon className='h-5 w-5' />
          <p>Your episodes</p>
        </button>

        <hr className='border-t-[0.1px] border-gray-800' />

        {/* Playlists... */}

        {playlists.map((playlist) => (
          <p key={playlist.id} className='cursor-pointer hover:text-white'>
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
