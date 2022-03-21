import React, { useState } from 'react';
import './App.scss';
import { Rating, RatingValueType } from './Components/Rating/Rating';
import { Accordion } from './Components/Accordion/Accordion';
import { UnControlledAccordion } from './Components/Accordion/UnControlledAccordion/UnControlledAccordion';
import { UnControlledRating } from './Components/Rating/UncontrolledRating/UnControlledRating';
import { UnControlledOnOff } from './Components/OnOff/UnControlledOnOff';
import { OnOff } from './Components/OnOff/OnOff';

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(3)
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  const [on, setOn] = useState(false);
  const [onUncontrolledOnOff, setOnUncontrolledOnOff] = useState<boolean>(false);
  return (
    <div className="App">
      <AppTitle />
      <UnControlledOnOff switchOn={setOnUncontrolledOnOff} /> {onUncontrolledOnOff.toString()}
      <div style={{ backgroundColor: 'grey' }}>
        <Accordion title={`Acc-1 collapsed={${accordionCollapsed ? 'true' : 'false'}}`} collapsed={accordionCollapsed} onChange={() => { setAccordionCollapsed(!accordionCollapsed) }} />
        <Rating value={ratingValue} callback={setRatingValue} />
      </div>
      <div className='OnOff'>
        <OnOff on={on} setOn={setOn} />
      </div>
      <div>
        <UnControlledAccordion />
      </div>
      <div>
        <UnControlledRating />
      </div>
    </div>
  );
}
const AppTitle = () => <div>AppTitle</div>
export default App;
