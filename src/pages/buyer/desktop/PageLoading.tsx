import { LoaderCircle } from 'lucide-react';
const PageLoading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <LoaderCircle className="w-[60px] h-[60px] animate-spin" />
    </div>
  );
};

export default PageLoading;
