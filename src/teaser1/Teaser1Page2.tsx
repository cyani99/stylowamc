import { useNavigate } from "react-router";
import dziennik from "./dziennik1-sm1.jpg";
import zdjecie from "./zdjecie1-sm1.jpg";

export default function Teaser1part2() {
  const navigator = useNavigate();

  const checkTimeWindow = () => {
    const now = new Date(); // Pobierz aktualną datę i godzinę
    const currentHour = now.getHours(); // Pobierz bieżącą godzinę (0-23)
    const currentMinute = now.getMinutes(); // Pobierz bieżącą minutę (0-59)
    // Sprawdź przedział godzin i minut
    if (
      (currentHour === 23 && currentMinute >= 0 && currentMinute <= 59)
    ) {
      return <a className="hidden">{process.env.REACT_APP_NIETYMRAZEMGRZYBKU} </a>
    }
    if (
      (currentHour === 22 && currentMinute >= 22 && currentMinute <= 37)
    ) {
      return <a className="hidden">{process.env.REACT_APP_WIADOMOSC1}</a>
    } else {
      return <a className="hidden">Niestety spóźniłeś się towarzyszu. Jestem tutaj tylko o 22:22 każdego dnia. </a>
    }
  };

  return (
    <div className="flex justify-center items-center ">
        <img className="w-1/2" src={zdjecie}></img>
        <h1>{checkTimeWindow()}</h1>
        
    </div>
  );
}
