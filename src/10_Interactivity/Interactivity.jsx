const Interactivity = () => {
    return (
        <div>

        {/* Hover State Styling */}
            <button className="bg-black text-white py-3 px-5 rounded-lg m-3 hover:bg-orange-500 hover:text-white">Submit</button>


        {/* Focus State Styling */}
            <button className="bg-black text-white py-3 px-5 rounded-lg m-3 focus:bg-green-500 focus:text-white">Submit</button>


        {/* Active State Styling */}
            <button className="bg-black text-white py-3 px-5 rounded-lg m-3 active:bg-blue-300 active:text-white">Submit</button>

        {/* Styling Based on the Parent State */}
            <a href="" className="group block max-w-xs mx-auto rounded-lg p-6 bg-white shadow-lg space-y-3 hover:bg-sky-500">
                <h3 className="group-hover:text-white">Card Title</h3>
                <p className="group-hover:text-white">This is the card text</p>
            </a>

        {/* Pseudo Classes */}
            <ul>
                <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">Item 1</li>
                <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">Item 2</li>
                <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">Item 3</li>
                <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">Item 4</li>
                <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">Item 5</li>
                <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">Item 6</li>

            </ul>


        {/* Appearance */}
            <select className="appearance-none">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>

            <br/>
            <br/>


        {/* Cursor */}
            <p className="cursor-pointer">Hello</p>

            <button className="bg-black text-white py-3 px-5 rounded-lg m-3 cursor-wait">Submit</button>

            <button className="bg-black text-white py-3 px-5 rounded-lg m-3 cursor-not-allowed">Submit</button>


        {/* User Select */}
            <div className="select-none">Lorem ipsum dolor sit amet.</div>
            <div className="select-text">Lorem ipsum dolor sit amet.</div>
            <div className="select-all">Lorem ipsum dolor sit amet.</div>
            <div className="select-auto">Lorem ipsum dolor sit amet.</div>

            <a href="#item" className="block my-6">Go to Item</a>

        {/* Smooth Scroll Example */}
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores corporis culpa cupiditate dicta dignissimos distinctio doloremque enim esse est, explicabo facere id illo illum laborum magni modi nemo nesciunt nobis nostrum, omnis optio porro quae recusandae rem reprehenderit voluptatem. Dolores ducimus illum molestiae non porro reprehenderit sint velit? Ab cumque ea error eveniet, fuga illum libero mollitia nesciunt odio officiis pariatur possimus, ratione reiciendis soluta ut velit vitae voluptas. Accusamus aliquid architecto dolor expedita fugiat, fugit hic ipsa, minima mollitia necessitatibus neque nobis perspiciatis quos saepe sunt velit, voluptate. Delectus eligendi facere laborum necessitatibus vel velit. A alias aliquid at aut dignissimos dolorem doloribus, eius eveniet hic illum inventore ipsa maxime modi molestiae nam nisi non nulla optio qui quisquam recusandae repudiandae suscipit tempore. At delectus deserunt, eligendi facilis iure maxime minus necessitatibus nihil praesentium quas quasi qui quidem reprehenderit. Adipisci asperiores corporis delectus dolor dolore dolores, eius, error facilis hic ipsam iure labore laboriosam natus nihil optio quo repellendus velit! Accusamus animi dignissimos dolor, dolores eaque illo, inventore iste neque rerum saepe sapiente sit veritatis? Ad aliquid assumenda consectetur corporis cumque distinctio eaque hic illum nam numquam odit, officiis perspiciatis, quae recusandae reiciendis sint voluptatibus! Ea, excepturi explicabo fugiat illo impedit molestias pariatur perferendis tenetur. Distinctio error labore molestiae, nisi officiis perspiciatis possimus quam quidem. Accusantium architecto delectus deserunt doloremque dolorum eligendi, fugiat id incidunt minima minus molestias neque nulla perspiciatis, placeat quidem quo rerum soluta, veritatis! Beatae expedita provident vitae? Necessitatibus non, velit! Debitis et inventore iste nobis omnis quod reprehenderit voluptatem. Aliquid libero obcaecati odit quae reiciendis, vel? Ab accusamus adipisci aperiam aspernatur autem consequatur excepturi obcaecati tempora tenetur vitae. Fugit minima neque omnis quod rerum. Animi assumenda dignissimos ducimus explicabo fuga in ipsam non omnis ut voluptate? Accusantium aliquid aspernatur, autem consequuntur debitis dicta doloremque doloribus error est hic impedit magnam molestias, natus nesciunt non numquam odio odit, officiis porro quae quas quia quis recusandae repellat repellendus repudiandae sapiente sed ut velit vitae! Accusamus amet asperiores atque cumque debitis dolores eius, enim est et facere facilis fugit iste labore laboriosam libero maiores molestias non obcaecati optio perspiciatis placeat quisquam repudiandae sapiente sed similique suscipit temporibus totam ullam vero voluptatem! Dicta dolorum eaque eos error est facere, facilis minus qui rem saepe sapiente temporibus unde voluptas! A consequatur delectus deserunt dignissimos eligendi, est, ex hic itaque maxime numquam possimus quas qui, saepe tempore vitae. Nihil, voluptate.</p>
            <div id="item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at cupiditate et explicabo harum magnam maxime, placeat porro quisquam recusandae, repellendus vel velit. Asperiores consectetur culpa doloribus eos est facilis illo nesciunt nulla obcaecati praesentium quam, quod saepe ullam. Debitis delectus ipsum modi nulla qui saepe sequi sint velit.</div>


        </div>
    )
}

export default Interactivity;