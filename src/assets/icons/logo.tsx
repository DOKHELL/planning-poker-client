import React from 'react'

const LogoSvg = (props: React.SVGAttributes<SVGElement>): JSX.Element => {
  return (
    <svg {...props}>
      <path
        d="M21.4205 2.01261C20.6381 1.22316 19.362 1.22316 18.5796 2.0126L8.28444 12.3996C8.28431 12.3997 8.28431 12.3999 8.28444 12.4C8.28457 12.4002 8.28457 12.4004 8.28444 12.4005L2.42625 18.311C-0.808993 21.5751 -0.808993 26.8672 2.42625 30.1313C5.66149 33.3954 10.9068 33.3954 14.1421 30.1313L16.3064 27.9477C16.3036 27.9328 16.301 27.9179 16.2986 27.9029L15.9414 25.7152L11.7673 26.4456C11.3674 26.5156 11.0011 26.2079 11.0011 25.8019C11.0011 24.0958 11.8335 22.497 13.2312 21.5187L15.0486 20.2465L14.7169 18.215C14.2717 15.4882 15.265 12.7247 17.3443 10.9053L18.6841 9.73306C19.4381 9.07326 20.564 9.07326 21.3181 9.73306L22.6578 10.9053C24.7371 12.7247 25.7305 15.4882 25.2853 18.215L24.9536 20.2465L26.771 21.5187C28.1687 22.497 29.0011 24.0958 29.0011 25.8019C29.0011 26.2079 28.6348 26.5156 28.2349 26.4456L24.0608 25.7152L23.7036 27.9029C23.7021 27.9118 23.7006 27.9207 23.699 27.9295C23.6979 27.9359 23.6968 27.9423 23.6956 27.9487L25.858 30.1303C29.0932 33.3944 34.3386 33.3944 37.5738 30.1303C40.809 26.8662 40.809 21.5741 37.5738 18.31L21.4205 2.01261ZM20.0004 19.0797C21.3811 19.0797 22.5004 17.9604 22.5004 16.5797C22.5004 15.199 21.3811 14.0797 20.0004 14.0797C18.6197 14.0797 17.5004 15.199 17.5004 16.5797C17.5004 17.9604 18.6197 19.0797 20.0004 19.0797ZM27.4997 38.5794H12.4993C12.1855 38.1616 11.9995 37.6422 11.9995 37.0794C11.9995 35.6987 13.1188 34.5794 14.4995 34.5794C15.0751 34.5794 15.6053 34.7739 16.0279 35.1008C16.2644 33.1173 17.9523 31.5794 19.9995 31.5794C22.0467 31.5794 23.7347 33.1173 23.9712 35.1008C24.3937 34.7739 24.9239 34.5794 25.4995 34.5794C26.8802 34.5794 27.9995 35.6987 27.9995 37.0794C27.9995 37.6422 27.8135 38.1616 27.4997 38.5794Z"
        fill="#3993FF"></path>
    </svg>
  )
}

export default LogoSvg
