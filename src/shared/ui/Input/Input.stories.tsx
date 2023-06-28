import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Input } from "./Input";

export default {
    title: "shared/Input",
    component: Input,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "Text",
    value: "123",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    label: "Text",
    value: "123",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
