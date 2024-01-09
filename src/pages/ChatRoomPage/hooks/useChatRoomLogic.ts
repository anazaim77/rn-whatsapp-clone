import { useCallback, useEffect, useState } from "react";

const DUMMY = [
  {
    type: "accept",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumquis facere ullam cumque, exercitationem atque temporibus in a!Inventore, dignissimos a. Laboriosam culpa natus doloremque reiciendis architecto possimus iste odio!",
    time: "09.22",
  },
  {
    type: "accept",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumquis facere ullam cumque, exercitationem atque temporibus in a!Inventore, dignissimos a. Laboriosam culpa natus doloremque reiciendis architecto possimus iste odio!",
    time: "09.38",
  },
  {
    type: "send",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumquis facere ullam cumque, exercitationem atque temporibus in a!Inventore, dignissimos a. Laboriosam culpa natus doloremque reiciendis architecto possimus iste odio!",
    time: "09.39",
  },
  {
    type: "accept",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumquis facere ullam cumque, exercitationem atque temporibus in a!Inventore, dignissimos a. Laboriosam culpa natus doloremque reiciendis architecto possimus iste odio!",
    time: "09.44",
  },
  {
    type: "send",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumquis facere ullam cumque, exercitationem atque temporibus in a!Inventore, dignissimos a. Laboriosam culpa natus doloremque reiciendis architecto possimus iste odio!",
    time: "09.50",
  },
  {
    type: "send",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumquis facere ullam cumque, exercitationem atque temporibus in a!Inventore, dignissimos a. Laboriosam culpa natus doloremque reiciendis architecto possimus iste odio!",
    time: "09.50",
  },
];

export interface ChatRoomModel {
  type: "send" | "accept" | string;
  message: string;
  time: string;
}

const useChatRoomLogic = () => {
  const [text, setText] = useState("");
  const [chatList, setChatList] = useState<ChatRoomModel[]>([]);

  const onChangeText = useCallback((text: string) => {
    setText(text);
  }, []);

  const onSubmitText = useCallback(() => {
    setChatList((current) => [
      {
        type: "send",
        message: text,
        time: "09.55",
      },
      ...current,
    ]);
    setText("");
  }, [text]);

  useEffect(function dummyInitialChats() {
    setChatList(DUMMY);
  }, []);

  return { onChangeText, text, onSubmitText, chatList };
};

export default useChatRoomLogic;
