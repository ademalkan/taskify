import { useState, useCallback } from "react";

import { ActionState, FieldErrors } from "@/lib/create-safe-action";

type Action<TInput, TOutput> = (
  data: TInput
) => Promise<ActionState<TInput, TOutput>>;

type UseActionOptions<TOutput> = {
  onSuccess?: (data: TOutput) => void;
  onError?: (error: string) => void;
  onComplete?: () => void;
};

export const useAction = <TInput, TOutput>(
  action: Action<TInput, TOutput>,
  options: UseActionOptions<TOutput> = {}
) => {
  const [fieldErrors, setFieldErrors] =
    useState<FieldErrors<TInput | undefined>>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<TOutput | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const execute = useCallback(
    async (input: TInput) => {
      setIsLoading(true);
      try {
        const { fieldErrors, error, data } = await action(input);
        if (!{ fieldErrors, error, data }) return;
        setFieldErrors(fieldErrors);
        if (error) {
          setError(error);
          options.onError?.(error);
        }
        if (data) {
          setData(data);
          options.onSuccess?.(data);
        }
      } finally {
        setIsLoading(false);
        options.onComplete?.();
      }
    },
    [action, options]
  );
  return {
    execute,
    fieldErrors,
    error,
    data,
    isLoading,
  };
};
