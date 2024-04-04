import React from "react";
import { Text } from "./..";

export default function SignupPageDividers({ content = "Or", ...props }) {
  return (
    <div {...props}>
      <div className="h-7 w-full py-1 relative">
        <div className="justify-center h-px w-full left-0 bottom-0 right-0 top-0 m-auto bg-blue_gray-50_02 absolute" />
        <Text
          size="xs"
          as="p"
          className="flex justify-center items-center w-max h-5 left-0 bottom-0 right-0 top-0 px-2 py-px m-auto !text-blue_gray-500 text-center !font-normal bg-white-A700 absolute"
        >
          {content}
        </Text>
      </div>
    </div>
  );
}
