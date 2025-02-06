const Cloud = ({ width = 300, height = 180, className = "" }) => {
    return (
      <div className={` ${className}`}>
        <svg width={width} height={height} viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="#013a6e" />
            </linearGradient>
          </defs>
  
          {/* Main cloud shape */}
          <path
            d="
              M 75 100
              C 45 100 25 120 35 145
              C 35 170 65 180 100 170
              C 125 190 175 190 200 170
              C 240 180 270 160 260 130
              C 270 95 235 80 210 90
              C 200 55 140 55 125 90
              C 110 75 75 80 75 100
              Z
            "
            fill="url(#cloudGradient)"
          />
  


        </svg>
      </div>
    )
  }
  
  export default Cloud
  
  