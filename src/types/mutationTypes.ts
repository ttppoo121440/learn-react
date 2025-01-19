import { UseMutateFunction, UseMutationResult } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

export type MutationAction<T> = UseMutateFunction<AxiosResponse<T>, AxiosError, T>;
export type MutationResult<T> = UseMutationResult<AxiosResponse<T>, AxiosError, T>;
