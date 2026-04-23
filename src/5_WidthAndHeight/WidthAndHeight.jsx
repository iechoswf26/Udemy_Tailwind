const WidthAndHeight = () => {
    return (
        <div>

        {/*    Width*/}
            <div className="bg-black text-white w-12">Hello</div>
            <div className="bg-black text-white w-48">Hello</div>
            <div className="bg-black text-white w-96">Hello</div>

        {/*    Percentages*/}
            <div className="bg-green-700 text-white w-1/4">Hello</div>
            <div className="bg-green-700 text-white w-1/3">Hello</div>
            <div className="bg-green-700 text-white w-1/2">Hello</div>


        {/*    Width of the Viewport*/}
            <div className="bg-blue-500 text-white w-screen">Hello</div>

        {/*    100% of Container*/}
            <div className="bg-purple-300 text-black w-full">Hello</div>

        {/*    Arbitrary Width*/}
            <div className="bg-orange-600 text-black w-[300px]">Hello</div>


        {/*    Max Width*/}
            <div className="bg-slate-400 max-w-lg mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda, atque aut cupiditate dignissimos iste molestiae, nemo porro soluta temporibus voluptas voluptate voluptatem. Adipisci aliquid beatae cum, ea quod unde.</div>

        {/*    Height (Most of the same options as widths)*/}
            <div className="flex items-end">
                <div className="bg-orange-500 w-20 h-24">Hello</div>
                <div className="bg-orange-500 w-20 h-32">Hello</div>
                <div className="bg-orange-500 w-20 h-40">Hello</div>
                <div className="bg-orange-500 w-20 h-48">Hello</div>
                <div className="bg-orange-500 w-20 h-64">Hello</div>
                <div className="bg-orange-500 w-20 h-96">Hello</div>
            </div>

        {/*    Height (Most of the same options as widths)*/}
            <div className="bg-pink-500 text-white h-screen">Hello</div>


        </div>
    )
}

export default WidthAndHeight;