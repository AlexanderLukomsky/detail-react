import { Rating, RatingType } from '../../Components/Rating/Rating';
import { ComponentMeta, Story } from "@storybook/react";
import { Accordion, AccordionType } from "../../Components/Accordion/Accordion";
import { action } from "@storybook/addon-actions"
import { useState } from 'react';
export default {
    title: 'Rating',
    component: Rating,
} as ComponentMeta<typeof Rating>;

//const callback = 
const Template: Story<RatingType> = (args: RatingType) => <Rating {...args} />;

export const EmptyStar = Template.bind({})
EmptyStar.args = {
    value: 0,
    callback: action('value')
};
export const Rating1 = Template.bind({})
Rating1.args = {
    value: 1,
    callback: action('value')
};
export const Rating2 = Template.bind({})
Rating2.args = {
    value: 2,
    callback: action('value')
};
export const Rating3 = Template.bind({})
Rating3.args = {
    value: 3,
    callback: action('value')
};
export const Rating4 = Template.bind({})
Rating4.args = {
    value: 4,
    callback: action('value')
};
export const Rating5 = Template.bind({})
Rating5.args = {
    value: 5,
    callback: action('value')
};
