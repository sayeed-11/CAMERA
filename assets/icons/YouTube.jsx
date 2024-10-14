import { View, Text } from 'react-native'
import React from 'react'
import { Svg, Path, G } from 'react-native-svg'

const YouTube = () => {
  return (
    <View>
      <Svg width={100} height={20} xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 114.56"><G fill-rule="nonzero"><Path fill="red" d="M159.98 17.94A20.575 20.575 0 0 0 145.5 3.46C133.2.11 84.87 0 81.86 0h-.18c-1.56 0-51.26.16-63.76 3.57A20.566 20.566 0 0 0 3.45 18.04c-3.84 22.56-5.33 56.93.1 78.58a20.558 20.558 0 0 0 14.48 14.48c12.3 3.36 60.63 3.46 63.64 3.46h.29c3.01 0 51.35-.1 63.64-3.46a20.558 20.558 0 0 0 14.48-14.48c4.05-22.59 5.3-56.93-.1-78.68z"/><Path fill="#fff" d="m65.45 81.83 42.38-24.55-42.38-24.55z"/><Path fill="#FFF" d="M197.43 75.48 179.06 8.43h16.06s7.51 33.63 10.08 49.44h.43c2.91-16.78 10.28-49.44 10.28-49.44h16.07l-18.59 66.94v32.14h-15.85V75.48h-.11zm209.89-40.31v72.45h-12.6l-1.37-8.91h-.31c-3.46 6.68-8.61 10.08-15.44 10.08-12.35-.04-13.73-10.61-13.85-19.52v-54.1h16.17v53.14c0 3.18.31 5.52 1.05 6.9 1.49 2.95 5.35 2.19 7.45.74a8.422 8.422 0 0 0 2.83-3.29V35.17h16.07zm38.53 41.16c0 5.3-.21 9.44-.63 12.41-.42 2.97-1.15 5.09-2.2 6.36-1.05 1.28-2.42 1.91-4.1 1.91-3.25-.11-5.1-1.59-6.4-3.82V52.03c.52-2.01 1.47-3.6 2.83-4.87 2.31-2.63 6.26-2.66 8.09 0 .94 1.27 1.47 3.5 1.89 6.57.31 3.08.52 7.43.52 13.15v9.45zm14.81-29.6c-.95-4.56-2.52-7.85-4.73-9.97-2.2-2.02-5.14-3.08-9.03-3.08-2.95-.01-5.84.88-8.29 2.55-2.63 1.69-4.52 3.92-5.99 6.68h-.1V4.72h-15.54v102.79h13.34l1.67-6.89h.32c1.28 2.43 3.21 4.45 5.56 5.83 2.52 1.38 5.25 2.13 8.3 2.13 5.46 0 9.45-2.55 12.07-7.64 2.52-5.1 3.89-13.05 3.89-23.77V65.72c0-8.07-.53-14.43-1.47-18.99zm-92.29-25.14H352.3v86.03h-15.75V21.59h-16.06V8.43h47.77v13.16h.11zm-43.89 13.58v72.45h-12.6l-1.37-8.91h-.31c-3.47 6.68-8.61 10.08-15.44 10.08-12.35-.04-13.73-10.61-13.85-19.52v-54.1h16.17v53.14c0 3.18.31 5.52 1.05 6.9 1.49 2.95 5.35 2.19 7.45.74a8.422 8.422 0 0 0 2.83-3.29V35.17h16.07zm162.64 11.14c-.85 1.06-1.37 2.65-1.68 4.98-.32 2.33-.42 10.61-.42 10.61v5.2h11.76v-5.2c0 5.2-.11-8.17-.43-10.61-.31-2.44-.83-4.13-1.68-5.09-.83-.96-2.09-1.49-3.78-1.49-1.78.11-3.04.64-3.77 1.6zm-2.1 30.55v3.71l.42 10.5c.31 2.33.83 4.03 1.68 5.09.84 1.06 2.2 1.59 3.99 1.59 2.41 0 4.09-.95 4.93-2.86.94-1.91 1.37-5.09 1.47-9.44l13.96.85c.11.63.11 1.48.11 2.54 0 6.69-1.78 11.67-5.46 14.96-3.67 3.29-8.71 4.99-15.33 4.99-7.98 0-13.55-2.55-16.69-7.54-3.15-4.98-4.83-12.83-4.83-23.33V65.08c.35-18.03 3.49-31.24 21.94-31.29 5.57 0 9.76 1.06 12.71 3.07 2.94 2.02 5.04 5.2 6.3 9.55 1.25 4.35 1.78 10.29 1.78 17.93v12.41h-26.98v.11zM254.87 94.15c.94-2.34 1.36-6.26 1.36-11.57V59.99c0-5.2-.42-9.02-1.36-11.35-.95-2.44-2.52-3.61-4.73-3.61-2.2 0-3.67 1.17-4.62 3.61-.94 2.44-1.36 6.15-1.36 11.35v22.59c0 5.31.42 9.23 1.26 11.57.84 2.33 2.41 3.5 4.72 3.5 2.21 0 3.78-1.17 4.73-3.5zM236.7 105.5c-3.25-2.23-5.56-5.62-6.93-10.29-1.36-4.67-1.99-10.82-1.99-18.57v-10.5c0-7.74.73-14.11 2.31-18.77 1.57-4.78 3.99-8.17 7.35-10.29 3.36-2.12 7.66-3.29 13.02-3.29 5.25 0 9.55 1.06 12.7 3.29 3.15 2.22 5.57 5.62 7.04 10.29 1.47 4.66 2.2 10.92 2.2 18.67v10.5c0 7.74-.73 13.89-2.2 18.56-1.47 4.67-3.78 8.06-7.04 10.29-3.25 2.12-7.66 3.29-13.12 3.29-5.67.11-10.08-1.06-13.34-3.18z"/></G></Svg>
    </View>
  )
}

export default YouTube