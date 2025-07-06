// import React from 'react';
// import { Stage, Layer, Rect, Text } from 'react-konva';

// const StoreMap = () => {

//   const sections = [
//     { name: 'Deli', x: 10, y: 10, width: 50, height: 50, color: '#86efac' },
//   ];

//   return (
//     <div className='w-[80%] border-2 h-full rounded-2xl p-1 bg-gray-100'>
//       <Stage width={1300} height={1000}>

//         <Layer>
//           <Rect x={10} y={5} width={270} height={30} fill='#86efac'></Rect>
//           <Text text='Diary' x={125} y={15} fontSize={15} fill="black" />

//           <Rect x={10} y={50} width={250} height={60} fill='#86efac'></Rect>
//           <Text text='Frozen Food' x={100} y={65} fontSize={15} fill="black" />

//           <Rect x={10} y={125} width={90} height={200} fill='#86efac'></Rect>
//           <Text text='Meat' x={40} y={205} fontSize={15} fill="black" />

//           <Rect x={115} y={125} width={145} height={60} fill='#86efac'></Rect>
//           <Text text='Kitchen Ware' x={150} y={150} fontSize={15} fill="black" />

//           <Rect x={115} y={200} width={145} height={125} fill='#86efac'></Rect>
//           <Text text='Grocery' x={150} y={255} fontSize={15} fill="black" />

//           <Rect x={10} y={340} width={250} height={70} fill='#86efac'></Rect>
//           <Text text='Vegetables & Fruits' x={70} y={370} fontSize={15} fill="black" />

//           <Rect x={10} y={420} width={50} height={100} fill='#00bbf9'></Rect>
//           <Text text='Carts' x={25} y={490} fontSize={15} fill="black" rotation={270} />

//           <Text text='Entrance' x={110} y={460} fontSize={30} fill="#023e8a" />
//         </Layer>


//         <Layer>
//           <Rect x={305} y={5} width={170} height={105} fill='#00bbf9'></Rect>
//           <Text text='Infants' x={400} y={50} fontSize={15} fill="black" />
//           <Text text='Section' x={400} y={65} fontSize={15} fill="black" />

//           <Rect x={490} y={5} width={170} height={105} fill='#00bbf9'></Rect>
//           <Text text='Shoes' x={555} y={50} fontSize={15} fill="black" />

//           <Rect x={675} y={5} width={170} height={105} fill='#00bbf9'></Rect>
//           <Text text='Electronics' x={730} y={50} fontSize={15} fill="black" />

//           <Rect x={305} y={140} width={80} height={60} fill='#00bbf9'></Rect>
//           <Text text='Boys Wear' x={315} y={165} fontSize={11} fill="black" />

//           <Rect x={395} y={140} width={80} height={60} fill='#00bbf9'></Rect>
//           <Text text='Girls Wear' x={408} y={165} fontSize={11} fill="black" />

//           <Rect x={305} y={205} width={170} height={20} fill='#00bbf9'></Rect>
//           <Text text='Fitting Room' x={360} y={210} fontSize={11} fill="black" />

//           <Rect x={305} y={230} width={65} height={120} fill='#00bbf9'></Rect>
//           <Text text='Mens Wear' x={335} y={320} fontSize={14} fill="black" rotation={270} />

//           <Rect x={380} y={230} width={20} height={120} fill='#00bbf9'></Rect>
//           <Text text='Changing Room' x={385} y={335} fontSize={12} fill="black" rotation={270} />

//           <Rect x={410} y={230} width={65} height={120} fill='#00bbf9'></Rect>
//           <Text text='Womens Wear' x={435} y={335} fontSize={14} fill="black" rotation={270} />

//           <Rect x={490} y={140} width={80} height={100} fill='#00bbf9'></Rect>
//           <Text text='Household' x={495} y={175} fontSize={14} fill="black" />
//           <Text text='Accesories' x={495} y={190} fontSize={14} fill="black" />

//           <Rect x={580} y={140} width={80} height={100} fill='#00bbf9'></Rect>
//           <Text text='Luggage' x={590} y={175} fontSize={14} fill="black" />
//           <Text text='Accesories' x={585} y={190} fontSize={14} fill="black" />


//           <Rect x={490} y={250} width={80} height={100} fill='#00bbf9'></Rect>
//           <Text text='Seasonal' x={500} y={285} fontSize={14} fill="black" />
//           <Text text='Accesories' x={495} y={300} fontSize={14} fill="black" />

//           <Rect x={580} y={250} width={80} height={100} fill='#00bbf9'></Rect>
//           <Text text='Stationery' x={588} y={295} fontSize={14} fill="black" />

//           <Rect x={685} y={170} width={140} height={70} fill='#00bbf9'></Rect>
//           <Text text='Furniture' x={725} y={200} fontSize={14} fill="black" />

//           <Rect x={685} y={250} width={140} height={70} fill='#00bbf9'></Rect>
//           <Text text='Crafts &' x={730} y={275} fontSize={14} fill="black" />
//           <Text text='Fabrics' x={730} y={290} fontSize={14} fill="black" />

//           <Rect x={320} y={380} width={160} height={40} fill='#00bbf9'></Rect>
//           <Text text='Snacks1' x={370} y={395} fontSize={14} fill="black" />

//           <Rect x={490} y={380} width={160} height={40} fill='#00bbf9'></Rect>
//           <Text text='Snacks2' x={540} y={395} fontSize={14} fill="black" />

//           <Rect x={660} y={380} width={160} height={40} fill='#00bbf9'></Rect>
//           <Text text='Snacks3' x={710} y={395} fontSize={14} fill="black" />

//           <Rect x={300} y={460} width={130} height={70} fill='#00bbf9'></Rect>
//           <Text text='Comestics' x={330} y={490} fontSize={15} fill="black" />

//           <Rect x={440} y={460} width={130} height={70} fill='#00bbf9'></Rect>
//           <Text text='Food Court' x={470} y={490} fontSize={15} fill="black" />

//           <Rect x={575} y={475} width={50} height={55} fill='#ffba08'></Rect>
//           <Text text='WB' x={588} y={490} fontSize={15} fill="black" />
//           <Text text='GENTS' x={580} y={510} fontSize={12} fill="black" />

//           <Rect x={630} y={475} width={50} height={55} fill='#ffba08'></Rect>
//           <Text text='WB' x={642} y={490} fontSize={15} fill="black" />
//           <Text text='LADIES' x={634} y={510} fontSize={12} fill="black" />

//           <Rect x={685} y={460} width={130} height={70} fill='#00bbf9'></Rect>
//           <Text text='Customer' x={715} y={480} fontSize={15} fill="black" />
//           <Text text='Service' x={715} y={500} fontSize={15} fill="black" />


//         </Layer>


//         <Layer>
//           <Rect x={855} y={5} width={50} height={55} fill='#ffba08'></Rect>
//           <Text text='WB' x={868} y={20} fontSize={15} fill="black" />
//           <Text text='GENTS' x={858} y={35} fontSize={12} fill="black" />

//           <Rect x={910} y={5} width={50} height={55} fill='#ffba08'></Rect>
//           <Text text='WB' x={922} y={20} fontSize={15} fill="black" />
//           <Text text='LADIES' x={912} y={35} fontSize={12} fill="black" />

//           <Rect x={885} y={130} width={50} height={125} fill='#00bbf9'></Rect>
//           <Text text='Sweets' x={918} y={172} fontSize={15} fill="black" rotation={90} />

//           <Rect x={885} y={260} width={50} height={125} fill='#00bbf9'></Rect>
//           <Text text='Cultilary' x={915} y={295} fontSize={15} fill="black" rotation={90} />

//           <Rect x={970} y={5} width={65} height={105} fill='#00bbf9'></Rect>
//           <Text text='Paint' x={985} y={50} fontSize={15} fill="black" />

//           <Rect x={1040} y={5} width={65} height={105} fill='#00bbf9'></Rect>
//           <Text text='Tools &' x={1048} y={50} fontSize={15} fill="black" />
//           <Text text='HARDWARE' x={1044} y={70} fontSize={10} fill="black" />

//           <Rect x={1110} y={5} width={65} height={105} fill='#00bbf9'></Rect>
//           <Text text='Automotive' x={1112} y={55} fontSize={12} fill="black" />

//           <Rect x={1005} y={140} width={170} height={65} fill='#00bbf9'></Rect>
//           <Text text='Sports Gear' x={1050} y={170} fontSize={14} fill="black" />

//           <Rect x={1005} y={215} width={170} height={115} fill='#00bbf9'></Rect>
//           <Text text='Kids' x={1080} y={255} fontSize={14} fill="black" />
//           <Text text='Section' x={1070} y={275} fontSize={14} fill="black" />

//           <Rect x={1075} y={340} width={100} height={100} fill='#86efac'></Rect>
//           <Text text='Garden' x={1100} y={385} fontSize={14} fill="black" />

//         </Layer>
//       </Stage>
//     </div>
//   )
// }

// export default StoreMap

import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';

const StoreMap = () => {

  const sections = [

    // first Layer

    { name: 'Diary', x: 10, y: 5, width: 270, height: 30, color: '#86efac', textX: 125, textY: 15 },
    { name: 'Frozen Food', x: 10, y: 50, width: 250, height: 60, color: '#86efac', textX: 100, textY: 65 },
    { name: 'Meat', x: 10, y: 125, width: 90, height: 200, color: '#86efac', textX: 40, textY: 205 },
    { name: 'Kitchen Ware', x: 115, y: 125, width: 145, height: 60, color: '#86efac', textX: 150, textY: 150 },
    { name: 'Grocery', x: 115, y: 200, width: 145, height: 125, color: '#86efac', textX: 150, textY: 255 },
    { name: 'Vegetables & Fruits', x: 10, y: 340, width: 250, height: 70, color: '#86efac', textX: 70, textY: 370 },
    { name: 'Carts', x: 10, y: 420, width: 50, height: 100, color: '#00bbf9', textX: 25, textY: 490, rotation: 270 },
    { name: 'Entrance', x: 110, y: 480, color: '', textX: 80, textY: 490, fontSize: 30 },

    // second Layer

    { name: 'Infants\nSection', x: 305, y: 5, width: 170, height: 105, color: '#00bbf9', textX: 400, textY: 50 },
    { name: 'Shoes', x: 490, y: 5, width: 170, height: 105, color: '#00bbf9', textX: 555, textY: 50 },
    { name: 'Electronics', x: 675, y: 5, width: 170, height: 105, color: '#00bbf9', textX: 730, textY: 50 },
    { name: 'Boys Wear', x: 305, y: 140, width: 80, height: 60, color: '#00bbf9', textX: 315, textY: 165, fontSize: 11 },
    { name: 'Girls Wear', x: 395, y: 140, width: 80, height: 60, color: '#00bbf9', textX: 408, textY: 165, fontSize: 11 },
    { name: 'Fitting Room', x: 305, y: 205, width: 170, height: 20, color: '#00bbf9', textX: 360, textY: 210, fontSize: 11 },
    { name: 'Mens Wear', x: 305, y: 230, width: 65, height: 120, color: '#00bbf9', textX: 335, textY: 320, rotation: 270 },
    { name: 'Changing Room', x: 380, y: 230, width: 20, height: 120, color: '#00bbf9', textX: 385, textY: 335, rotation: 270, fontSize: 12 },
    { name: 'Womens Wear', x: 410, y: 230, width: 65, height: 120, color: '#00bbf9', textX: 435, textY: 335, rotation: 270 },
    { name: 'Household\nAccessories', x: 490, y: 140, width: 80, height: 100, color: '#00bbf9', textX: 495, textY: 175 },
    { name: 'Luggage\nAccessories', x: 580, y: 140, width: 80, height: 100, color: '#00bbf9', textX: 585, textY: 175 },
    { name: 'Seasonal\nAccessories', x: 490, y: 250, width: 80, height: 100, color: '#00bbf9', textX: 495, textY: 285 },
    { name: 'Stationery', x: 580, y: 250, width: 80, height: 100, color: '#00bbf9', textX: 588, textY: 295 },
    { name: 'Furniture', x: 685, y: 170, width: 140, height: 70, color: '#00bbf9', textX: 725, textY: 200 },
    { name: 'Crafts &\nFabrics', x: 685, y: 250, width: 140, height: 70, color: '#00bbf9', textX: 730, textY: 275 },
    { name: 'Snacks1', x: 320, y: 380, width: 160, height: 40, color: '#00bbf9', textX: 370, textY: 395 },
    { name: 'Snacks2', x: 490, y: 380, width: 160, height: 40, color: '#00bbf9', textX: 540, textY: 395 },
    { name: 'Snacks3', x: 660, y: 380, width: 160, height: 40, color: '#00bbf9', textX: 710, textY: 395 },
    { name: 'Cosmetics', x: 300, y: 460, width: 130, height: 70, color: '#00bbf9', textX: 330, textY: 490 },
    { name: 'Food Court', x: 440, y: 460, width: 130, height: 70, color: '#00bbf9', textX: 470, textY: 490 },
    { name: 'WB\nGENTS', x: 575, y: 475, width: 50, height: 55, color: '#ffba08', textX: 580, textY: 490, fontSize: 12 },
    { name: 'WB\nLADIES', x: 630, y: 475, width: 50, height: 55, color: '#ffba08', textX: 634, textY: 490, fontSize: 12 },
    { name: 'Customer\nService', x: 685, y: 460, width: 130, height: 70, color: '#00bbf9', textX: 715, textY: 480 },

   // third Layer

    {
      name: 'WB\nGENTS',
      x: 855,
      y: 5,
      width: 50,
      height: 55,
      color: '#ffba08',
      textX: 860,
      textY: 20,
      fontSize: 11,
    },
    {
      name: 'WB\nLADIES',
      x: 910,
      y: 5,
      width: 50,
      height: 55,
      color: '#ffba08',
      textX: 914,
      textY: 20,
      fontSize: 11,
    },
    {
      name: 'Sweets',
      x: 885,
      y: 130,
      width: 50,
      height: 125,
      color: '#00bbf9',
      textX: 918,
      textY: 172,
      fontSize: 15,
      rotation: 90,
    },
    {
      name: 'Cultilary',
      x: 885,
      y: 260,
      width: 50,
      height: 125,
      color: '#00bbf9',
      textX: 915,
      textY: 295,
      fontSize: 15,
      rotation: 90,
    },
    {
      name: 'Paint',
      x: 970,
      y: 5,
      width: 65,
      height: 105,
      color: '#00bbf9',
      textX: 985,
      textY: 50,
      fontSize: 15,
    },
    {
      name: 'Tools &\nHARDWARE',
      x: 1040,
      y: 5,
      width: 65,
      height: 105,
      color: '#00bbf9',
      textX: 1048,
      textY: 50,
      fontSize: 12,
    },
    {
      name: 'Automotive',
      x: 1110,
      y: 5,
      width: 65,
      height: 105,
      color: '#00bbf9',
      textX: 1112,
      textY: 55,
      fontSize: 12,
    },
    {
      name: 'Sports Gear',
      x: 1005,
      y: 140,
      width: 170,
      height: 65,
      color: '#00bbf9',
      textX: 1050,
      textY: 170,
      fontSize: 14,
    },
    {
      name: 'Kids\nSection',
      x: 1005,
      y: 215,
      width: 170,
      height: 115,
      color: '#00bbf9',
      textX: 1080,
      textY: 255,
      fontSize: 14,
    },
    {
      name: 'Garden',
      x: 1075,
      y: 340,
      width: 100,
      height: 100,
      color: '#86efac',
      textX: 1100,
      textY: 385,
      fontSize: 14,
    },
  ];



  return (
    <div className='w-[80%] border-2 h-full rounded-2xl p-1 bg-gray-100'>
      <Stage width={1300} height={1000}>
        <Layer>
          {sections.map((sec, i) => (
            <React.Fragment key={i}>
              {sec.width && sec.height && (
                <Rect
                  x={sec.x}
                  y={sec.y}
                  width={sec.width}
                  height={sec.height}
                  fill={sec.color}
                  cornerRadius={4}
                />
              )}
              <Text
                text={sec.name}
                x={sec.textX}
                y={sec.textY}
                fontSize={sec.fontSize || 14}
                fill="black"
                rotation={sec.rotation || 0}
              />
            </React.Fragment>
          ))}
        </Layer>

      </Stage>
    </div>
  )
}

export default StoreMap