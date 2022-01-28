import { StatisticData } from "../StatisticData/StatisticData"

export const StaticName = ({ data }) => {
  return <div>
    {data.map(data => (
      <StatisticData key={data.id} data={data}/>
    ))}
</div>
}