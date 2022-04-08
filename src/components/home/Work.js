import React from 'react'
import "./work.css"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Pic1 from "../../assets/Chamkaur_Chap11_Scene11-15_Draft01.jpg"
import Pic2 from "../../assets/Chamkaur_Chap11_Scribbles_Scene_ALL_Draft_03.jpg"
import Pic3 from "../../assets/Shot 15_a.jpg"

const Work = () => {

    const images = [
    Pic1,
    Pic2,
    Pic3,
    Pic1,
    Pic2,
    Pic3
    ]
    


  return (
    <div className='work'>
        <div className="work-center">
        <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 1, 900: 2}}
            >
                <Masonry columnsCount={2} gutter="20px">
                {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", height:'auto', display: "block"}}
                            alt=""
                        />
                    ))}
                    <div>More Projects</div>
                </Masonry>
            </ResponsiveMasonry>
            {/* <div className="work-grid">
                {images.map((image, i) => {
return (
    <div className="work-grid-item" key={i}>
        <img src={image} alt="" />
    </div>
)
                } )}
                </div> */}

        </div>

    </div>
  )
}

export default Work