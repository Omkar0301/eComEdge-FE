import axios from "axios";

const apiClient = async ({
  url,
  method = "GET",
  data = null,
  headers = {},
}) => {
  const config = {
    url,
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...(data && { data }),
  };

  const response = await axios(config);
  return response.data;
};

export default apiClient;
