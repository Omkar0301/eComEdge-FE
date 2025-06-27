"use client";

import { useMutation } from "@tanstack/react-query";
import apiClient from "@utils/apiClient";

export const useGenericMutation = ({
  method = "POST",
  url,
  onSuccess,
  onError,
}) => {
  return useMutation({
    mutationFn: (data) => apiClient({ url, method, data }),
    onSuccess,
    onError,
  });
};
