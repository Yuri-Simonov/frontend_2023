import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Modal } from "./Modal";

export default {
    title: "shared/Modal",
    component: Modal,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque dignissimos nulla doloribus perferendis aut in laboriosam commodi obcaecati, voluptatum debitis officiis facilis delectus dolor eligendi, vel maiores. Veniam, libero perspiciatis!",
};

export const Secondary = Template.bind({});
Secondary.args = {
    isOpen: true,
    children:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque dignissimos nulla doloribus perferendis aut in laboriosam commodi obcaecati, voluptatum debitis officiis facilis delectus dolor eligendi, vel maiores. Veniam, libero perspiciatis!",
};
Secondary.decorators = [ThemeDecorator(Theme.DARK)];
