import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const images = [
  
  process.env.PUBLIC_URL + "images/1.png",
  process.env.PUBLIC_URL + "images/2.jpg",
  process.env.PUBLIC_URL + "images/3.jpg",
  process.env.PUBLIC_URL + "images/4.jpg",
  
];

function App(){
    return (
      <div>       
        <Zoom scale={1.4} indicators={true} duration="1000">
            {images.map((each, index) => (
                <div key={index} style={{ width: "100%" }}>
                    <img style={{ objectFit: "cover", width: "100%", height: "90vh" }} alt="Slide" src={each} />
                </div>
            ))}
        </Zoom>
      </div>
    )
}

export default App;
