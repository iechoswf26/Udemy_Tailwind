import img1 from '../assets/img1.jpg'

const Transform_Transition = () => {
    return (
        <div>

        {/*    No Transition*/}
            <button className="px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700">
                Click Me
            </button>

        {/*    Transition*/}
            <button className="px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700 hover:opacity-20 transition duration-1000">
                Click Me
            </button>


        {/*    Transition & Transform*/}
            <button className="px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700 hover:rotate-12 transition-transform duration-1000">
                Click Me
            </button>

            <img src={img1} alt="opening laptop in darkness" className="w-48 hover:rotate-180 hover:scale-75 hover:skew-x-12 transition duration-1000"/>


        </div>
    )
}
export default Transform_Transition;