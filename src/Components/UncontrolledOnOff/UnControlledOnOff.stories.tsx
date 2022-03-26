import { Story } from "@storybook/react";
import { PropsType, UnControlledOnOff } from "./UnControlledOnOff";

export default {
    title: 'UnControlledOnOff',
    component: UnControlledOnOff,
}

const Template: Story<PropsType> = (args: PropsType) => <UnControlledOnOff {...args} />;
export const OnMode = Template.bind({})
OnMode.args = {
    defaultMode: true
}
export const Offmode = Template.bind({})
Offmode.args = {
    defaultMode: false
}