import * as React from "react"

function ElectronicIcon(props) {
  return (
    <svg
      viewBox="0 0 640 640"
      width={36}
      height={36}
      {...props}
    >
      <defs>
        <path
          d="M542.46 342.32c0 115.98-93.18 210.14-207.97 210.14-114.78 0-207.97-94.16-207.97-210.14 0-115.98 93.19-210.15 207.97-210.15 114.79 0 207.97 94.17 207.97 210.15z"
          id="electronic__a"
        />
        <path
          d="M247.67 335.27h173.65v41.96c0 44.86-36.37 81.23-81.23 81.23h-12.98c-43.87 0-79.44-35.57-79.44-79.44v-43.75z"
          id="electronic__c"
        />
        <path d="M334.49 458.46v94" id="electronic__d" />
        <path d="M292.37 260.96v74.31" id="electronic__e" />
        <path d="M371.46 260.96v74.31" id="electronic__f" />
      </defs>
      <use xlinkHref="#electronic__a" fill="#e1b87d" />
      <use xlinkHref="#electronic__b" fillOpacity={0} stroke="#000" />
      <use
        xlinkHref="#electronic__c"
        fillOpacity={0}
        stroke="#000"
        strokeWidth={16}
      />
      <use
        xlinkHref="#electronic__d"
        fillOpacity={0}
        stroke="#000"
        strokeWidth={16}
      />
      <use
        xlinkHref="#electronic__e"
        fillOpacity={0}
        stroke="#000"
        strokeWidth={16}
      />
      <use
        xlinkHref="#electronic__f"
        fillOpacity={0}
        stroke="#000"
        strokeWidth={16}
      />
    </svg>
  )
}

export default ElectronicIcon