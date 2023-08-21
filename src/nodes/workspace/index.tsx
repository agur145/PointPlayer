import { useEffect, useState } from "react";
import Header from "./components/header";
import { MenuItem } from "../../types/workspace";

function WorkSpace() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  useEffect(() => {
    const defaultMenu = [
      { path: "/", name: "首页", code: "home" },
      {
        path: "/discover",
        name: "发现",
        code: "discover",
        children: [
          { path: "/discover/playlists", name: "歌单", code: "discover" },
          { path: "/discover/toplists", name: "排行榜", code: "discover" },
          { path: "/discover/artists", name: "歌手", code: "discover" },
        ],
      },
      {
        path: "/user",
        name: "音乐库",
        code: "user",
        children: [{ path: "/login", name: "登陆账号", code: "user" }],
      },
    ];
    if (window.user) {
      defaultMenu[2].children = [
        {
          path: "/user/playlists",
          name: "我的歌单",
          code: "user",
        },
        {
          path: "/user/like",
          name: "收藏的歌单",
          code: "user",
        },
        {
          path: "/user/album",
          name: "收藏的专辑",
          code: "user",
        },
        {
          path: "/user/artists",
          name: "收藏的歌手",
          code: "user",
        },
        {
          path: "/user/cloud",
          name: "音乐云盘",
          code: "user",
        },
        {
          path: "/user",
          name: "的音乐库",
          code: "user",
        },
      ];
    }
    setMenu(defaultMenu);
  }, [window.user]);
  return (
    <div>
      <Header menu={menu} />
    </div>
  );
}

export default WorkSpace;
