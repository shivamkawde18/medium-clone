import type { Meta, StoryObj } from '@storybook/react';

import { SocialMedia } from './SocialMedia';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/SocialMedia',
  component: SocialMedia,
  
  argTypes: {
  
    image:{control:"text"},
    text:{control:"text"}
  },
} satisfies Meta<typeof SocialMedia>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
   text:"gi",
   image:"gi"
  },
};
