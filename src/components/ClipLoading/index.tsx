import ClipLoader from 'react-spinners/ClipLoader';

import { ClipLoadingProps } from './types';

const ClipLoading = ({ loading }: ClipLoadingProps) => {
  return (
    <>
      <ClipLoader color="#ffffff" loading={loading} aria-label="Loading Spinner" data-testid="loader" />
    </>
  );
};

export default ClipLoading;
