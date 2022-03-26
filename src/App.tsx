import React, { useState } from 'react';
import './App.scss';
import { Rating, RatingValueType } from './Components/Rating/Rating';
import { Accordion } from './Components/Accordion/Accordion';
import { OnOff } from './Components/OnOff/OnOff';
export type UsersType = {
  title: string
  value: number
}
function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(3)
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  const [on, setOn] = useState(false);
  const users: UsersType[] = [{ title: 'Alex', value: 1 }, { title: 'Jora', value: 2 }, { title: 'Roma', value: 3 }, { title: 'Dima', value: 4 }]
  return (
    <div className="App">
      <div style={{ backgroundColor: 'grey' }}>
        <Accordion
          title={`Acc-1 collapsed={${accordionCollapsed ? 'true' : 'false'}}`}
          items={users}
          collapsed={accordionCollapsed}
          onChange={() => { setAccordionCollapsed(!accordionCollapsed) }}
        />
        <Rating value={ratingValue} callback={setRatingValue} />
      </div>
      <div className='OnOff'>
        <OnOff on={on} setOn={setOn} />
      </div>
    </div>
  );
}
export default App;
