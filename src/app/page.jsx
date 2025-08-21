import Image from "next/image";
import SearchHeader from "./Components/SearchHeader";
import PokeData from "./Components/PokeData";

export default function Home() {
  return (
    <div>
      <SearchHeader />
      <PokeData/>
    </div>
  );
}
