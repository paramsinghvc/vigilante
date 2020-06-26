import { useRef, useEffect } from 'react'

const componentNameStyle = `color: #9c88ff`
const keyNameStyle = `color: #fd79a8; font-weight: bold`
const prevValStyle = `color: #F79F1F; font-weight: bold`
const newValStyle = `color: #38ada9; font-weight: bold`

function logVariable(keyName: string, prevVal: any, newVal: any) {
  console.group(`%c${keyName}`, keyNameStyle)
  console.info('%cPrevious Value:', prevValStyle, prevVal)
  console.info('%cNew Value: ', newValStyle, newVal)
  console.groupEnd()
}

type ChangedVariables = {
  [keyName: string]: {
    prevVal: any
    newVal: any
  }
}

function logComponentGroup(componentName: string, changedVariables: ChangedVariables) {
  console.group(`%c${componentName}`, componentNameStyle)
  Object.entries(changedVariables).forEach(([key, { prevVal, newVal }]) => {
    logVariable(key, prevVal, newVal)
  })
  console.groupEnd()
}

export default function useVigilante(componentName: string, variables: Record<string, any>) {
  const variablesRef = useRef<Record<string, any>>(variables)

  useEffect(() => {
    const prevVariablesRef = variablesRef.current
    const changedVariables = Object.keys(variables).reduce((acc, key) => {
      const prevVal = prevVariablesRef[key]
      const newVal = variables[key]

      if (!Object.is(prevVal, newVal)) {
        acc[key] = { prevVal, newVal }
        prevVariablesRef[key] = newVal
      }
      return acc
    }, {} as ChangedVariables)
    logComponentGroup(componentName, changedVariables)
  }, [...Object.values(variables)])
}
