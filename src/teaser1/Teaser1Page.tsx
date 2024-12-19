import { useNavigate } from "react-router";
import dziennik from "./dziennik1-sm1.jpg";
import zdjecie from "./zdjecie1-sm1.jpg";

export default function Teaser1() {
    const navigator = useNavigate();


  return (
    <div className="flex justify-center items-center ">
        <img onClick={()=>{
                 const nav = process.env.REACT_APP_SPRYTNIE_UKRYTY_URL2
                 navigator(nav!);
        }} className="w-1/2" src={dziennik}></img>
    </div>
  );
}
