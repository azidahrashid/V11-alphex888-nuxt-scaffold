export type AuthMode = 'login' | 'register'

export function useAuthModal() {
  const isOpen = useState<boolean>('auth-modal:open', () => false)
  const mode = useState<AuthMode>('auth-modal:mode', () => 'login')

  function openAuth(nextMode: AuthMode = 'login') {
    mode.value = nextMode
    isOpen.value = true
  }

  function closeAuth() {
    isOpen.value = false
  }

  function switchAuth(nextMode: AuthMode) {
    mode.value = nextMode
  }

  return {
    isOpen,
    mode,
    openAuth,
    closeAuth,
    switchAuth
  }
}
