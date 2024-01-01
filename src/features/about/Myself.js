import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import palmela from "./../../assets/palmela.svg";
import lisboa from "./../../assets/lisboa.svg";
import london from "./../../assets/london.svg";

function Myself() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel showThumbs={false} showStatus={false} showIndicators>
      <div>
        <img src={palmela} style={{ width: "100%", height: "100%" }} />
        <p className="legend">Spent my childhood in Palmela, Portugal</p>
      </div>
      <div>
        <img src={lisboa} style={{ width: "100%;", height: "100%;" }} />
        <p className="legend">
          University and first years of work in Lisbon, Portugal
        </p>
      </div>
      <div>
        <img src={london} style={{ width: "50%", height: "50%" }} />
        <p className="legend">In 2016 moved to London, UK</p>
      </div>
    </Carousel>
  );
}
export default Myself;
