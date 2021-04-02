import { useEffect } from 'react'
import { createClassName } from '../utilities/createClassName'
import stylesheet from './stylesheet'

/**  Place Styles in DOM */
const useStylesheet = (cssString: string = stylesheet): void => {
  useEffect(() => {
    const styleTagID = createClassName('styles')
    const existingStyleTag = document.getElementById(
      styleTagID
    ) as HTMLStyleElement | null

    const newStyleTag = document.createElement('style')
    newStyleTag.id = styleTagID

    const styleTag: HTMLStyleElement = existingStyleTag || newStyleTag
    styleTag.innerHTML = cssString

    if (!existingStyleTag)
      document.head.insertAdjacentElement('afterbegin', styleTag)

    return () => {
      if (styleTag) document.head.removeChild(styleTag)
    }
  }, [])
}

export default useStylesheet
