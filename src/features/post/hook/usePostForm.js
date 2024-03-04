import { useContext } from 'react';
import { PostFormContext } from '../context/PostFormContext';

export default function usePostForm() {
  return useContext(PostFormContext);
}
