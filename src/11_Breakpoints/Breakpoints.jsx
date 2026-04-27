import {useState, useEffect} from 'react';

const Breakpoints = () => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, []);


    return (
        <div>
            <h1 className="text-white text-xl md:text-3xl">Width: {width}px</h1>
        </div>
    )
}

export default Breakpoints;