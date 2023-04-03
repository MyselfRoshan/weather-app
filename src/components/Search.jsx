import { UilLocationPoint, UilSearch } from "@iconscout/react-unicons";
function Search() {
  return (
    <section className="flex flex-row my-6 py-6">
      <div className="flex flex-row justify-center items-center w-3/4 space-x-4">
        <input
          type="text"
          className="w-full p-2 focus:outline-none shadow-xl capitalize placeholder:lowercase"
          placeholder="City search..."
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row items-center justify-center w-1/4 ">
        <button className="text-white text-xl cursor-pointer">&deg;C</button>
        <p className="text-white text-xl mx-1">|</p>
        <button className="text-white text-xl cursor-pointer">&deg;F</button>
      </div>
    </section>
  );
}
export default Search;
