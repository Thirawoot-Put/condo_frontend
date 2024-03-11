import { useContext } from 'react';
import { ViewerContext } from '../context/ViewerContext';

export default function useViewer() {
  return useContext(ViewerContext);
}
