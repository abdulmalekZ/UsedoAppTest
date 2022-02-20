/**
 * Used to navigating without the navigation prop
 * @see https://reactnavigation.org/docs/navigating-without-navigation-prop/
 *
 * You can add other navigation functions that you need and export them
 */
 import {
    CommonActions,
    createNavigationContainerRef,
  } from '@react-navigation/native'
  
  export const navigationRef = createNavigationContainerRef()
  
  export const navigate = (name: any, params: any) => {
    if (navigationRef.isReady()) {
        //@ts-expect-error ts error
      navigationRef.navigate(name, params)
    }
  }
  
  export const navigateAndReset = (routes = [], index = 0) => {
    if (navigationRef.isReady()) {
      navigationRef.reset({
          index,
          routes,
        })
      
    }
  }
  
  export const navigateAndSimpleReset = (name: any, index = 0) => {
    console.log("gon reset", name)
    console.log("🚀 ~ file: utils.ts ~ line 35 ~ navigateAndSimpleReset ~ navigationRef.isReady()", navigationRef.isReady())
    if (navigationRef.isReady()) {
      navigationRef.dispatch(
        CommonActions.reset({
          index,
          routes: [{ name }],
        }),
      )
    }
  }