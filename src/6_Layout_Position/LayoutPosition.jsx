const LayoutPosition = () => {
    return (
        <div>
        {/*    Positioning*/}
            <div className="relative w-1/2 h-12 bg-red-200">
                <p>Parent Element</p>
                <div className="absolute bottom-0 right-0 bg-red-500">
                    <p>Absolute Child</p>
                </div>
            </div>



        {/*    Top Left Corner*/}
            <div className="relative h-32 w-32 bg-yellow-100">
                <div className="absolute left-0 top-0 h-16 w-16 bg-yellow-300"></div>
            </div>


        {/*    Top Right Corner*/}
            <div className="relative h-32 w-32 bg-yellow-100">
                <div className="absolute right-0 top-0 h-16 w-16 bg-yellow-300"></div>
            </div>


        {/*    Bottom Left Corner*/}
            <div className="relative h-32 w-32 bg-yellow-100">
                <div className="absolute left-0 bottom-0 h-16 w-16 bg-yellow-300"></div>
            </div>


        {/*    Bottom Right Corner*/}
            <div className="relative h-32 w-32 bg-yellow-100">
                <div className="absolute right-0 bottom-0 h-16 w-16 bg-yellow-300"></div>
            </div>


        {/*    Span Top Edge*/}
            <div className="relative h-32 w-32 bg-yellow-100">
                <div className="absolute inset-x-0 top-0 h-16 bg-yellow-300"></div>
            </div>


        {/*    Span Left Edge*/}
            <div className="relative h-32 w-32 bg-yellow-100">
                <div className="absolute inset-y-0 left-0 w-16 bg-yellow-300"></div>
            </div>


        {/*    Span Right Edge*/}
            <div className="relative h-32 w-32 bg-yellow-100">
                <div className="absolute inset-y-0 right-0 w-16 bg-yellow-300"></div>
            </div>


        {/*    Span Bottom Edge*/}
            <div className="relative h-32 w-32 bg-yellow-100">
                <div className="absolute inset-x-0 bottom-0 h-16 bg-yellow-300"></div>
            </div>


        {/*    Display Classes*/}
            <div>
                Lorem ipsum dolor sit amet, consectetur <span className="inline font-bold border border-red-500">This is inline</span> adipisicing elit. Ab animi architecto assumenda dolor doloribus ducimus eos, ex illo illum impedit labore molestias non sint. Blanditiis <span className="inline-block font-bold border border-red-500">This is inline-block</span> consequatur eos esse, neque nihil pariatur. Asperiores eaque necessitatibus non placeat repellat reprehenderit repudiandae tempora. <span className="block font-bold border border-red-500">This is block</span> Consectetur doloremque earum facere nihil praesentium quae quibusdam quod <span className="hidden font-bold border border-red-500">This is hidden</span> repudiandae sit. Ad aperiam asperiores blanditiis delectus ducimus facilis quisquam quos.
            </div>


        {/*    Z-Index*/}
            <div className="relative h-36">
                <div className="absolute left-10 w-24 h-24 bg-blue-300 z-40">1</div>
                <div className="absolute left-20 w-24 h-24 bg-blue-400">2</div>
                <div className="absolute left-40 w-24 h-24 bg-blue-500 z-10">3</div>
                <div className="absolute left-60 w-24 h-24 bg-blue-600 z-20">4</div>
                <div className="absolute left-80 w-24 h-24 bg-blue-700 z-30">5</div>
            </div>


        {/*    Floats*/}
            <div className="w-/12">
                <img
                    className="h-48 w-48 float-right m-4"
                    src="/src/assets/img1.jpg"
                    alt="Open laptop in darkness"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequuntur culpa delectus dolorem ea eveniet iure omnis recusandae! Ab alias beatae, debitis expedita inventore laborum porro qui! Est, veniam, voluptate.</p>
            </div>

        </div>
    )
}

export default LayoutPosition;