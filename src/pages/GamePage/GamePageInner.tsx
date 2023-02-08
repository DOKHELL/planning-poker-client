import React, { useEffect, memo } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useParams } from 'react-router-dom'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { connectToWS, getUsers } from '@/store/game.store'
import { resetState, showModal } from '@/store/modal.store'
import GameTable from '@/pages/GamePage/GameTable/GameTable'
import GamePageBottomSection from '@/pages/GamePage/GamePageBottomSection/GamePageBottomSection'
import db from '@/services/firebase'
import styles from '@/pages/GamePage/GamePage.module.scss'

const GamePageInner = () => {
  const { id } = useParams<{ id: string }>()
  const [ user ] = useAuthState(db.auth)

  const login = async () => {
    const provider = new GoogleAuthProvider()
    const { user } = await signInWithPopup(db.auth, provider)
    if (user) {
      resetState()
    }
  }

  useEffect(() => {
    if (user) {
      connectToWS(id, user)
    } else {
      getUsers(id)
      showModal({
        variant: 'success',
        title: 'Please first login to play',
        canClose: false,
        maxWidth: 740,
        onConfirm: login,
        confirmBtnText: 'Login By Google',
      })
    }
  }, [ user ])

  return (
    <>
      <div className={styles.gamePageTableWrapper}>
        <GameTable/>
      </div>
      <GamePageBottomSection/>
    </>
  )
}

export default memo(GamePageInner)
