import * as React from "react"

function Haus(props) {
  return (
    <svg

      viewBox="0 0 640 640"
      width={36}
      height={36}
      {...props}
    >
      <defs>
        <path
          d="M551.98 259.85v341.58c0 4.13-3.34 7.47-7.46 7.47H122.38c-8.39 0-15.19-6.8-15.19-15.19V259.85C220.85 160.88 291.88 99.02 320.3 74.28a7.438 7.438 0 019.65-.1l222.03 185.67z"
          id="haus__a"
        />
        <path d="M275.66 608.9h107.86V432.84H275.66V608.9z" id="haus__b" />
        <path
          d="M306.25 520.87c0 5.74-4.69 10.4-10.47 10.4-5.77 0-10.46-4.66-10.46-10.4s4.69-10.4 10.46-10.4c5.78 0 10.47 4.66 10.47 10.4z"
          id="haus__c"
        />
        <path
          d="M593.7 286.18c6.6 0 11.95-5.35 11.95-11.94v-1.78c0-4.48-2-8.73-5.46-11.58-54.78-45.19-212.16-175-266.57-219.87a11.454 11.454 0 00-14.63.04C263.32 87.52 103.63 220.79 47.97 267.24a26.7 26.7 0 00-9.13 15.56c-.61 3.23.44-2.34.11-.57-1.65 8.7 5.03 16.76 13.88 16.76h-1.34c4.41 0 8.68-1.57 12.05-4.42 52.55-44.42 207.22-175.17 260.33-220.06 1.4-1.19 3.45-1.2 4.86-.03 51.2 42.34 201.25 166.43 252.17 208.54 2.47 2.05 5.58 3.16 8.78 3.16h4.02z"
          id="haus__d"
        />
        <path
          d="M117.87 207.73l75.47-62.48V68.02c0-3.13-2.54-5.66-5.67-5.66h-58.39c-6.3 0-11.41 5.1-11.41 11.4v133.97z"
          id="haus__e"
        />
      </defs>
      <use xlinkHref="#haus__a" fill="#bbdbe1" />
      <use
        xlinkHref="#haus__a"
        fillOpacity={0}
        stroke="#000"
        strokeWidth={8}
      />
      <use xlinkHref="#haus__b" fill="#fbf885" />
      <use
        xlinkHref="#haus__b"
        fillOpacity={0}
        stroke="#000"
        strokeWidth={8}
      />
      <use xlinkHref="#haus__c" />
      <g>
        <use xlinkHref="#haus__d" fill="#fbf885" />
        <use
          xlinkHref="#haus__d"
          fillOpacity={0}
          stroke="#000"
          strokeWidth={8}
        />
      </g>
      <g>
        <use xlinkHref="#haus__e" fill="#f2ec13" />
        <use
          xlinkHref="#haus__e"
          fillOpacity={0}
          stroke="#000"
          strokeWidth={9}
        />
      </g>
    </svg>
  )
}

export default Haus
