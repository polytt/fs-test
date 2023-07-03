import { createContext } from 'react'

export interface UserContextState {
  user: User | null
  loading: boolean,
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const defaultState = {
  user: null,
  loading: true,
  login: async (email: string, password: string) => { },
  logout: () => { }
}

const UserContext = createContext<UserContextState>(defaultState)

export interface User {
  account: string
  publicKey: string
}

export interface UserProviderProps {
  children: React.ReactNode
}

// TODO: implement this to use the UserProvider state, replace defaultState
// with the actual state
export const useUser = (): UserContextState => {
  return defaultState
}

// TODO: 
export const UserProvider = ({ children }: UserProviderProps) => {
  return (
    <UserContext.Provider value={defaultState}>
      {children}
    </UserContext.Provider>
  )
} 