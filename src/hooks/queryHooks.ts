import { ApiEndpoint, QueryKeys } from "@/constants";
import { ApiRequestUtils } from "@/utils";
import { useQuery } from "react-query";

export interface ChatModel {
  name: string;
  image_url: string;
  status: string;
  last_message: string;
  updated_at: string;
  total_unread_messages: number;
}

export const useGetChats = () =>
  useQuery(QueryKeys.GET_CHATS, () =>
    ApiRequestUtils.get<Array<ChatModel>>(ApiEndpoint.CHATS)
  );
