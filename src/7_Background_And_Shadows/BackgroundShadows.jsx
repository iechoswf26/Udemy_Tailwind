import img1 from '../assets/img1.jpg'

const BackgroundShadows = () => {
    return (
        <div>

        {/*    Background Classes*/}
            <div className="h-64 w-72 bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${img1})`}}></div>

        {/*    Gradients*/}
            <div className="h-24 bg-gradient-to-r from-cyan-500 to-blue-500"></div>


        {/*    Shadows*/}
            <div className="w-96 mt-6 ml-4 p-3 shadow-inner">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, esse non? Aut culpa deleniti error illum omnis, quia suscipit tempore? Commodi facilis fugiat impedit natus placeat provident sunt velit vero?
            </div>


            <div className="w-96 mt-6 ml-4 p-3 shadow-2xl shadow-blue-700/50">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, esse non? Aut culpa deleniti error illum omnis, quia suscipit tempore? Commodi facilis fugiat impedit natus placeat provident sunt velit vero?
            </div>


        {/*    Mix Blend*/}
            <div className="flex justify-center -space-x-24">
                <div className="mix-blend-multiply bg-blue-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores aut delectus dolorem doloribus eos fugit id illum ipsa modi nulla odio, officia quia rem similique sit veniam! Consectetur, sunt?</div>

                <div className="mix-blend-multiply bg-pink-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque error, et facilis incidunt maiores, natus, nihil obcaecati quaerat quis sapiente sed? Delectus deleniti hic incidunt, maxime obcaecati provident sapiente.
                </div>
            </div>


        </div>
    )
}

export default BackgroundShadows;