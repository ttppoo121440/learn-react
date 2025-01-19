import { ArrayPath, FieldValues, UseFormReturn } from 'react-hook-form';

export interface Option {
  value: string;
  label: string;
}

interface BaseFieldConfig<T extends FieldValues> {
  id?: string;
  label: string;
  key: string;
  name: keyof T;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
}

export type TextFieldConfig<T extends FieldValues> = BaseFieldConfig<T> & {
  type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'textarea' | 'date' | 'switch' | 'file' | 'imagesUrl';
};

export type SelectFieldConfig<T extends FieldValues> = BaseFieldConfig<T> & {
  type: 'select' | 'radio';
  options: Option[];
  onChange?: (value: string) => void;
};

export type CheckboxFieldConfig<T extends FieldValues> = BaseFieldConfig<T> & {
  type: 'checkbox';
  options: Option[];
};

export type FileFieldConfig<T extends FieldValues> = BaseFieldConfig<T> & {
  type: 'imagesUrl';
  maxCount?: number;
  name: ArrayPath<T>;
};

export type FormFieldConfig<T extends FieldValues> =
  | TextFieldConfig<T>
  | SelectFieldConfig<T>
  | CheckboxFieldConfig<T>
  | FileFieldConfig<T>;

export interface FormRendererProps<T extends FieldValues> {
  FormFields: FormFieldConfig<T>[];
  methods: UseFormReturn<T>;
}

export interface FormImagesInputProps<T extends FieldValues> {
  name: ArrayPath<T>;
  maxCount?: number;
}
