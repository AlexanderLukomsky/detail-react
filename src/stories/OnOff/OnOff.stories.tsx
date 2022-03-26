import { ComponentMeta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions"
import { OnOff, OnOffType } from '../../Components/OnOff/OnOff';

export default {
    title: 'OnOff',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;


const Template: Story<OnOffType> = (args: OnOffType) => <OnOff {...args} />;
const callback = action('on or off clicked')
export const OnMode = Template.bind({})
OnMode.args = {
    on: false,
    setOn: callback
};
export const OffMode = Template.bind({})
OffMode.args = {
    on: true,
    setOn: callback
};