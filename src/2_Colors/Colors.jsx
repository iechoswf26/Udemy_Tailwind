const Colors = () => {
    return (
        <div>
            {/*Text Colors*/}
            <div>
                <p className="text-black">Tailwind is awesome</p>
                <p className="text-white">Tailwind is awesome</p>
                <p className="text-red-500">Tailwind is awesome</p>
                <p className="text-emerald-500">Tailwind is awesome</p>
                <p className="text-zinc-500">Tailwind is awesome</p>
                <p className="text-purple-500">Tailwind is awesome</p>
            </div>

            {/*    Background Colors*/}
            <div>
                <p className="bg-slate-600 text-white">Tailwind is awesome</p>
                <p className="bg-emerald-200 text-blue-950">Tailwind is awesome</p>
                <p className="bg-yellow-200 text-black">Tailwind is awesome</p>
                <p className="bg-amber-400 text-black">Tailwind is awesome</p>
                <p className="bg-orange-700 text-white">Tailwind is awesome</p>
            </div>

            {/*    Text Underline*/}

            <div>
                <p className="underline">Tailwind is awesome</p>
                <p className="underline decoration-emerald-600">Tailwind is awesome</p>
                <p className="underline decoration-yellow-800">Tailwind is awesome</p>
            </div>


            {/*    Border Colors*/}
            <div>
                <input type="text" className="border border-blue-450"/>
                <br/>
                <input type="text" className="border border-purple-300"/>
                <br/>
                <input type="text" className="border border-red-200"/>
            </div>


            {/*    Divide Colors*/}

            <div className="divide-y divide-blue-600">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
                <div>Item 5</div>
            </div>



            {/*    Outline Colors*/}

            <button className="outline outline-green-500">Click Me</button>
            <br/>


            {/*    Box Shadow Colors (Opacity defaults to 100, but you can set it.)*/}
            <button className="shadow-lg bg-cyan-500 shadow-cyan-500">Subscribe</button>

            <button className="shadow-lg bg-cyan-500 shadow-purple-500/50">Subscribe</button>

            {/*    Accent Colors*/}

            <input type="checkbox" className="accent-purple-500" checked/>

            <input type="checkbox" className="accent-cyan-500" checked/>

            {/*    Arbitrary Colors*/}
            <div className="bg-[#427fab]">Hello World</div>

            <div className="bg-[#427fab]">Hello World</div>

            <div className="bg-[rgb(255,0,0)]">Hello World</div>

            <div className="bg-[steelblue]">Hello World</div>





        </div>
    )
}

export default Colors;