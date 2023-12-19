import type { Meta, StoryObj } from "@storybook/react";

import { PeopleYouMayKnow } from "./PeopleFollow";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/PeopleYouMayKnow",
  component: PeopleYouMayKnow,

  argTypes: {
    image: { control: "text" },
    designation: { control: "text" },
    name: { control: "text" },
  },
} satisfies Meta<typeof PeopleYouMayKnow>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    name: "shivam kawde",
    designation: "SDE",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUM52_hV7N6344LbMZoQ28vcym2N2oYYg-Cg&usqp=CAU",
  },
};
