import { UilLocationPoint, UilSearch } from "@iconscout/react-unicons";
// import { AsyncPaginate } from "react-select-async-paginate";
import Search from "./Search";
function SearchAndLocation() {
  return (
    <section className="flex flex-row py-6">
      <div className="flex flex-row justify-center items-center w-3/4 space-x-4">
        <Search />
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
export default SearchAndLocation;
