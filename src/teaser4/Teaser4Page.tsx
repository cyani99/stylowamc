import { useNavigate } from "react-router";
import dziennik from "./zdjecie4-sm4.jpg";

export default function Teaser4() {
    const navigator = useNavigate();

  return (
    <a className="flex justify-center items-center ">
        <img onClick={()=>{
            navigator('/')
        }} className="w-1/2" src={dziennik}></img>
    </a>
  );
}
