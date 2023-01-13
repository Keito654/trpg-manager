import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CopyButton } from "./copyButton";

export default {
  title: "Button",
  component: CopyButton,
} as ComponentMeta<typeof CopyButton>;

const Template: ComponentStory<typeof CopyButton> = (args) => (
  <CopyButton {...args} />
);

export const CopyButtonStory = Template.bind({});

CopyButtonStory.args = {};
