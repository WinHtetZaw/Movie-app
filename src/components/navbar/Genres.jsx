import React, { useState } from "react";
import { useGetGenresQuery } from "../../redux/services/movieListApi";
import {
  Button,
  Group,
  HoverCard,
  Menu,
  ScrollArea,
  Text,
} from "@mantine/core";
import { useDispatch } from "react-redux";
import { setNumber } from "../../redux/features/genreSlice";
import { useLocation } from "react-router-dom";

const Genres = () => {
  const [activeGenre, setActiveGenre] = useState(0);
  const { data } = useGetGenresQuery();
  const genres = data?.genres;
  const dispatch = useDispatch();

  const location = useLocation();
  //  console.log(location)

  //   console.log(activeGenre);
  const handleGenre = (num) => {
    if (location.pathname === "/movies" || location.pathname === "/tv-series") {
      console.log("right pathname");
      dispatch(setNumber(num));
    }
  };
  return (
    <div>
      {/* <Menu shadow="md" width={200}>
        <Menu.Target>
          <button className=" text-lg font-semibold">Genres</button>
        </Menu.Target>

        <Menu.Dropdown className=" bg-[#fefdf0]">
          <Menu.Label>Genres list</Menu.Label>
          <ScrollArea h={250} scrollHideDelay={500}>
            {genres?.map((genre) => (
              <Menu.Item
                onClick={() => handleGenre(genre.id)}
                className=" hover:bg-[#FFFDE4]"
                key={genre.id}
              >
                {genre.name}
              </Menu.Item>
            ))}
          </ScrollArea>
        </Menu.Dropdown>
      </Menu> */}

      <Group position="center">
        <HoverCard width={200} shadow="md" closeDelay={500}>
          <HoverCard.Target>
            <button className=" text-lg font-semibold">Genres</button>
          </HoverCard.Target>
          <HoverCard.Dropdown className=" bg-dark-4 text-slate-200">
            <span className=" text-sm font-semibold py-3 px-2 block text-center text-slate-300">
              Genres list
            </span>
            <ScrollArea h={250} scrollHideDelay={500}>
              <div className=" hover:bg-my-dark transition duration-300 rounded py-2 px-2 select-none cursor-pointer">
                All
              </div>
              {genres?.map((genre) => (
                <div
                  onClick={() => handleGenre(genre.id)}
                  className="  hover:bg-my-dark transition duration-300 rounded py-2 px-2 select-none cursor-pointer"
                  key={genre.id}
                >
                  {genre.name}
                </div>
              ))}
            </ScrollArea>
          </HoverCard.Dropdown>
        </HoverCard>
      </Group>
    </div>
  );
};

export default Genres;
