// Components
import TeamCarousel from "../TeamCarousel";

// Sections content data
const sectionsContentData = [
  {
    key: "about",
    title: "About us",
    content: (
      <p>
       "Unleashing Imagination: Building Next-Level Metaverse's and Games with Immersive Tech".
      </p>
    ),
  },
  { key: "team", title: "Our team", content: <TeamCarousel /> },
  {
    key: "credits",
    title: "Contact Us",
    content: (
      <ul className="credits">
        <li>
          <a href="https://www.chingu.io/">Hyderabad,Telangana 500080</a>
        </li>
        <li>
          <a href="https://threejs-journey.com/">9581002852</a>
        </li>
        <li>
          <a href="https://poly.pizza">studios@harsar.in</a>
        </li>
       
      </ul>
    ),
  },
];

export default sectionsContentData;
