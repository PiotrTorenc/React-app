import styles from './ListForm.module.scss';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';

const ListForm = () => {
  const [title, setValueTitle] = useState('');
  const [description, setValueDescription] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setValueTitle('');
    setValueDescription('');
  };
  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <span>Title:</span>{' '}
      <TextInput
        value={title}
        onChange={(e) => setValueTitle(e.target.value)}
      />
      <span>Description:</span>{' '}
      <TextInput
        value={description}
        onChange={(e) => setValueDescription(e.target.value)}
      />
      <Button>ADD LIST</Button>
    </form>
  );
};

export default ListForm;
