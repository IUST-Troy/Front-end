import React from "react";
import places from "./places";
import { BsMap } from "react-icons/bs";
import { Select } from "flowbite-react";

const Ecomp = ({ codv, hcodv, cdv, hcdv }) => {
  const [v,setV] = React.useState("");
  const [c,setC] = React.useState("");
  console.log(codv, hcodv, cdv, hcdv);
  return(<>
    <div className="md:w-40 w-full">
      <div className="flex justify-start items-center pl-1 text-gray-700">
        <BsMap className="mr-1" />
        <label>Country:</label>
      </div>
      <Select
        id="country"
        class="w-full md:w-80 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
        value={v}
        onChange={(e) => setV(e.target.value)}
      >
        <option>Select</option>
        {places.map((country) => {
          return <option>{country.Name}</option>;
        })}
      </Select>
    </div>
    <div className="">
      <div className="flex justify-start items-center pl-1 text-gray-700">
        <BsMap className="mr-1" />
        <label>City:</label>
      </div>
      <Select
        class="w-full md:w-80 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
        value={c}
        onChange={(e) => setC(e.target.value)}
      >
        <option>Select</option>
        {v === ("Select" || "" || null || undefined)
          ? 1
          : places.find((country) => country.Name === v) === undefined
          ? 1
          : places
              .find((country) => country.Name === v)
              .Cities.sort((x) => x)
              .map((city) => {
                return <option>{city}</option>;
              })}
      </Select>
    </div>
  </>);
};

export default Ecomp;
