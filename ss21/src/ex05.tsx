function Execise05() {
    return ( 
        <>
            <div className="relative w-[300px] h-[200px] bg-blue-400 text-white p-4">
                Relative parent
                <div className="absolute top-39 left-0.5 bg-blue-600 text-white px-3 py-2 rounded">
                    Absolute child
                </div>
            </div>
        </>
     );
}

export default Execise05;