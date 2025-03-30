function Letters(){
    return(
        <div className="grid grid-cols-8 gap-2 font-marker">
        {Array.from({ length: 26 }, (_, i) => (
            <button key={i} className="px-3 py-2 border-spacing-0 bg-white rounded-md">
                <span>{String.fromCharCode(65 + i)}</span>
            </button>
        ))}
    </div>
    
    
                
           
    )
}
export default Letters;