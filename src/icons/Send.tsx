import * as React from 'react'

const Send = ({
  width = 16,
  height = 16,
  fill = '#000',
}: {
  width: number
  height: number
  fill: string
}) => (
  <svg viewBox="0 0 511.92 511.92" width={width} height={height}>
    <path
      d="M505.77 46.551a16.889 16.889 0 0 0-17.109-2.697L56.482 218.293a8.538 8.538 0 0 0 6.4 15.83l412.86-166.588-204.8 241.545a8.534 8.534 0 1 0 13.022 11.034L491.861 74.899l-27.785 139.469-27.989 187.025a8.536 8.536 0 0 1-4.267 6.204 8.066 8.066 0 0 1-7.194.333l-116.369-45.756-55.842-23.381a8.533 8.533 0 0 0-11.17 4.565 8.19 8.19 0 0 0-.358 1.801h-.205l-27.725 107.059-39.782-138.965L380.535 158.8a8.533 8.533 0 1 0-10.189-13.653L161.92 300.324 11.682 239.507a8.534 8.534 0 0 0-6.4 15.821l151.04 61.116 40.277 140.612a16.921 16.921 0 0 0 16.316 12.228h.196a16.768 16.768 0 0 0 11.093-4.463c.298-.179.583-.379.853-.597l82.483-84.343 110.592 43.853a24.865 24.865 0 0 0 21.939-1.229 25.524 25.524 0 0 0 12.86-18.526l27.913-186.675 30.72-154.121a17.16 17.16 0 0 0-5.794-16.632zM236.877 427.786l18.014-69.436 28.211 11.844 7.27 2.884-53.495 54.708z"
      fill={fill}
    />
  </svg>
)

export default Send