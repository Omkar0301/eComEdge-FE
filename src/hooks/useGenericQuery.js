"use client";

import apiClient from "@/lib/apiClient";
import { useQuery } from "@tanstack/react-query";

export const useGenericQuery = ({
  queryKey,
  url,
  enabled = true,
  onSuccess,
  onError,
}) => {
  return useQuery({
    queryKey,
    queryFn: () => apiClient({ url, method: "GET" }),
    enabled,
    onSuccess,
    onError,
  });
};
