import { useNavigate } from "react-router";
import dziennik from "./zdjecie3-sm3.jpg";

export default function Teaser3() {
    const navigator = useNavigate();
    console.log("Twój pomocnik ma dla Ciebie wiadomość, wróć do niego jutro pomiędzy 23:00 a 00:00")

  return (
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="flex justify-center items-center ">
        <img onClick={()=>{
            navigator('/')
        }} className="w-1/2" src={dziennik}></img>
    </a>
  );
}
