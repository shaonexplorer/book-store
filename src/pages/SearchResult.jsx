import { useSearchParams } from "react-router";
import bookData from "../utils/BookData";
import SideBar from "../components/SideBar";
import BookCard01 from "../components/BookCard01";
import Bar from "../components/Bar";
import { useEffect, useState } from "react";
import NotFound from "../components/NotFound";

function SearchResult() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");

  // let currentBooks = bookData;

  const [currentBooks, setCurrentBooks] = useState(bookData);

  const itemsPerPage = 3;
  let totalPages = Math.ceil(currentBooks.length / itemsPerPage);
  const [pageNo, setPageNo] = useState(1);

  const startIndex = (pageNo - 1) * itemsPerPage;
  const endIndex = pageNo * itemsPerPage;

  useEffect(() => {
    if (query) {
      setCurrentBooks(
        bookData.filter((book) =>
          book.title.toLowerCase().includes(query.toLowerCase())
        )
      );
      totalPages = Math.ceil(currentBooks.length / itemsPerPage);
    }

    if (category && category != "all") {
      setCurrentBooks(
        bookData.filter((book) => book.category == category?.toLowerCase())
      );
      totalPages = Math.ceil(currentBooks.length / itemsPerPage);
    } else if (category && category == "all") {
      setCurrentBooks(bookData);
      totalPages = Math.ceil(currentBooks.length / itemsPerPage);
    }

    if (sort == 1) {
      setCurrentBooks([
        ...currentBooks.sort((a, b) => b.newPrice - a.newPrice),
      ]);
    } else if (sort == 2) {
      setCurrentBooks([
        ...currentBooks.sort((a, b) => a.newPrice - b.newPrice),
      ]);
    } else if (sort == 3) {
      setCurrentBooks([
        ...currentBooks.sort((a, b) => a.title.localeCompare(b.title)),
      ]);
    } else if (sort == 4) {
      setCurrentBooks([
        ...currentBooks.sort((a, b) => b.title.localeCompare(a.title)),
      ]);
    }
  }, [sort, query, category]);

  useEffect(() => {
    setPageNo(1);
  }, [category]);

  // if (query && currentBooks.length == 0) return <h1>No books found</h1>;

  if (query && currentBooks.length == 0) return <NotFound />;

  return (
    <div className="w-screen sm:w-[1180px] h-full mx-auto flex gap-[30px] pt-[50px] overflow-hidden">
      <div className="hidden sm:flex">
        <SideBar />
      </div>

      <div className="w-[960px] h-full flex flex-col gap-[20px]">
        <Bar itemsLength={currentBooks.length} />
        <div className="w-[960px] flex flex-col gap-[26px]">
          {currentBooks.slice(startIndex, endIndex).map((book) => (
            <BookCard01 book={book} key={book._id} />
          ))}
        </div>
        {/* ---------------------------pagination */}
        <div className="w-screen sm:w-[960px] h-[40px] sm:h-[60px] bg-[#F1F3F4] flex justify-center items-center px-[20px] py-[20px] ">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              className={`${
                pageNo == index + 1
                  ? "bg-[#40BFFF] text-white"
                  : "bg-[#F1F3F4] text-[#22262A]"
              } w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] font-inter text-[14px] sm:text-[18px] flex justify-center items-center focus:outline-none`}
              onClick={() => setPageNo(index + 1)}
              key={index}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
