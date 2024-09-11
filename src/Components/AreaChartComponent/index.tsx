/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Area, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, ResponsiveContainer } from "recharts";
import { useAuth } from "../../hooks/useAuth";

interface Props {
  theme?: string;
  data:Array<any>;
}
const AreaChartComponent: React.FC<Props> = ({ theme,data }) => {
  const [resolvedData,setResolvedData] = useState<Array<any>>([])
  const context = useAuth()
  useEffect(() => {
    setResolvedData(data?.map((el:any) => {
      return {
        name:el.month,
        view:el.count
      }
    }))
  },[data])
  return (
    <div className="relative w-[100%]  ">
      {context.currentUser.type_of_account.getType() == 'Free'?
          <>
            <div className={`bg-[#F3F4F6] ${theme}-BarChartComponent-container-notShow`}>
              <p className={`${theme}-AreaChartComponent-text absolute top-4 left-4 z-10`}>Page Views</p>
              <img className=" scale-[.3] w-full z-20 " src="/Carbon/Frame1000003689.png" alt=""/>
            </div>
          </>
          :
          <div className={`${theme}-AreaChartComponent-container`}>
            <p className={`${theme}-AreaChartComponent-text z-30`}>Page Views</p>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                  data={resolvedData}
                  margin={{
                top: 10,
                right: 10,
                left: -40,
                bottom: 0,
              }}
            >
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="name" strokeWidth="0px" fontSize={12} stroke="#9CA3AF" />
              <YAxis fontSize={12} stroke="#9CA3AF" />
              <Tooltip />
              <Area type="monotone" dataKey="view" stroke="#6D28D9" opacity={0.5} fill="#6D28D9" />
            </AreaChart>
          </ResponsiveContainer>
        </div> 
      }
    
    </div>
  );
};

export default AreaChartComponent;
