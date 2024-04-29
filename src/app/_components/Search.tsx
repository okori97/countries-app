export function Search() {
  return (
    <div className="flex w-96 flex-row items-center  gap-4 border px-5 py-1 text-sm shadow-md">
      <button className=" ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="grey"
          className=" h-8 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <input
        className=" focus: h-10 w-full outline-none"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}
