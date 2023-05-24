import { useContext } from 'react'
import ModalContext from '../Context/ModalProvder'

const useModal = () => {
    return useContext(ModalContext);
  
}

export default useModal