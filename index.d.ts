interface ResponsiveImageOutput {
  src: string
  srcSet: string
  placeholder: string | undefined
  images: { path: string; width: number; height: number }[]
  width: number
  height: number
  toString: () => string
}
  
declare module '*&format=webp' {
  const src: ResponsiveImageOutput
  export default src
}