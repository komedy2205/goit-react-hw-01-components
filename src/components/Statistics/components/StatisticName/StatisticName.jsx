import { StatisticData } from "../StatisticData/StatisticData"

export const StatisticName = ({ data }) => {
  return <ul>
    {data.map((data) => {
      return (
        <StatisticData
          key={data.id}
          label={data.label}
          percentage={data.percentage} />
      );
    })}
</ul>
}