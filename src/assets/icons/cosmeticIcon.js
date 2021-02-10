import * as React from "react"

function CosmeticIcon(props) {
  return (
    <svg
      viewBox="0 0 640 640"
      width={36}
      height={36}
      {...props}
    >
      <defs>
        <path
          d="M314.5 39.41c0 5.61-6.88 10.17-15.35 10.17-8.48 0-15.36-4.56-15.36-10.17s6.88-10.16 15.36-10.16c8.47 0 15.35 4.55 15.35 10.16z"
          id="cosmetic__a"
        />
        <path
          d="M402.12 181.87c50.35 0 91.16 40.82 91.16 91.16v26.7H304.73c-19.47 0-35.25 15.79-35.25 35.26v95.85c0 24.33 19.72 44.04 44.04 44.04h179.76v111.8c0 13.29-10.77 24.07-24.07 24.07H139.26c-13.29 0-24.07-10.78-24.07-24.07V261.46c0-43.96 35.63-79.59 79.59-79.59h207.34z"
          id="cosmetic__b"
        />
        <path
          d="M493.28 459.34h-172.1c-20.19 0-36.56-16.37-36.56-36.56v-76.67c0-17.82 14.45-32.27 32.27-32.27h176.39v145.5z"
          id="cosmetic__c"
        />
        <path d="M220.59 129.18h167.29v40.66H220.59v-40.66z" id="cosmetic__d" />
        <path d="M256.86 46.73h94.76v71.15h-94.76V46.73z" id="cosmetic__e" />
        <path
          d="M360.98 70.45h40.94c-1.56 4.72-2.34 9.44-2.34 14.14 0 4.71.78 9.41 2.34 14.09h-40.94V70.45z"
          id="cosmetic__f"
        />
        <path
          d="M574.29 84.59c0 28.99-37.49 52.53-83.65 52.53-46.17 0-83.65-23.54-83.65-52.53 0-28.98 37.48-52.52 83.65-52.52 46.16 0 83.65 23.54 83.65 52.52z"
          id="cosmetic__g"
        />
        <path d="M283.79 39.41h30.71v4.52h-30.71v-4.52z" id="cosmetic__h" />
      </defs>
      <use xlinkHref="#cosmetic__a" fill="#690050" />
      <use xlinkHref="#cosmetic__b" fill="#f2d6f2" />
      <use
        xlinkHref="#cosmetic__b"
        fillOpacity={0}
        stroke="#000"
        strokeWidth={6}
      />
      <use xlinkHref="#cosmetic__c" fill="#fee9f9" />
      <use
        xlinkHref="#cosmetic__c"
        fillOpacity={0}
        stroke="#000"
        strokeWidth={4}
      />
      <use xlinkHref="#cosmetic__d" fill="#fff" />
      <use
        xlinkHref="#cosmetic__d"
        fillOpacity={0}
        stroke="#000"
        strokeWidth={5}
      />
      <use xlinkHref="#cosmetic__e" fill="#fff" />
      <use
        xlinkHref="#cosmetic__e"
        fillOpacity={0}
        stroke="#000"
        strokeWidth={5}
      />
      <g>
        <use xlinkHref="#cosmetic__f" fill="#fff" />
        <use
          xlinkHref="#cosmetic__f"
          fillOpacity={0}
          stroke="#000"
          strokeWidth={5}
        />
      </g>
      <g>
        <use xlinkHref="#cosmetic__g" fill="#810263" />
        <use
          xlinkHref="#cosmetic__g"
          fillOpacity={0}
          stroke="#000"
          strokeWidth={5}
        />
      </g>
      <g>
        <use xlinkHref="#cosmetic__h" fill="#fff" />
      </g>
    </svg>
  )
}

export default CosmeticIcon
