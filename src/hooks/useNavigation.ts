import { useNavigate } from 'react-router-dom'

export default () => {
  const navigate = useNavigate()

  const handlePush = (url: string) => {
    navigate(url)
  }

  const handlePushAutoCall = (url: string) => () => {
    navigate(url)
  }

  return { handlePush, handlePushAutoCall }
}