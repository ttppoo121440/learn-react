import { create } from 'zustand';

import { DialogStore } from './types';

const useDialogStore = create<DialogStore<unknown>>((set) => ({
  isOpen: false,
  dialogType: null,
  currentItem: null,
  openDialog: (type, item) => {
    if (type === 'edit') {
      set({
        isOpen: true,
        dialogType: type,
        currentItem: item,
      });
    } else {
      set({
        isOpen: true,
        dialogType: type,
      });
    }
  },
  closeDialog: () =>
    set({
      isOpen: false,
      dialogType: null,
    }),
}));

export default useDialogStore;
