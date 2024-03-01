import { useContext } from 'react';
import { PostContext } from '../context/PostContext';

export default function usePost() {
  return useContext(PostContext);
}
