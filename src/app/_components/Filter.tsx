export function Filter() {
  return (
    <div className="flex max-w-96 flex-row items-center border  p-4 text-sm shadow-md">
      <select name="Region" className="pr-5" id="region">
        <option value="default">Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
