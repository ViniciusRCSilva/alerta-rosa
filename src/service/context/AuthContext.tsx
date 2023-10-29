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
  getUser(email: string, name: string): Promise<User | false>
  submitUser(user: UserProps): Promise<void>
  logout(): Promise<void>
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: false,
  loginGoogle: async () => Promise.resolve(),
  createUserPassword: async () => Promise.resolve(),
  getUser: async () => Promise.resolve(false),
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
    const haveUser = await getUser(res.email, res.name)
    if (haveUser) {
      push('/')
    } else {
      push('/cadastro')
    }
    setLoading(false)
  }

  async function createUserPassword(email: string, password: string) {
    setLoading(true)
    await authentication.createUserPassword(email, password)
    setLoading(false)
  }

  async function getUser(email: string, name: string) {
    setLoading(true)
    const user = new User({ email, name })
    const haveUser = await authentication.getUser(user)
    setLoading(false)

    return haveUser
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
    onAuthStateChanged(auth, async (user) => {
      if (user?.email) {
        const haveUser = await getUser(user.email, user.displayName ?? '')
        if (haveUser) {
          setUser({
            email: haveUser.email ?? '',
            name: haveUser.name ?? '',
            city: haveUser.city ?? '',
            phone: haveUser.phone ?? '',
            state: haveUser.state ?? '',
          })
        } else {
          setUser({
            email: user.email ?? '',
            name: user.displayName ?? '',
          })
        }
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
        getUser,
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
