import {
  Tooltip,
  Image,
  TooltipContent,
  TooltipText,
  Pressable,
} from "@gluestack-ui/themed";

import React from "react";
interface ITooltipProps {
  onPressImage: any;
  icon: string;
  toolTipText: string;
}
export const TooltipComponent = (props: ITooltipProps) => {
  return (
    <Tooltip
      placement="bottom"
      trigger={(triggerProps) => {
        return (
          <>
            <Pressable
              onPress={() => {
            
                props.onPressImage();
              }}
              {...triggerProps}
            >
              <Image
                height={30}
                width={30}
                source={{
                  uri: props.icon,
                }}
              ></Image>
            </Pressable>
          </>
        );
      }}
    >
      <TooltipContent backgroundColor="#242424">
        <TooltipText>{props.toolTipText} </TooltipText>
      </TooltipContent>
    </Tooltip>
  );
};
