import { useGameStore } from '@/store/game.store'

export default () => {
  const { users = [] } = useGameStore()

  const filterUsers = users?.filter((user) => user.active) || []
  const startBottom = 0
  const endBottom = Math.ceil(filterUsers?.length * 0.3)
  const startTop = endBottom
  const endTop = endBottom + endBottom
  const startLeft = endTop
  const endLeft = Math.ceil(((filterUsers?.length - (endTop + 1)) / 2)) + endTop
  const startRight = endLeft
  const endRight = (filterUsers?.length - endLeft) + endLeft

  const bottomUsers = filterUsers?.slice(startBottom, endBottom)
  const topUsers = filterUsers?.slice(startTop, endTop)
  const leftUsers = filterUsers?.slice(startLeft, endLeft)
  const rightUsers = filterUsers?.slice(startRight, endRight)

  return {
    filterUsers,
    bottomUsers,
    topUsers,
    leftUsers,
    rightUsers,
  }
}
