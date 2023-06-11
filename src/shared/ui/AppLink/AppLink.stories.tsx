import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

export default {
    title: 'widget/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    theme: AppLinkTheme.PRIMARY,
    children: 'Text',
};

export const Secondary = Template.bind({});
Secondary.args = { theme: AppLinkTheme.SECONDARY, children: 'Text' };

export const PrimaryDarkTheme = Template.bind({});
PrimaryDarkTheme.args = {
    theme: AppLinkTheme.PRIMARY,
    children: 'Text',
};
PrimaryDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDarkTheme = Template.bind({});
SecondaryDarkTheme.args = { theme: AppLinkTheme.SECONDARY, children: 'Text' };
SecondaryDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
