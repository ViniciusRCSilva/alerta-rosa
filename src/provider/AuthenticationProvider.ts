import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore'

import { auth, db } from '../firebase/config'
import { ProviderUserProps } from '../core/ProviderUser'
import { User } from '../core/User'

export class AuthenticationProvider implements ProviderUserProps {
  private _provider = new GoogleAuthProvider()
  private _user = new User({
    email: '',
    name: '',
  })

  async loginGoogle(): Promise<User> {
    const login = await signInWithPopup(auth, this._provider)

    return this._user.clone({
      name: login.user.displayName ?? '',
      email: login.user.email ?? '',
    })
  }

  async loginPassword(email: string, password: string): Promise<User> {
    const userRequest = await signInWithEmailAndPassword(auth, email, password)

    return this._user.clone({
      name: userRequest.user.displayName ?? '',
      email: userRequest.user.email ?? '',
    })
  }

  async createUserPassword(email: string, password: string): Promise<void> {
    createUserWithEmailAndPassword(auth, email, password)
  }

  async getUser(user: User): Promise<User | false> {
    const docRef = doc(db, 'users', user.email)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return new User({
        name: docSnap.data()?.name ?? '',
        email: docSnap.data()?.email ?? '',
        phone: docSnap.data()?.phone ?? '',
        state: docSnap.data()?.state ?? '',
        city: docSnap.data()?.city ?? '',
      })
    }

    return false
  }

  async submitUser(user: User): Promise<void> {
    await setDoc(doc(db, 'users', user.email), {
      name: user.name,
      email: user.email,
      phone: user.phone,
      state: user.state,
      city: user.city,
    })
  }

  async logout(): Promise<void> {
    await signOut(auth)
  }
}
