import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LabelText } from "./labelText";

export default {
  title: "Text",
  component: LabelText,
} as ComponentMeta<typeof LabelText>;

export const LabelTextStory: ComponentStory<typeof LabelText> = (args) => (
  <LabelText {...args}>テスト</LabelText>
);
