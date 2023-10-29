'use client'
import { ProviderUser } from '@/core/ProviderUser'
import { UserProps } from '@/core/User'
import { auth } from '@/firebase/config'
import { AuthenticationProvider } from '@/provider/AuthenticationProvider'
import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { createContext, useEffect, useState } from 'react'

interface AuthContextProps {
  user: UserProps | null
  loading: boolean
  loginGoogle(): Promise<void>
  logout(): Promise<void>
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: false,
  loginGoogle: async () => Promise.resolve(),
  logout: async () => Promise.resolve(),
})

export function AuthProvider(props: any) {
  const { push } = useRouter()
  const [user, setUser] = useState<UserProps | null>(null)
  const [loading, setLoading] = useState(false)
  const authentication = new ProviderUser(new AuthenticationProvider())

  async function loginGoogle() {
    setLoading(true)
    const res = await authentication.loginGoogle()
    setUser({
      email: res.email ?? '',
      name: res.name ?? '',
    })
    push('/')
    setLoading(false)
  }

  async function logout() {
    setLoading(true)
    await authentication.logout()
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        setUser({
          email: user.email ?? '',
          name: user.displayName ?? '',
        })
      } else {
        push('/login')
      }
    })
    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{ user, loginGoogle, loading, logout }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
