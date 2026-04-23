const Borders = () => {
    return (
        <div>
        {/*    Border Width & Colors*/}
            <div className="w-96 m-3 p-5 border">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, debitis ea excepturi labore ratione ut.
            </div>

            <div className="w-96 m-3 p-5 border-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, debitis ea excepturi labore ratione ut.
            </div>

            <div className="w-96 m-3 p-5 border-6 border-red-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, debitis ea excepturi labore ratione ut.
            </div>

            <div className="w-96 m-3 p-5 border-x-4 border-yellow-800">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, debitis ea excepturi labore ratione ut.
            </div>

            <div className="w-96 m-3 p-5 border-y-4 border-cyan-800">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, debitis ea excepturi labore ratione ut.
            </div>

            <div className="w-96 m-3 p-5 border-t-8 border-purple-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, debitis ea excepturi labore ratione ut.
            </div>


        {/*    Border Radius*/}
            <div className="w-96 m-3 p-5 border-2 rounded border-orange-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, debitis ea excepturi labore ratione ut.
            </div>

            <div className="w-96 m-3 p-5 border-2 rounded-3xl border-orange-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, debitis ea excepturi labore ratione ut.
            </div>

            <div className="w-96 m-3 p-5 border-2 rounded-b-3xl border-red-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, debitis ea excepturi labore ratione ut.
            </div>

            <div className="w-96 m-3 p-5 border-2 rounded-b-3xl rounded-r-3xl border-green-800">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, debitis ea excepturi labore ratione ut.
            </div>


        {/*    Outline*/}

            <button className="outline outline-4 outline-offset-2 outline-red-500 ml-10 mb-10">ASWF</button>

        </div>
    )
}

export default Borders;