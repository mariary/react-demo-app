import { useEffect } from 'react'

const Initialization = ({ initialization }) => {
  useEffect(() => {
    initialization()
  }, [])

  return null
}

export default Initialization
