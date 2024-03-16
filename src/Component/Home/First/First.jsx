import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  position:'relative',
  top:"1rem",
  left:"-28rem",
  fontSize:"36px",
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition:"center",
  height: '70vh'
}
const slideImages = [
  {
    url:'b1.png',
    caption: '<h5>Just Dropped</h5> <h1>Feel <br/>Authentic <br/> Peace</h1>'
  },
  {
    url:'b2.jpg',
    caption: '<h5>Save Time</h5> <h1>Connect</h1> <h3>With Us 🤝</h3>'
  },
  {
    url:'b3.png',
    caption: '<h5>Built Trust</h5> <h1>And Save</h1> <h3>Time 👁️</h3>'
  },
 
];
 const First = () => {
  return (
    <>
         <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}dangerouslySetInnerHTML={{__html: slideImage.caption}}></span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    </>
  )
}
export default First

