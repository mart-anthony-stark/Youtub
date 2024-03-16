import LogoSVG from "./LogoSVG";

const Logo = () => {
  return (
    <div className="flex gap-1 items-start h-5 cursor-pointer">
      <LogoSVG />
      <div className="text-yt-gray -mt-2 text-[0.6rem]">PH</div>
    </div>
  );
};

export default Logo;
