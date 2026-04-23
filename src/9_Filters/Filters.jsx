import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'

const Filters = () => {
    return (
        <div>
        {/*    Blur*/}
            <div className="blur-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ex fugit laudantium minima nemo nostrum!
            </div>

            <img className="blur-xl" src={img1} alt="laptop opening in darkness"/>

        {/*    Brightness*/}
            <img className="brightness-50" src={img2} alt="code on screen"/>
            <img className="brightness-75" src={img2} alt="code on screen"/>
            <img className="brightness-100" src={img2} alt="code on screen"/>

        {/*    Contrast*/}
            <img className="contrast-0" src={img3} alt="white robot"/>
            <img className="contrast-50" src={img3} alt="white robot"/>
            <img className="contrast-175" src={img3} alt="white robot"/>

        {/*    Grayscale*/}
            <img className="grayscale" src={img4} alt="laptop on chair"/>



        {/*    Invert*/}
            <img className="invert" src={img4} alt="laptop on chair"/>



        {/*    Sepia*/}
            <img className="sepia" src={img4} alt="laptop on chair"/>



        {/*    Hue Rotate*/}
            <img className="hue-rotate-15" src={img5} alt="inside computer"/>
            <img className="hue-rotate-60" src={img5} alt="inside computer"/>
            <img className="hue-rotate-90" src={img5} alt="inside computer"/>
            <img className="hue-rotate-180" src={img5} alt="inside computer"/>


        </div>
    )
}

export default Filters;