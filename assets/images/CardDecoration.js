import * as React from "react"

const CardDecoration = (props) => (
  <svg
    className="pricing-deco-img"
    height={100}
    preserveAspectRatio="none"
    width={300}
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      className="deco-layer deco-layer--1"
      d="M30.913 43.944s42.911-34.464 87.51-14.191c77.31 35.14 113.304-1.952 146.638-4.729 48.654-4.056 69.94 16.218 69.94 16.218v54.396H30.913V43.944z"
      opacity={0.6}
    />
    <path
      className="deco-layer deco-layer--2"
      d="M-35.667 44.628s42.91-34.463 87.51-14.191c77.31 35.141 113.304-1.952 146.639-4.729 48.653-4.055 69.939 16.218 69.939 16.218v54.396H-35.667V44.628z"
      opacity={0.6}
    />
    <path
      className="deco-layer deco-layer--3"
      d="M43.415 98.342s48.283-68.927 109.133-68.927c65.886 0 97.983 67.914 97.983 67.914v3.716H42.401l1.014-2.703z"
      opacity={0.7}
    />
    <path
      className="deco-layer deco-layer--4"
      d="M-34.667 62.998s56-45.667 120.316-27.839C167.484 57.842 197 41.332 232.286 30.428c53.07-16.399 104.047 36.903 104.047 36.903l1.333 36.667-372-2.954-.333-38.046z"
    />
  </svg>
)

export default CardDecoration
