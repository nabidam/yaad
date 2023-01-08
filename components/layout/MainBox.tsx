import MoreButton from "../button/MoreButton";
import Bold from "../icons/Bold";
import Calendar from "../icons/Calendar";
import Italic from "../icons/Italic";
import Strikethrough from "../icons/Strikethrough";
import Underline from "../icons/Underline";
import HorizontalDivider from "../misc/HorizontalDivider";

const MainBox = () => {
  return (
    <div className="h-screen w-full md:basis-3/5 p-[30px] flex flex-col gap-[30px]">
      <div className="title flex justify-between">
        <span className="text-[24px]">This is a test title!</span>
        <div className="flex items-center">
          <MoreButton />
        </div>
      </div>
      <div className="flex flex-col gap-[30px] overflow-auto scrollbar-hide">
        <div className="details flex justify-between">
          <div>
            <Calendar />
          </div>
          <span>21/06/2022</span>
        </div>
        <HorizontalDivider />
        <div className="toolbar flex gap-[30px] flex-wrap">
          <div>
            <select className="bg-bg w-[120px]">
              <option value="p">paragraph</option>
              <option value="h1">Headline 1</option>
              <option value="h2">Headline 2</option>
              <option value="h3">Headline 3</option>
            </select>
          </div>
          <div>
            <select className="bg-bg w-[60px]">
              <option value="16">16</option>
              <option value="h1">Headline 1</option>
              <option value="h2">Headline 2</option>
              <option value="h3">Headline 3</option>
            </select>
          </div>
          <div className="flex gap-[10px]">
            <div className="cursor-pointer">
              <Bold />
            </div>
            <div className="cursor-pointer">
              <Italic />
            </div>
            <div className="cursor-pointer">
              <Underline />
            </div>
            <div className="cursor-pointer">
              <Strikethrough />
            </div>
          </div>
          <div className="flex gap-[10px]">
            <div>media</div>
            <div>hyperlink</div>
          </div>
          <div>table</div>
        </div>
        <HorizontalDivider />
        <div className="body ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            eaque, distinctio deleniti voluptate dolor optio dolorum reiciendis
            a commodi veritatis eligendi tempore ullam. Reiciendis vitae labore
            alias laborum aliquid sequi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            reprehenderit suscipit placeat est ducimus eligendi rem ad eum
            magnam quia. Accusamus adipisci vero voluptatum doloribus nobis qui
            veritatis laborum optio.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            nostrum esse deleniti quasi vero ad veniam at optio nobis quia nisi
            molestias tenetur possimus laboriosam facilis impedit vel,
            asperiores voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            nostrum esse deleniti quasi vero ad veniam at optio nobis quia nisi
            molestias tenetur possimus laboriosam facilis impedit vel,
            asperiores voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            nostrum esse deleniti quasi vero ad veniam at optio nobis quia nisi
            molestias tenetur possimus laboriosam facilis impedit vel,
            asperiores voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            nostrum esse deleniti quasi vero ad veniam at optio nobis quia nisi
            molestias tenetur possimus laboriosam facilis impedit vel,
            asperiores voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            nostrum esse deleniti quasi vero ad veniam at optio nobis quia nisi
            molestias tenetur possimus laboriosam facilis impedit vel,
            asperiores voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            nostrum esse deleniti quasi vero ad veniam at optio nobis quia nisi
            molestias tenetur possimus laboriosam facilis impedit vel,
            asperiores voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            nostrum esse deleniti quasi vero ad veniam at optio nobis quia nisi
            molestias tenetur possimus laboriosam facilis impedit vel,
            asperiores voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            nostrum esse deleniti quasi vero ad veniam at optio nobis quia nisi
            molestias tenetur possimus laboriosam facilis impedit vel,
            asperiores voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            nostrum esse deleniti quasi vero ad veniam at optio nobis quia nisi
            molestias tenetur possimus laboriosam facilis impedit vel,
            asperiores voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            nostrum esse deleniti quasi vero ad veniam at optio nobis quia nisi
            molestias tenetur possimus laboriosam facilis impedit vel,
            asperiores voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            nostrum esse deleniti quasi vero ad veniam at optio nobis quia nisi
            molestias tenetur possimus laboriosam facilis impedit vel,
            asperiores voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            nostrum esse deleniti quasi vero ad veniam at optio nobis quia nisi
            molestias tenetur possimus laboriosam facilis impedit vel,
            asperiores voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            nostrum esse deleniti quasi vero ad veniam at optio nobis quia nisi
            molestias tenetur possimus laboriosam facilis impedit vel,
            asperiores voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            nostrum esse deleniti quasi vero ad veniam at optio nobis quia nisi
            molestias tenetur possimus laboriosam facilis impedit vel,
            asperiores voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            nostrum esse deleniti quasi vero ad veniam at optio nobis quia nisi
            molestias tenetur possimus laboriosam facilis impedit vel,
            asperiores voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            nostrum esse deleniti quasi vero ad veniam at optio nobis quia nisi
            molestias tenetur possimus laboriosam facilis impedit vel,
            asperiores voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainBox;
