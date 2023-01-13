import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GroupCard } from "./groupCard";

export default {
  title: "Card",
  component: GroupCard,
} as ComponentMeta<typeof GroupCard>;

const Template: ComponentStory<typeof GroupCard> = (args) => (
  <GroupCard {...args} />
);

export const GroupCardStory = Template.bind({});

GroupCardStory.args = {
  title: "タイトル",
  description: "説明",
};
