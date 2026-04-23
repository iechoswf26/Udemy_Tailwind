const ContainerSpacing = () => {
    return (
        <div   className="container mx-auto">

            {/*Container*/}
            <div>
                <article>
                    <h3>Article One</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem laboriosam libero molestiae recusandae accusantium
                        voluptates? Expedita dignissimos amet eveniet dolore nobis odio a
                        sunt, maiores quasi. Modi amet quos dolores!
                    </p>
                </article>
            </div>


        {/*    Margin*/}
            <div className="bg-slate-100 m-2">Hello World</div>
            <div className="bg-slate-100 ml-4">Hello World</div>
            <div className="bg-slate-100 mr-4">Hello World</div>
            <div className="bg-slate-100 mt-4">Hello World</div>
            <div className="bg-slate-100 mb-4">Hello World</div>
            <div className="bg-pink-300 mt-[20px]">Hello World</div>


        {/*    Padding*/}
            <div className="bg-green-100 p-2">Hello World</div>
            <div className="bg-green-100 pl-4">Hello World</div>
            <div className="bg-green-100 pr-4">Hello World</div>
            <div className="bg-green-100 pt-4">Hello World</div>
            <div className="bg-green-100 pb-4">Hello World</div>
            <div className="bg-blue-200 mt-6">Hello World</div>


        {/*    Space Between X*/}
            <div className="flex mt-24 space-x-10">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
                <div>Item 5</div>
                <div>Item 6</div>

            </div>


        {/*    Space Between Y*/}
            <div className="flex flex-col mt-24 mb-24 space-y-10">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
                <div>Item 5</div>
                <div>Item 6</div>

            </div>


        </div>
    )
}

export default ContainerSpacing;