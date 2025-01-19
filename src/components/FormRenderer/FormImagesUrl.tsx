import { FieldValues, useFieldArray, useFormContext, Path } from 'react-hook-form';

import { Input } from '../ui/input';

import { FormImagesInputProps } from './types';

const FormImagesInput = <T extends FieldValues>({ name, maxCount = 5 }: FormImagesInputProps<T>) => {
  const { control, register } = useFormContext<T>();
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <>
      {fields.map((field, index) => (
        <div key={field.id} className="flex items-center">
          <Input
            type="text"
            {...register(`${name}.${index}` as Path<T>)}
            placeholder={`圖片網址 ${index + 1}`}
            className="grow"
          />
          <button type="button" onClick={() => remove(index)} className="ml-2 shrink-0 text-red-500">
            移除
          </button>
        </div>
      ))}
      {fields.length < maxCount && (
        <button type="button" onClick={() => append('' as T[typeof name][string])} className="mt-2 text-primary">
          新增圖片
        </button>
      )}
    </>
  );
};

export default FormImagesInput;
