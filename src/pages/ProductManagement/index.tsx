import { useCallback, useMemo } from 'react';

import { ProductVoType } from '@/api/services/adminProductApi/types';
import ClipLoading from '@/components/ClipLoading';
import ModalDialog from '@/components/ModalDialog';
import { DataTablePagination } from '@/components/Table/DataTablePagination';
import TableContent from '@/components/Table/TableContent';
import { Button } from '@/components/ui/button';
import useTableConfig from '@/components/useTableConfig';
import {
  useDeleteProductMutation,
  useGetAdminProducts,
  usePostProductMutation,
  useUpdateProductMutation,
} from '@/hooks/useAdminProduct';
import { useUploadMutation } from '@/hooks/useUpload';
import useDialogStore from '@/store/dialogStore';
import usePaginationStore from '@/store/paginationStore';

import { Columns } from './Columns';
import useFormConfig from './formConfig';

const ProductManagement = () => {
  const { mutate: createProduct } = usePostProductMutation();
  const { mutate: updateProduct } = useUpdateProductMutation();
  const { mutate: deleteProduct } = useDeleteProductMutation();

  const { openDialog } = useDialogStore();
  const { currentPage } = usePaginationStore();
  const { data, isFetching } = useGetAdminProducts({ page: currentPage + 1, category: '' });
  const totalPages = data?.pagination.total_pages || 0;
  const { mutate: uploadImageUrl, data: imageUrlResult, isPending: uploadImageUrlLoading } = useUploadMutation();
  const { mutate: uploadImagesUrl, data: imagesUrlResult, isPending: uploadImagesUrlLoading } = useUploadMutation();
  const { form, productFormFields, initialValues } = useFormConfig({
    uploadImageUrl,
    imageUrlResult,
    uploadImagesUrl,
    imagesUrlResult,
  });

  const deleteData = useCallback(
    (id: ProductVoType['id']) => {
      deleteProduct(id);
    },
    [deleteProduct],
  );

  const columns = useMemo(() => Columns(openDialog, deleteData), [openDialog, deleteData]);

  const table = useTableConfig(data?.products ?? [], columns);

  return (
    <div className="px-5">
      <div className="my-5 flex">
        <h1 className="mr-auto text-5xl">產品管理</h1>
        <Button disabled={isFetching} onClick={() => openDialog('add')}>
          新增產品
          <div>
            <ClipLoading loading={isFetching} />
          </div>
        </Button>
      </div>
      <ModalDialog<ProductVoType>
        initialValues={initialValues}
        FormFields={productFormFields}
        methods={form}
        createData={createProduct}
        updateData={updateProduct}
        loading={isFetching || uploadImageUrlLoading || uploadImagesUrlLoading}
      />
      <TableContent table={table} isLoading={isFetching} />
      <DataTablePagination totalPages={totalPages} />
    </div>
  );
};

export default ProductManagement;
