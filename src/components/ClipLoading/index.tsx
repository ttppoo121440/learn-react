import ClipLoader from 'react-spinners/ClipLoader';

import { ClipLoadingProps } from './types';

const ClipLoading = ({ loading, global = false }: ClipLoadingProps) => {
  return (
    <div className={global ? 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50' : ''}>
      <ClipLoader color="#ffffff" loading={loading} size={global ? 100 : 20} aria-label="Loading Spinner" />
    </div>
  );
};

export default ClipLoading;
