'use client'
import { ProviderUser } from '@/core/ProviderUser'
import { User, UserProps } from '@/core/User'
import { auth } from '@/firebase/config'
import { AuthenticationProvider } from '@/provider/AuthenticationProvider'
import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { createContext, useEffect, useState } from 'react'

interface AuthContextProps {
  user: UserProps | null
  loading: boolean
  loginGoogle(): Promise<void>
  createUserPassword(email: string, password: string): Promise<void>
  submitUser(user: UserProps): Promise<void>
  logout(): Promise<void>
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: false,
  loginGoogle: async () => Promise.resolve(),
  createUserPassword: async () => Promise.resolve(),
  submitUser: async () => Promise.resolve(),
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
    push('/cadastro')
    setLoading(false)
  }

  async function createUserPassword(email: string, password: string) {
    setLoading(true)
    await authentication.createUserPassword(email, password)
    setLoading(false)
  }

  async function submitUser(user: UserProps) {
    setLoading(true)
    const userCreated = new User(user)
    await authentication.submitUser(userCreated)
    setLoading(false)
  }

  async function logout() {
    setLoading(true)
    await authentication.logout()
    push('/login')
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
    <AuthContext.Provider
      value={{
        user,
        loginGoogle,
        submitUser,
        createUserPassword,
        loading,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
