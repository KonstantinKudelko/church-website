import { useRouter } from 'next/router';
import { useEffect } from 'preact/hooks';

export default () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/magazine');
  }, []);

  return null;
};
