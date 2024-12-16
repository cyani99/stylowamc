import { useNavigate } from "react-router";
import dziennik from "./zdjecie2-sm2.jpg";

export default function Teaser2() {
    const navigator = useNavigate();


  return (
    <div className="flex justify-center items-center ">
        <img onClick={()=>{
            navigator('/ontambyl')
        }} className="w-1/2" src={dziennik}></img>
    </div>
  );
}
