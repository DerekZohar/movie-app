import getImage from "../../shared/getImage";

export const Cast = ({ cast }: any) => {
  return (
    <div className="flex gap-4 items-center">
      <img
        src={
          cast.profile_path == null
            ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc4rdi7yIcgCYMI76dCj_182YiiGyPN-TXzQ&usqp=CAU"
            : getImage(cast.profile_path, "/original")
        }
        alt=""
        className="rounded-full h-16 w-16 object-cover"
      />
      <div>
        <h1 className="text-lg font-bold">{cast.name}</h1>
        <p className="text-sm text-gray-400 dark:text-gray-300">
          {cast.character}
        </p>
      </div>
    </div>
  );
};
