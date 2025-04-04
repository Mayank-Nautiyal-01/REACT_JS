 import { memo } from 'react';
import { useRef } from 'react';

function MemoCount({bioData}) {
    const renderCount=useRef(0);
    console.log(renderCount);
  return (
    <div>
        <p>
            nothing changed here but Ive now rendered:
            <span>{renderCount.current++} time(s)</span>
            <p>my name is{bioData.name}</p>
        </p>
    </div>
  )
}

export default memo(MemoCount)