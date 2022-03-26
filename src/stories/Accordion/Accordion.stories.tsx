import { ComponentMeta, Story } from "@storybook/react";
import { Accordion, AccordionType } from "../../Components/Accordion/Accordion";
import { action } from "@storybook/addon-actions"
import { useState } from "react";
export default {
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const params = {
    onChange: action('accordion mode collapsed'),
    items: [{ title: 'Alex', value: 1 }, { title: 'Jora', value: 2 }, { title: 'Roma', value: 3 }, { title: 'Dima', value: 4 }]
}

const Template: Story<AccordionType> = (args: AccordionType) => <Accordion {...args} />;
export const MenuCollapsedModFalse = Template.bind({})
MenuCollapsedModFalse.args = {
    ...params,
    title: 'collapsed false',
    collapsed: false,
};
export const MenuCollapsedModTrue = Template.bind({})
MenuCollapsedModTrue.args = {
    ...params,
    title: 'collapsed True',
    collapsed: true,
};
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion title={"Mode Changing"} collapsed={value} onChange={() => { setValue(!value) }} onClickHandler={action('item clicked')}
        items={[{ title: 'Alex', value: 1 }, { title: 'Jora', value: 2 }, { title: 'Roma', value: 3 }, { title: 'Dima', value: 4 }]} />
}
