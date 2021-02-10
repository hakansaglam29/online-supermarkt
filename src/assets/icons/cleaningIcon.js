import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      viewBox="0 0 640 640"
      width={36}
      height={36}
      {...props}
    >
      <defs>
        <path d="M385.1 541.62H116.18V203.78" id="cleaning__a" />
        <path
          d="M575.41 245.73c-132.82-104-215.83-169-249.03-195a10.36 10.36 0 00-12.77-.02c-33.39 26-116.84 91.01-250.37 195.02"
          id="cleaning__b"
        />
        <path
          d="M504.5 527.13H130.46V211.55L321.95 64.02l187.59 147.53-5.04 315.58z"
          id="cleaning__c"
        />
        <path
          d="M357.68 191c8.67 0 15.7 7.03 15.7 15.7v78.06c0 8.67-7.03 15.7-15.7 15.7h-82.11c-8.68 0-15.71-7.03-15.71-15.7V206.7c0-8.67 7.03-15.7 15.71-15.7h82.11z"
          id="cleaning__d"
        />
        <path d="M522.7 286.22v-82.44" id="cleaning__f" />
        <path
          d="M607.86 437.45c-18.12 1.22-29.44 1.97-33.97 2.28-35.18 2.35-63.2 30.36-65.56 65.54-.32 4.85-1.14 16.96-2.44 36.35-1.51-21.17-2.45-34.4-2.83-39.69-2.38-33.31-28.95-59.77-62.27-62.01-4.87-.33-17.07-1.15-36.58-2.47 10.21-.66 16.6-1.07 19.15-1.23 43.26-2.79 77.78-37.15 80.78-80.4.23-3.37.82-11.8 1.75-25.28 2.7 20.12 4.39 32.69 5.07 37.72 4.93 36.72 35 64.92 71.97 67.47 3.32.23 11.63.8 24.93 1.72z"
          id="cleaning__g"
        />
        <path
          d="M141.77 108.83c-10.22.69-16.61 1.12-19.17 1.29-19.84 1.32-35.65 17.13-36.98 36.97-.19 2.74-.64 9.57-1.38 20.51-.85-11.94-1.38-19.41-1.6-22.39-1.34-18.79-16.33-33.72-35.12-34.98-2.76-.19-9.63-.65-20.64-1.4 5.76-.37 9.36-.6 10.8-.69 24.41-1.58 43.88-20.96 45.57-45.36.14-1.9.46-6.65.99-14.26 1.53 11.35 2.48 18.44 2.86 21.28 2.78 20.72 19.75 36.62 40.6 38.06 1.88.13 6.57.46 14.07.97z"
          id="cleaning__h"
        />
      </defs>
      <use
        xlinkHref="#cleaning__a"
        fillOpacity={0}
        stroke="#000"
        strokeWidth={10}
      />
      <use
        xlinkHref="#cleaning__b"
        fillOpacity={0}
        stroke="#000"
        strokeWidth={10}
      />
      <use xlinkHref="#cleaning__c" fill="#f1e2f5" />
      <use
        xlinkHref="#cleaning__c"
        fillOpacity={0}
        stroke="#000"
        strokeWidth={0}
        strokeOpacity={0}
      />
      <use xlinkHref="#cleaning__d" fill="#cb8ea3" />
      <use
        xlinkHref="#cleaning__d"
        fillOpacity={0}
        stroke="#000"
        strokeWidth={10}
      />
      <filter
        id="cleaning__e"
        x={513.7}
        y={194.78}
        width={19}
        height={101.43}
        filterUnits="userSpaceOnUse"
        primitiveUnits="userSpaceOnUse"
      >
        <feFlood />
        <feComposite in2="SourceAlpha" operator="in" />
        <feGaussianBlur stdDeviation={1} />
        <feOffset dx={1} dy={1} result="afterOffset" />
        <feFlood floodColor="#060606" floodOpacity={0.5} />
        <feComposite in2="afterOffset" operator="in" />
        <feMorphology operator="dilate" radius={1} />
        <feComposite in2="SourceAlpha" operator="out" />
      </filter>
      <path
        d="M522.7 286.22v-82.44"
        fill="none"
        stroke="#fff"
        filter="url(#cleaning__e)"
      />
      <g>
        <use
          xlinkHref="#cleaning__f"
          fillOpacity={0}
          stroke="#000"
          strokeWidth={10}
        />
      </g>
      <g>
        <use xlinkHref="#cleaning__g" fill="#fff" />
        <use
          xlinkHref="#cleaning__g"
          fillOpacity={0}
          stroke="#000"
          strokeWidth={10}
        />
      </g>
      <g>
        <use xlinkHref="#cleaning__h" fill="#fff" />
        <use
          xlinkHref="#cleaning__h"
          fillOpacity={0}
          stroke="#000"
          strokeWidth={10}
        />
      </g>
    </svg>
  )
}

export default SvgComponent