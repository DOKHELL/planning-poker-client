import { proxy, useSnapshot } from 'valtio'
import { devtools } from 'valtio/utils'
import { User as GoogleUser } from 'firebase/auth'
import api from '@/services/axios'

export type User = {
  username: string;
  card: string;
  userId: string | null;
  photo: string;
  active: boolean;
  observer: boolean;
}

export type Response = {
  users: User[];
  showResult: boolean;
}

export type GameStore = {
  users: User[];
  userData: User;
  sessionId: string;
  googleUserData: {
    uid: string | undefined;
    displayName: string | null | undefined;
    photoURL: string | null | undefined;
  };
  showResult: boolean
}

let savedSoket: WebSocket

export const gameStore = proxy<GameStore>({
  users: [],
  showResult: false,
  sessionId: '',
  googleUserData: {
    uid: '',
    displayName: '',
    photoURL: '',
  },
  userData: {
    username: '',
    card: '',
    userId: '',
    photo: '',
    active: true,
    observer: false,
  },
})

export const isAnyoneChooseCard = () => {
  return gameStore.users.some((user) => user.card)
}

export const setSessionId = (id: string | undefined) => {
  gameStore.sessionId = id || ''
}

export const setGoogleUserData = (user: GoogleUser | null | undefined) => {
  gameStore.googleUserData = {
    uid: user?.uid,
    displayName: user?.displayName,
    photoURL: user?.photoURL,
  }
}

export const updateCard = (userId: string | undefined, card: string) => {
  gameStore.users.forEach((u) => {
    if (u.userId === userId) {
      u.card = u.card === card ? '' : card
    }
  })
}

export const chooseCard = async (id: string | undefined, card: string, userId: string | undefined) => {
  if (gameStore.showResult) return
  try {
    updateCard(userId, card)
    const payload = {
      sessionId: id,
      userId: userId,
      card: card,
    }
    await api.post('/update-card', payload)
  } catch (e) {
    console.log(e)
  }
}

export const observerAction = async (id: string | undefined, userId: string | undefined) => {
  try {
    const payload = {
      sessionId: id,
      userId: userId,
    }
    await api.post('/observer', payload)
  } catch (e) {
    console.log(e)
  }
}

export const resultAction = async (id: string | undefined) => {
  try {
    const payload = {
      sessionId: id,
      showResult: !gameStore.showResult,
    }
    gameStore.showResult = !gameStore.showResult
    await api.post('/result', payload)
  } catch (e) {
    console.log(e)
  }
}

export const disconnectFromSoket = (reason: string) => {
  if (savedSoket) {
    savedSoket?.close(1000, reason)
  }
}

export const logout = async (id: string | undefined, userId: string | undefined) => {
  try {
    const payload = {
      sessionId: id,
      userId: userId,
    }
    await api.post('/logout', payload)
    disconnectFromSoket('logout')
  } catch (e) {
    console.log(e)
  }
}

export const getUsers = async (id: string | undefined) => {
  try {
    const res = await api.get(`/get-users?sessionId=${id}`)
    const data = res.data
    gameStore.users = data.users || []
    gameStore.showResult = data.showResult || false
  } catch (e) {
    console.log(e)
  }
}

export const setData = (data: Response, uid: string | undefined) => {
  gameStore.users = data.users || []
  gameStore.showResult = data.showResult || false
  const thisUser = data.users.find((u) => u.userId === uid)
  if (thisUser) {
    gameStore.userData = thisUser
  }
}

export const connectToWS = (id: string | undefined, user: GoogleUser | null | undefined) => {
  const socket = new WebSocket('wss://45.67.231.4:5003/')
  savedSoket = socket
  const payload = {
    sessionId: id,
    userId: user?.uid,
    card: '',
    username: user?.displayName,
    photo: user?.photoURL,
    method: 'connection'
  }

  socket.onclose = (data) => {
    if ([ 'leave', 'logout' ].includes(data?.reason)) return
    if (gameStore.sessionId && gameStore.googleUserData) {
      //@ts-ignore
      connectToWS(gameStore.sessionId, gameStore.googleUserData)
    }
  }

  socket.onopen = () => {
    socket.send(JSON.stringify(payload))
  }

  socket.onmessage = (event) => {
    const msg = JSON.parse(event.data)
    switch (msg.method) {
    case 'connection':
      if (gameStore.showResult) return
      setData(msg.data, user?.uid)
      break
    case 'disconnection':
      if (gameStore.showResult) return
      setData(msg.data, user?.uid)
      break
    case 'update-card':
      if (gameStore.showResult) return
      setData(msg.data, user?.uid)
      break
    case 'result':
      setData(msg.data, user?.uid)
      break
    case 'observer':
      if (gameStore.showResult) return
      setData(msg.data, user?.uid)
      break
    }
  }
}

export const useGameStore = () => useSnapshot(gameStore)

devtools(gameStore, { name: 'gameStore', enabled: true })
