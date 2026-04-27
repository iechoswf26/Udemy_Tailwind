const Flexbox = () => {
    return (
        <>
        {/*    Flex and Alignment*/}
        {/*    <div className="flex flex-wrap items-center justify-between h-72 w-full bg-gray-200">*/}
        {/*        <div className="p-10 border border-blue-300 bg-blue-100">01</div>*/}
        {/*        <div className="p-10 border border-blue-300 bg-blue-100">02</div>*/}
        {/*        <div className="p-10 border border-blue-300 bg-blue-100">03</div>*/}
        {/*        <div className="p-10 border border-blue-300 bg-blue-100">04</div>*/}
        {/*    </div>*/}

        {/*    Flex Column, Gap and Order*/}
        {/*    <div className="flex flex-col gap-4 items-center justify-between h-72 w-full bg-gray-200">*/}
        {/*        <div className="order-3 p-10 border border-blue-300 bg-blue-100">01</div>*/}
        {/*        <div className="order-2 p-10 border border-blue-300 bg-blue-100">02</div>*/}
        {/*        <div className="order-4 p-10 border border-blue-300 bg-blue-100">03</div>*/}
        {/*        <div className="order-1 p-10 border border-blue-300 bg-blue-100">04</div>*/}
        {/*    </div>*/}

        {/*    Grow and Shrink*/}
            <div className="flex w-full bg-gray-200">
                <div className="flex-initial w-64 p-10 border border-blue-300 bg-blue-100">01</div>
                <div className="flex-none w-64 p-10 border border-blue-300 bg-blue-100">02</div>
                <div className="flex-auto w-64 p-10 border border-blue-300 bg-blue-100">03</div>
                <div className="flex-1 w-64 p-10 border border-blue-300 bg-blue-100">04</div>
                <div className="p-10 border border-blue-300 bg-blue-100">05</div>
                <div className="p-10 border border-blue-300 bg-blue-100">06</div>
                <div className="p-10 border border-blue-300 bg-blue-100">07</div>
            </div>

        </>
    )
}

export default Flexbox;