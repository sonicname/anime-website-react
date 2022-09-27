import { useEffect } from 'react';

const useBindEnter = (setQuery = () => {}, inputRef) => {
  useEffect(() => {
    const handlerEnterKeyPress = (e) => {
      if (e.code === 'Enter') {
        setQuery(inputRef.current.value);
      }
    };

    document.addEventListener('keyup', handlerEnterKeyPress);

    return () => {
      document.removeEventListener('keyup', handlerEnterKeyPress);
    };
  }, []);
};

export default useBindEnter;
