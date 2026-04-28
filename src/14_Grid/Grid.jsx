const Grid = () => {
    return (
        <div>
        {/*    Grid Cols and Rows*/}
        {/*    <div className="grid grid-cols-3 gap-2 grid-rows-6 bg-gray-300">*/}
        {/*        <div className="p-10 border border-blue-600 bg-blue-100">Item 1</div>*/}
        {/*        <div className="p-10 border border-blue-600 bg-blue-100">Item 2</div>*/}
        {/*        <div className="p-10 border border-blue-600 bg-blue-100">Item 3</div>*/}
        {/*        <div className="p-10 border border-blue-600 bg-blue-100">Item 4</div>*/}
        {/*        <div className="p-10 border border-blue-600 bg-blue-100">Item 5</div>*/}
        {/*        <div className="p-10 border border-blue-600 bg-blue-100">Item 6</div>*/}
        {/*        <div className="p-10 border border-blue-600 bg-blue-100">Item 7</div>*/}
        {/*        <div className="p-10 border border-blue-600 bg-blue-100">Item 8</div>*/}
        {/*        <div className="p-10 border border-blue-600 bg-blue-100">Item 9</div>*/}
        {/*    </div>*/}

        {/*    Col and Row Span*/}
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-2 md:row-span-2 p-10 border border-blue-600 bg-blue-100">Item 1</div>
                <div className="p-10 border border-blue-600 bg-blue-100">Item 2</div>
                <div className="p-10 border border-blue-600 bg-blue-100">Item 3</div>
                <div className="p-10 border border-blue-600 bg-blue-100">Item 4</div>
                <div className="p-10 border border-blue-600 bg-blue-100">Item 5</div>
                <div className="p-10 border border-blue-600 bg-blue-100">Item 6</div>
                <div className="md:col-span-2 p-10 border border-blue-600 bg-blue-100">Item 7</div>
                <div className="p-10 border border-blue-600 bg-blue-100">Item 8</div>
                <div className="md:col-span-3 p-10 border border-blue-600 bg-blue-100">Item 9</div>
            </div>

        </div>
    )
}

export default Grid;