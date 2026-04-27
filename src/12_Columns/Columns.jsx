import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

const Columns = () => {
    return (
        <div>
        {/*    Columns*/}
            <div className="columns-4 gap-0">
                <img className="w-full" src={img1} alt="open laptop in darkness"/>
                <img className="w-full" src={img2} alt="coding"/>
                <img className="w-full" src={img3} alt="white robot"/>
                <img className="w-full" src={img4} alt="laptop on chair"/>
            </div>

            <div className="columns-xs">
                <img className="w-full" src={img1} alt="open laptop in darkness"/>
                <img className="w-full" src={img2} alt="coding"/>
                <img className="w-full" src={img3} alt="white robot"/>
                <img className="w-full" src={img4} alt="laptop on chair"/>
            </div>


        {/*    Aspect Ratio*/}
            <div className="columns-4 gap-0">
                <img className="w-full aspect-video" src={img1} alt="open laptop in darkness"/>
                <img className="w-full" src={img2} alt="coding"/>
                <img className="w-full aspect-square" src={img3} alt="white robot"/>
                <img className="w-full" src={img4} alt="laptop on chair"/>
            </div>

        </div>
    )
}

export default Columns;