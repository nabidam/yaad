import NewItemButton from "../button/NewItemButton";
import Archive from "../icons/Archive";
import FileDoc from "../icons/FileDoc";
import Folder from "../icons/Folder";
import FolderOpen from "../icons/FolderOpen";
import Magnifier from "../icons/Magnifier";
import Star from "../icons/Star";
import TrashCan from "../icons/TrashCan";

const Sidebar = () => {
  return (
    <div className="h-screen basis-1/5 py-[30px] hidden md:flex flex-col gap-[30px] align-middle">
      <div className="flex flex-col gap-[30px]">
        <div className="mx-[20px] flex justify-between">
          <div className="font-logo text-[20px]">Yaaaad</div>
          <div className="flex items-center h-[30px] w-[30px] cursor-pointer">
            <Magnifier />
          </div>
        </div>
        <div className="flex justify-center">
          <NewItemButton />
        </div>
      </div>
      <div className="flex flex-col gap-[30px] overflow-auto scrollbar-hide">
        <div className="flex flex-col gap-[8px]">
          <div className="text-[10px] px-[20px]">Recents</div>
          <div className="items">
            <div className="flex justify-start gap-[20px] cursor-pointer bg-selected-recent-bg px-[20px] py-[10px]">
              <div>
                <FileDoc />
              </div>
              <span>This is note 1</span>
            </div>
            <div className="flex justify-start gap-[20px] cursor-pointer px-[20px] py-[10px]">
              <div>
                <FileDoc />
              </div>
              <span className="text-menu-item-text">This is note 1</span>
            </div>
            <div className="flex justify-start gap-[20px] cursor-pointer px-[20px] py-[10px]">
              <div>
                <FileDoc />
              </div>
              <span className="text-menu-item-text">This is note 1</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="text-[10px] px-[20px]">Folders</div>
          <div className="items">
            <div className="flex justify-start gap-[20px] cursor-pointer bg-note-item-bg px-[20px] py-[10px]">
              <div>
                <FolderOpen />
              </div>
              <span>This is note 1</span>
            </div>
            <div className="flex justify-start gap-[20px] cursor-pointer px-[20px] py-[10px]">
              <div>
                <Folder />
              </div>
              <span className="text-menu-item-text">This is note 1</span>
            </div>
            <div className="flex justify-start gap-[20px] cursor-pointer px-[20px] py-[10px]">
              <div>
                <Folder />
              </div>
              <span className="text-menu-item-text">This is note 1</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="text-[10px] px-[20px]">More</div>
          <div className="items">
            <div className="flex justify-start gap-[20px] cursor-pointer px-[20px] py-[10px]">
              <div>
                <Star />
              </div>
              <span className="text-menu-item-text">Favorites</span>
            </div>
            <div className="flex justify-start gap-[20px] cursor-pointer px-[20px] py-[10px]">
              <div>
                <TrashCan />
              </div>
              <span className="text-menu-item-text">Trash</span>
            </div>
            <div className="flex justify-start gap-[20px] cursor-pointer px-[20px] py-[10px]">
              <div>
                <Archive />
              </div>
              <span className="text-menu-item-text">Archived Notes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
