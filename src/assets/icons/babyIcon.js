import * as React from "react"

function BabyIcon(props) {
  return (
    <svg
      viewBox="0 0 640 640"
      width={36}
      height={36}
      {...props}
    >
      <defs>
        <path
          d="M446.11 214.65c4.93 0 8.92 3.99 8.92 8.92V587c0 14.86-12.04 26.91-26.9 26.91h-217.4c-14.61 0-26.46-11.85-26.46-26.46V227.14c0-6.9 5.6-12.49 12.5-12.49h249.34z"
          id="baby__a"
        />
        <path
          d="M277.57 347.81h-43.9v-28.92c0-8.88 7.19-16.07 16.06-16.07h27.84"
          id="baby__b"
        />
        <path d="M277.57 391.78h-43.9V346.8h43.9" id="baby__c" />
        <path d="M277.57 436.77h-43.9v-44.99h43.9" id="baby__d" />
        <path
          d="M277.57 526.74h-26.05c-9.86 0-17.85-7.99-17.85-17.85v-27.13h43.9"
          id="baby__e"
        />
        <path d="M277.57 481.76h-43.9v-44.99h43.9" id="baby__f" />
        <path
          d="M188.56 188.33c13.15 0 24.84-8.36 29.09-20.8 3.88-11.36 4.32-12.66 7.18-21.02a87.555 87.555 0 0146.65-51.42c9.64-4.37-1.44.66 6.81-3.09a100.908 100.908 0 0182.85-.26c8.51 3.8-8.03-3.59.33.15a106.078 106.078 0 0157.15 62.58c2.32 6.77-.29-.87 3.37 9.85 4.9 14.36 18.4 24.01 33.57 24.01h7.73c5.42 0 9.82 4.4 9.82 9.82v11.14c0 2.96-2.4 5.36-5.36 5.36h-295.5a5.36 5.36 0 01-5.36-5.36v-14.71c0-3.45 2.8-6.25 6.25-6.25h15.42z"
          id="baby__g"
        />
        <path
          d="M345.82 54.54C345.82 70.25 334.25 83 320 83s-25.82-12.75-25.82-28.46c0-15.7 11.57-28.45 25.82-28.45s25.82 12.75 25.82 28.45z"
          id="baby__h"
        />
        <path
          d="M394.83 182.87c-.45-5.42-.74-8.8-.85-10.15a49.163 49.163 0 00-29.93-41.23c-1.75-.74-6.13-2.58-13.13-5.52"
          id="baby__i"
        />
      </defs>
      <use xlinkHref="#baby__a" fill="#fff" />
      <use
        xlinkHref="#baby__a"
        fillOpacity={0}
        stroke="#060606"
        strokeWidth={9}
      />
      <use xlinkHref="#baby__b" fill="#fff" fillOpacity={0} />
      <use
        xlinkHref="#baby__b"
        fillOpacity={0}
        stroke="#080808"
        strokeWidth={8}
      />
      <use
        xlinkHref="#baby__c"
        fillOpacity={0}
        stroke="#000"
        strokeWidth={8}
      />
      <use
        xlinkHref="#baby__d"
        fillOpacity={0}
        stroke="#000"
        strokeWidth={8}
      />
      <use
        xlinkHref="#baby__e"
        fillOpacity={0}
        stroke="#030303"
        strokeWidth={8}
      />
      <use
        xlinkHref="#baby__f"
        fillOpacity={0}
        stroke="#000"
        strokeWidth={8}
      />
      <use xlinkHref="#baby__g" fill="#fff900" />
      <use
        xlinkHref="#baby__g"
        fillOpacity={0}
        stroke="#000"
        strokeWidth={8}
      />
      <g>
        <use xlinkHref="#baby__h" fill="#fff900" />
        <use
          xlinkHref="#baby__h"
          fillOpacity={0}
          stroke="#000"
          strokeWidth={8}
        />
      </g>
      <g>
        <use
          xlinkHref="#baby__i"
          fillOpacity={0}
          stroke="#1d1111"
          strokeWidth={11}
        />
      </g>
    </svg>
  )
}

export default BabyIcon