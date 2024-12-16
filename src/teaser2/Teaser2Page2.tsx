import { useNavigate } from "react-router";
import zdjecie from "./dziennik2-sm2.jpg";

export default function Teaser2part2() {

  return (
    <div className="flex justify-center items-center ">
        <img className="w-1/2" src={zdjecie}></img>
        <a href="https://youtu.be/xLXuXuGSMBA?si=SjbhgBN49Ew3YBkd&t=172">On cały czas tam był</a>
    </div>
  );
}
