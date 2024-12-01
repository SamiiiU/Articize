

export default  FlipCard = ({page}) =>{
    return (
        <>
        {/* Card Container */}
        <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
          
          {/* Front Side */}
          <div className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center backface-hidden rounded-lg">
            <p className="text-lg font-bold">Front Content</p>
          </div>
  
          {/* Back Side */}
          <div className="absolute w-full h-full bg-green-500 text-white flex items-center justify-center backface-hidden rounded-lg rotate-y-180">
            <p className="text-lg font-bold">Back Content</p>
          </div>
        </div>
        </>
    );
  }
  