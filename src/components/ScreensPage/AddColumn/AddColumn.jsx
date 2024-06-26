import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { useModal } from '../../../hooks/useModal';
import { selectUser } from '../../../redux/auth/auth-selectors';
import { selectBoard } from '../../../redux/boards/boards-selectors';
import { addColumn } from '../../../redux/boards/boards-operations';
import Modal from "../../../helpers/ModalWindow/Modal.jsx";

import icons from '../../../images/symbol-defs.svg';
import css from './AddColumn.module.css';


const AddColumn = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const board = useSelector(selectBoard);
  
  const { isModalOpen, openModal, closeModal } = useModal();
  const { theme } = useSelector(selectUser);

  const handleAddColumn = ({ title }) => {
    dispatch(addColumn({ _id: board._id, title: title }));
    closeModal();
    reset();
  }

  return (
    <>
      <button className={[css.button, css[theme]].join(' ')} type="button" onClick={openModal}>
          <div className={[css.iconBox, css[theme]].join(' ')}>
            <svg className={[css.icon, css[theme]].join(' ')} width="14" height="14">
              <use href={icons + '#icon-plus'}></use>
            </svg>
          </div>
          <p className={[css.text, css[theme]].join(' ')}>Add new column</p>
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className={[css.modalHeader, css[theme]].join(' ')}>New column</h2>
        <form onSubmit={handleSubmit(handleAddColumn)}>
          <input {...register("title")} placeholder="Title" className={[css.addTitle, css[theme]].join(' ')} required />
          <button className={[css.addBtn, css[theme]].join(' ')} type="submit" >
            <div className={css.iconWrap}>
              <svg className={css.iconPlus} width="14" height="14">
                <use href={icons + '#icon-plus'}></use>
              </svg>
            </div>
            Add
          </button>      
        </form>
      </Modal>
    </>
  );
};

export default AddColumn;
