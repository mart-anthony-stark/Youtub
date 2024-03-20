import Link from "next/link";
import LogoSVG from "./LogoSVG";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex gap-1 items-start h-5 cursor-pointer select-none">
        <LogoSVG />
        <div className="text-yt-gray -mt-2 text-[0.6rem]">PH</div>
      </div>
    </Link>
  );
};

export default Logo;
