const UtilityFirst = () => {
    return (
        <div className="flex items-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4 mt-12">

            {/*Since this is a flexbox, begin with flex class. Center the items. Add padding of 6 all around. The width of the alert box is small, so set it to max-w-sm. Center the box using mx-auto (margin on th x-axis). Set background to white. Rounded corners. Add large shadow. Add space on the x-axis with value of 4. Add margin top space of 12.*/}
            <div>
                <img className="w-12 h-12" src="../assets/img/warning.png" alt="warning"/>
                <div>
                    <div className="text-xl font-medum text-black">Are you sure?</div>
                    <p className="text-slate-500">You are about to delete a post</p>
                </div>

            </div>

        </div>

    )
}

export default UtilityFirst;
