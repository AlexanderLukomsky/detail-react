import React, { useState } from 'react';
import './App.scss';
import { Rating, RatingValueType } from './Components/Rating/Rating';
import { Accordion } from './Components/Accordion/Accordion';
import { OnOff } from './Components/OnOff/OnOff';
import { CustomSelect, SelectItemsType } from './Components/CustomSelect/CustomSelect';
export type UsersType = {
  title: string
  value: number
}
function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(3)
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  const [on, setOn] = useState(false);
  const users: UsersType[] = [{ title: 'Alex', value: 1 }, { title: 'Jora', value: 2 }, { title: 'Roma', value: 3 }, { title: 'Dima', value: 4 }]
  const selectItemsList = [{ title: 'React', id: '1' }, { title: 'JS', id: '2' }, { title: 'TS', id: '3' }, { title: 'HTML', id: '4' }]
  const [selectedItem, setSelectValue] = useState(selectItemsList[0])
  const showSelectedItem = (item: SelectItemsType) => {
    setSelectValue(item)
  }
  const onClickHandler = (value: number) => { console.log(value); }
  return (
    <div className="App">
      <div style={{ backgroundColor: 'grey' }}>
        <Accordion
          title={`Acc-1 collapsed={${accordionCollapsed ? 'true' : 'false'}}`}
          items={users}
          collapsed={accordionCollapsed}
          onChange={() => { setAccordionCollapsed(!accordionCollapsed) }}
          onClickHandler={onClickHandler}
        />
        <Rating value={ratingValue} callback={setRatingValue} />
      </div>
      <div className='OnOff'>
        <OnOff on={on} setOn={setOn} />
      </div>
      <CustomSelect items={selectItemsList} showSelectedItem={showSelectedItem} selectedItem={selectedItem} />
    </div>
  );
}
export default App;
