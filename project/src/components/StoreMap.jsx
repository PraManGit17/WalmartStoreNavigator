import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';

const StoreMap = () => {

  const sections = [
    { name: 'Deli', x: 10, y: 10, width: 50, height: 50, color: '#86efac' },
  ];

  return (
    <div className='w-[80%] border-2 h-full rounded-2xl p-1 bg-gray-100'>
      <Stage width={1000} height={1000}>
        <Layer>
          <Rect x={10} y={5} width={270} height={30} fill='#86efac'></Rect>
          <Text text='Diary' x={125} y={15} fontSize={15} fill="black" />

          <Rect x={10} y={50} width={250} height={60} fill='#86efac'></Rect>
          <Text text='Frozen Food' x={100} y={65} fontSize={15} fill="black" />

          <Rect x={10} y={125} width={90} height={200} fill='#86efac'></Rect>
          <Text text='Meat' x={40} y={205} fontSize={15} fill="black" />

          <Rect x={115} y={125} width={145} height={60} fill='#86efac'></Rect>
          <Text text='Chemicals' x={150} y={150} fontSize={15} fill="black" />

          <Rect x={115} y={200} width={145} height={125} fill='#86efac'></Rect>
          <Text text='Grocery' x={150} y={255} fontSize={15} fill="black" />

          <Rect x={10} y={340} width={250} height={70} fill='#86efac'></Rect>
          <Text text='Produce' x={100} y={370} fontSize={15} fill="black" />

          <Rect x={10} y={420} width={50} height={100} fill='#00bbf9'></Rect>
          <Text text='Carts' x={25} y={490} fontSize={15} fill="black" rotation={270} />

          <Text text='Entrance' x={105} y={460} fontSize={15} fill="#023e8a" />
        </Layer>


        <Layer>
          <Rect x={305} y={5} width={170} height={105} fill='#00bbf9'></Rect>
          <Text text='Infants' x={400} y={50} fontSize={15} fill="black" />
          <Text text='Section' x={400} y={65} fontSize={15} fill="black" />

          <Rect x={490} y={5} width={170} height={105} fill='#00bbf9'></Rect>
          <Text text='Shoes' x={555} y={50} fontSize={15} fill="black" />

          <Rect x={675} y={5} width={170} height={105} fill='#00bbf9'></Rect>
          <Text text='Electronics' x={730} y={50} fontSize={15} fill="black" />

          <Rect x={305} y={140} width={80} height={60} fill='#00bbf9'></Rect>
          <Text text='Mens Wear' x={315} y={165} fontSize={11} fill="black" />

          <Rect x={395} y={140} width={80} height={60} fill='#00bbf9'></Rect>
          <Text text='Womens Wear' x={398} y={165} fontSize={11} fill="black" />

          <Rect x={305} y={205} width={170} height={20} fill='#00bbf9'></Rect>
          <Text text='Fitting Room' x={360} y={210} fontSize={11} fill="black" />

          {/*
          <Rect x={10} y={125} width={90} height={200} fill='#86efac'></Rect>
          <Text text='Meat' x={40} y={205} fontSize={15} fill="black" />


          <Rect x={115} y={200} width={145} height={125} fill='#86efac'></Rect>
          <Text text='Grocery' x={150} y={255} fontSize={15} fill="black" />

          <Rect x={10} y={340} width={250} height={70} fill='#86efac'></Rect>
          <Text text='Produce' x={100} y={370} fontSize={15} fill="black" />

          <Rect x={10} y={420} width={50} height={100} fill='#48cae4'></Rect>
          <Text text='Carts' x={25} y={490} fontSize={15} fill="black" rotation={270} />

          <Text text='Entrance' x={205} y={460} fontSize={15} fill="#023e8a" /> */}
        </Layer>
      </Stage>
    </div>
  )
}

export default StoreMap