import Image from "next/image";
import homeSvg from "@/images/home.svg";
import hover_homeSvg from "@/images/hover-home.svg";
import bookSvg from "@/images/book.svg";
import hover_bookSvg from "@/images/hover-book.svg";
import subjectSvg from "@/images/subject.svg";
import hover_subjectSvg from "@/images/hover-subject.svg";
import gotoSvg from "@/images/goto.svg";
import bookmarkSvg from "@/images/bookmark.svg";
import hover_bookmarkSvg from "@/images/hover-bookmark.svg";
import othersSvg from "@/images/others.svg";
import hover_othersSvg from "@/images/hover-others.svg";
import hover_gotoSvg from "@/images/hover-goto.svg";
import helpingHand from "@/images/helping-hand.svg";

import { useState } from "react";

const Sidebar = () => {
  const [menuItemsState, setMenuItemsState] = useState([
    ...Array(6).fill(false),
  ]);

  const menuItemsHoverHandler = (i) => {
    const newMenuItems = [...menuItemsState];
    newMenuItems[i] = true;
    setMenuItemsState(newMenuItems);
  };
  const menuItemsHoverOutHandler = (i) => {
    const newMenuItems = [...menuItemsState];
    newMenuItems[i] = false;
    setMenuItemsState(newMenuItems);
  };
  return (
    <>
      <div className="sidebar flex flex-col items-center m-4">
        <div className="menu_items h-full flex flex-col justify-center gap-4">
          <Image
            className="p-3 hover:bg-[#f8f8f9] rounded-lg"
            onMouseLeave={() => menuItemsHoverOutHandler(0)}
            onMouseEnter={() => menuItemsHoverHandler(0)}
            src={menuItemsState[0] ? hover_homeSvg : homeSvg}
            alt="home icon"
            width={56}
            height={56}
          />
          <Image
            className="p-3 hover:bg-[#f8f8f9] rounded-lg"
            onMouseLeave={() => menuItemsHoverOutHandler(1)}
            onMouseEnter={() => menuItemsHoverHandler(1)}
            src={menuItemsState[1] ? hover_bookSvg : bookSvg}
            alt="home icon"
            width={56}
            height={56}
          />
          <Image
            className="p-3 hover:bg-[#f8f8f9] rounded-lg"
            onMouseLeave={() => menuItemsHoverOutHandler(2)}
            onMouseEnter={() => menuItemsHoverHandler(2)}
            src={menuItemsState[2] ? hover_subjectSvg : subjectSvg}
            alt="home icon"
            width={56}
            height={56}
          />
          <Image
            className="p-3 hover:bg-[#f8f8f9] rounded-lg"
            onMouseLeave={() => menuItemsHoverOutHandler(3)}
            onMouseEnter={() => menuItemsHoverHandler(3)}
            src={menuItemsState[3] ? hover_bookmarkSvg : bookmarkSvg}
            alt="home icon"
            width={56}
            height={56}
          />
          <Image
            className="p-3 hover:bg-[#f8f8f9] rounded-lg"
            onMouseLeave={() => menuItemsHoverOutHandler(4)}
            onMouseEnter={() => menuItemsHoverHandler(4)}
            src={menuItemsState[4] ? hover_othersSvg : othersSvg}
            alt="home icon"
            width={56}
            height={56}
          />
          <Image
            className="p-3 hover:bg-[#f8f8f9] rounded-lg"
            onMouseLeave={() => menuItemsHoverOutHandler(5)}
            onMouseEnter={() => menuItemsHoverHandler(5)}
            src={menuItemsState[5] ? hover_gotoSvg : gotoSvg}
            alt="home icon"
            width={56}
            height={56}
          />
        </div>
        <div className="donate">
          <button className="bg-primary p-3 rounded-lg">
            <Image src={helpingHand} alt="help" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
