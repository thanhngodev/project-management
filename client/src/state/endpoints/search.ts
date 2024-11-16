import { API_PATH } from "@/constants/common.const";
import { ISearchResults } from "@/interfaces/api.interface";
import { EndpointBuilder } from "@reduxjs/toolkit/query/react";

export const search = (build: EndpointBuilder<any, any, any>) =>
  build.query<ISearchResults, string>({
    query: (query) => `${API_PATH}/search?query=${query}`,
  });
