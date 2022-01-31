

export const StatisticData = ({ title, stats }) => {
  return  <section>
  <h2>Upload stats</h2>

  <ul>
    {stats.map((stats) => {
      return (
        <StatisticData>
          <li>
            key={stats.id}
          </li>
          <li>
            {stats.label}
          </li>
          <li>
            {stats.percentage}
          </li>
        </StatisticData>
      );
         
    })}
</ul>
    </section>
}