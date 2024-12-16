import { useNavigate } from "react-router";
import dziennik from "./dziennik1-sm1.jpg";
import zdjecie from "./zdjecie1-sm1.jpg";

export default function Teaser1part2() {
  const navigator = useNavigate();


  return (
    <div className="flex justify-center items-center ">
        <img className="w-1/2" src={zdjecie}></img>
        <a className="hidden">On Cię widzi! Pamiętaj, że Światowy Dzień Języka Arabskiego jest bardzo istotny, szczególnie jeśli mówimy o godzinie 22:22 ⌛. </a>
    </div>
  );
}
