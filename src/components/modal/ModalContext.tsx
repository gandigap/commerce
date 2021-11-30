import { createContext } from 'react';

interface IContentContext {
  isModalOpen: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  typeModal: string;
  setTypeModal: React.Dispatch<React.SetStateAction<string>>;
}

const ModalContext = createContext<IContentContext>({
  isModalOpen: false,
  setShowModal: () => {},
  typeModal: 'login_form',
  setTypeModal: () => {},
});

export default ModalContext;
