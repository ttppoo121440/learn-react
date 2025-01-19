import { ColumnDef } from '@tanstack/react-table';
import Zoom from 'react-medium-image-zoom';

import { ProductVoType } from '@/api/services/product/types';
import DeleteDialog from '@/components/DeleteDialog';
import Icons from '@/components/Icons';
import { Button } from '@/components/ui/button';
import 'react-medium-image-zoom/dist/styles.css';

export const Columns = (
  openDialog: (type: 'edit', item: ProductVoType) => void,
  deleteData: (data: ProductVoType['id']) => void,
): ColumnDef<ProductVoType>[] => [
  {
    accessorKey: 'imageUrl',
    header: '縮圖',
    cell: ({ row }) => {
      const item = row.original;
      return (
        <Zoom classDialog="custom-zoom">
          <div className="capitalize">
            <img
              src={typeof item.imageUrl === 'string' ? item.imageUrl : undefined}
              className="size-60 hover:cursor-pointer"
            />
          </div>
        </Zoom>
      );
    },
  },
  {
    accessorKey: 'title',
    header: '產品名稱',
  },
  {
    accessorKey: 'price',
    header: '價錢',
  },
  {
    accessorKey: 'is_enabled',
    header: '是否啟用',
    cell: ({ row }) => {
      const item = row.original;
      return (
        <div className="capitalize">
          {item.is_enabled ? <div className="text-white">啟用</div> : <div className="text-red-500">未啟用</div>}
        </div>
      );
    },
  },
  {
    id: 'actions',
    header: '操作',
    enableHiding: false,
    cell: ({ row }) => {
      const item = row.original;
      return (
        <div>
          <Button className="mr-3 text-white" variant="outline" onClick={() => openDialog('edit', item)}>
            <Icons.Edit />
          </Button>
          <DeleteDialog title={item.title} deleteData={() => deleteData(item.id)} />
        </div>
      );
    },
  },
];
