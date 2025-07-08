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


{/* <Layer>
          <Circle x={130} y={42} radius={3} fill='red' name='Diary' />
          <Circle x={130} y={116} radius={3} fill='red' name='Frozen Food' />
          <Circle x={107} y={250} radius={3} fill='red' name='Meat' />
          <Circle x={107} y={420} radius={3} fill='red' name='Vegetables & Fruits' />
          <Circle x={185} y={193} radius={3} fill='red' name='Kitchen Ware' />
          <Circle x={185} y={332} radius={3} fill='red' name='Grocery' />
          <Circle x={155} y={490} radius={3} fill='red' name='Entrance' />
          <Circle x={65} y={485} radius={3} fill='red' name='Carts' />
        </Layer>


        <Layer>
          <Circle x={390} y={120} radius={3} fill='red' name='InfantsSection' />
          <Circle x={575} y={120} radius={3} fill='red' name='Shoes' />
          <Circle x={765} y={120} radius={3} fill='red' name='Electronics' />

          <Circle x={345} y={202} radius={3} fill='red' name='BoysWear' />
          <Circle x={435} y={202} radius={3} fill='red' name='GirlsWear' />
          <Circle x={390} y={202} radius={3} fill='red' name='Fitting Room' />

          <Circle x={375} y={290} radius={3} fill='red' name='MensWear-ChangingRoom' />
          <Circle x={405} y={290} radius={3} fill='red' name='WomensWear-ChangingRoom' />

          <Circle x={400} y={370} radius={3} fill='red' name='Snacks1' />
          <Circle x={575} y={370} radius={3} fill='red' name='Snacks2' />
          <Circle x={740} y={370} radius={3} fill='red' name='Snacks3' />


          <Circle x={575} y={300} radius={3} fill='red' name='SeasonalAccessories-Stationery' />
          <Circle x={530} y={245} radius={3} fill='red' name='HouseholdAccessories-SeasonalAccessories' />
          <Circle x={575} y={190} radius={3} fill='red' name='HouseholdAccessories-LuggageAccessories' />
          <Circle x={615} y={245} radius={3} fill='red' name='Stationery-LuggageAccessories' />

          <Circle x={675} y={205} radius={3} fill='red' name='Furniture' />
          <Circle x={675} y={285} radius={3} fill='red' name='Crafts-Fabrics' />

          <Circle x={365} y={450} radius={3} fill='red' name='Cosmetics' />
          <Circle x={505} y={450} radius={3} fill='red' name='Food Court' />
          <Circle x={745} y={450} radius={3} fill='red' name='CustomerService' />

          <Circle x={600} y={465} radius={3} fill='red' name='WBGENTS-DOWN' />
          <Circle x={655} y={465} radius={3} fill='red' name='WBLADIES-DOWN' />

        </Layer>


        <Layer>
          <Circle x={880} y={70} radius={3} fill='red' name='WBGENTS-UP' />
          <Circle x={935} y={70} radius={3} fill='red' name='WBLADIES-UP' />
          <Circle x={1005} y={120} radius={3} fill='red' name='Paint' />
          <Circle x={1070} y={120} radius={3} fill='red' name='Tools&Hardware' />
          <Circle x={1145} y={120} radius={3} fill='red' name='Automotive' />
          <Circle x={870} y={200} radius={3} fill='red' name='Sweets' />
          <Circle x={870} y={325} radius={3} fill='red' name='Cutlinary' />

          <Circle x={990} y={175} radius={3} fill='red' name='Sweets' />
          <Circle x={990} y={270} radius={3} fill='red' name='Cutlinary' />
          <Circle x={1060} y={390} radius={3} fill='red' name='Cutlinary' />

        </Layer> */}


import React from 'react';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';

const StoreMap = () => {

  const sections = [

    // first Layer

    { name: 'Diary', x: 10, y: 5, width: 270, height: 30, color: '#86efac', textX: 120, textY: 15 },
    { name: 'Frozen Food', x: 10, y: 50, width: 250, height: 60, color: '#86efac', textX: 90, textY: 75 },
    { name: 'Meat', x: 10, y: 125, width: 90, height: 200, color: '#86efac', textX: 40, textY: 205 },
    { name: 'Kitchen Ware', x: 115, y: 125, width: 145, height: 60, color: '#86efac', textX: 150, textY: 150 },
    { name: 'Grocery', x: 115, y: 200, width: 145, height: 125, color: '#86efac', textX: 160, textY: 255 },
    { name: 'Vegetables & Fruits', x: 10, y: 340, width: 250, height: 70, color: '#86efac', textX: 70, textY: 370 },
    { name: 'Carts', x: 10, y: 435, width: 50, height: 100, color: '#00bbf9', textX: 28, textY: 505, rotation: 270 },
    { name: 'Entrance', x: 110, y: 480, color: '', textX: 95, textY: 505, fontSize: 30 },

    // second Layer

    { name: 'Infants\nSection', x: 305, y: 5, width: 170, height: 105, color: '#00bbf9', textX: 370, textY: 45 },
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
      name: 'Tools&\nHardware',
      x: 1040,
      y: 5,
      width: 65,
      height: 105,
      color: '#00bbf9',
      textX: 1048,
      textY: 50,
      fontSize: 11,
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
      fontSize: 11,
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

  const locators = [
    // Layer 1
    { name: 'Diary', x: 130, y: 42 },
    { name: 'Frozen Food', x: 130, y: 116 },
    { name: 'Meat', x: 107, y: 250 },
    { name: 'Vegetables & Fruits', x: 107, y: 420 },
    { name: 'Kitchen Ware', x: 185, y: 193 },
    { name: 'Grocery', x: 185, y: 332 },
    { name: 'Entrance', x: 155, y: 490 },
    { name: 'Carts', x: 65, y: 485 },

    // Layer 2
    { name: 'InfantsSection', x: 390, y: 120 },
    { name: 'Shoes', x: 575, y: 120 },
    { name: 'Electronics', x: 765, y: 120 },
    { name: 'BoysWear', x: 345, y: 202 },
    { name: 'GirlsWear', x: 435, y: 202 },
    { name: 'Fitting Room', x: 390, y: 202 },
    { name: 'MensWear-ChangingRoom', x: 375, y: 290 },
    { name: 'WomensWear-ChangingRoom', x: 405, y: 290 },
    { name: 'Snacks1', x: 400, y: 370 },
    { name: 'Snacks2', x: 575, y: 370 },
    { name: 'Snacks3', x: 740, y: 370 },
    { name: 'SeasonalAccessories-Stationery', x: 575, y: 300 },
    { name: 'HouseholdAccessories-SeasonalAccessories', x: 530, y: 245 },
    { name: 'HouseholdAccessories-LuggageAccessories', x: 575, y: 190 },
    { name: 'Stationery-LuggageAccessories', x: 615, y: 245 },
    { name: 'Furniture', x: 675, y: 205 },
    { name: 'Crafts-Fabrics', x: 675, y: 285 },
    { name: 'Cosmetics', x: 365, y: 450 },
    { name: 'Food Court', x: 505, y: 450 },
    { name: 'CustomerService', x: 745, y: 450 },
    { name: 'WBGENTS-DOWN', x: 600, y: 465 },
    { name: 'WBLADIES-DOWN', x: 655, y: 465 },

    // Layer 3
    { name: 'WBGENTS-UP', x: 880, y: 70 },
    { name: 'WBLADIES-UP', x: 935, y: 70 },
    { name: 'Paint', x: 1005, y: 120 },
    { name: 'Tools&Hardware', x: 1070, y: 120 },
    { name: 'Automotive', x: 1145, y: 120 },
    { name: 'Sweets', x: 990, y: 175 },
    { name: 'Cutlinary', x: 990, y: 270 },
    { name: 'Garden', x: 1060, y: 390 },
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

        <Layer>
          {locators.map((point, i) => (
            <Circle key={i} x={point.x} y={point.y} radius={3} fill="red" name={point.name} />
          ))}
        </Layer>


      </Stage>
    </div>
  )
}

export default StoreMap