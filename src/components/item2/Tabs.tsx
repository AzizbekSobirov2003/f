import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { colors } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsItem1() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "90%", margin: "0 auto", marginTop: "50px" , backgroundColor: 'white' ,height:'313px' }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example "
          className="bg-gray-100 text-[14px] "
        >
          <Tab label="Стандарты оснащения" {...a11yProps(0)} />
          <Tab label="Список товаров" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel  value={value} index={0} >
        <span className="text-[12px]">1. Аппарат искусственной вентиляции лёгких</span>
        <br />
        <span className="text-[12px]" >2. Аппарат искусственной вентиляции легких транспортный</span>
        <br />
        <span className="text-[12px]">3. Дыхательный мешок для ручной искусственной вентиляции легких</span>
        <br />
        <span className="text-[12px]">4. Монитор пациента на 5 параметров</span>
        <br />
        <span className="text-[12px]">
5. Монитор пациента на 8 параметров        </span>
<br />
<span className="text-[12px]">6. Шприцевой насос</span>
<br />
<span className="text-[12px]">7. Инфузионный насос</span>
<br />
<span className="text-[12px]">8. Набор для интубации трахеи</span>
<br />
<span className="text-[12px]">9. Дефибриллятор</span>
      </CustomTabPanel>
      <CustomTabPanel  value={value} index={0} >
        <br />
<span className="text-[12px] ml-[700px] relative bottom-[290px]">10.  Матрац термостабилизирующий</span>        
<br />
<span className="text-[12px] ml-[700px] relative bottom-[290px]">11. Автоматический анализатор газов крови</span>       
 <br />       
       <span className="text-[12px] ml-[700px] relative bottom-[290px]">12. Электрокардиограф</span>
        <br />
<span className="text-[12px] ml-[700px] relative bottom-[290px]">13. Транспортируемый рентгеновский аппарат</span> 
<br />
<span className="text-[12px] ml-[700px] relative bottom-[290px]">14. Портативный ультразвуковой </span>  





   </CustomTabPanel>
     
    </Box>
  );
}
