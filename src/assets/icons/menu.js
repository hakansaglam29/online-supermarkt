import * as React from "react"

function Menu (props) {
  return (
    <svg
      viewBox="0 0 640 640"
      width={24}
      height={24}
      {...props}
    >
      <defs>
        <path
          d="M620.12 80C631.1 80 640 88.9 640 99.88v67.74c0 10.98-8.9 19.88-19.88 19.88H19.88C8.9 187.5 0 178.6 0 167.62V99.88C0 88.9 8.9 80 19.88 80h600.24z"
          id="menu__b"
        />
        <path
          d="M620.12 271.25c10.98 0 19.88 8.9 19.88 19.88v67.74c0 10.98-8.9 19.88-19.88 19.88H19.88C8.9 378.75 0 369.85 0 358.87v-67.74c0-10.98 8.9-19.88 19.88-19.88h600.24z"
          id="menu__c"
        />
        <path
          d="M620.12 460c10.98 0 19.88 8.9 19.88 19.88v67.74c0 10.98-8.9 19.88-19.88 19.88H19.88C8.9 567.5 0 558.6 0 547.62v-67.74C0 468.9 8.9 460 19.88 460h600.24z"
          id="menu__d"
        />
      </defs>
      <use xlinkHref="#menu__a" fillOpacity={0} stroke="#000" />
      <use xlinkHref="#menu__b" fill="#ff9600" />
      <use xlinkHref="#menu__b" fillOpacity={0} stroke="#ba812f" />
      <use xlinkHref="#menu__c" fill="#ff9600" />
      <use xlinkHref="#menu__c" fillOpacity={0} stroke="#ba812f" />
      <g>
        <use xlinkHref="#menu__d" fill="#ff9600" />
        <use xlinkHref="#menu__d" fillOpacity={0} stroke="#ba812f" />
      </g>
    </svg>
  )
}

export default Menu