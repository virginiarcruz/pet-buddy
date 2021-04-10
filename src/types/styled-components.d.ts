/* eslint-disable @typescript-eslint/no-explicit-any */
import { theme } from 'Styles/Theme'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    color: Record<string, any>
    font: Record<string, any>
    letter: Record<string, any>
    line: Record<string, any>
    shadow: Record<string, any>
    spacing: Record<string, any>
    border: Record<string, any>
    opacity: Record<string, any>
  }
}
