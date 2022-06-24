import { isLoggedIn } from './auth'

export const selectPlan = (plan) => {
  if ( !isLoggedIn ) return false
  window.alert(`Selecione o plano "${plan.title}"`)
}