import { useReducer, Reducer } from 'preact/hooks'

export function useForceUpdate() {
  // dispatch don't have action and don't changes between rerenders
  return useReducer(
    (s) => !s,
    true,
  )[1] as () => void
}
