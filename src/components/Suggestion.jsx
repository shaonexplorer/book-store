import { useEffect } from "react";
import { useNavigate } from "react-router";

function Suggestion({ input, index, setIndex, setSuggestion }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (index > input.length - 1) {
      setIndex(-1);
    } else if (index < -1) setIndex(input.length - 1);
  }, [index]);

  if (input.length > 0)
    return (
      <div className="absolute hidden sm:flex w-[376px] bg-white top-[54px] left-0 z-30 border border-gray-300 ">
        <ul className="flex flex-col gap-4 px-4 py-2">
          {input.map((item, i) => (
            <li
              onKeyDown={(e) => {
                console.log(e.key);
              }}
              onClick={() => {
                navigate(`/search?query=${item.title}`);
                setSuggestion();
              }}
              className={`${i == index && "bg-lime-400"} cursor-pointer`}
              key={item._id}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Suggestion;
