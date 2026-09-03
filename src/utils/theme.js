export function getInitialTheme(){
  return 'dark'
}

export function applyTheme(theme){
  const root = document.documentElement
  root.classList.add('dark')
}

export function setTheme(theme){
  applyTheme('dark')
}
