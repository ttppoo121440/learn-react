export interface DeleteDialogProps {
  title: string;
  deleteData: DeleteDataType;
}

type DeleteDataType = {
  (): void;
};
