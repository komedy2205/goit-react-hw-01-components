
export const StatisticData = ({ data: { id, label, percentage } }) => {
  return  <section>
  <h2>Upload stats</h2>

  <ul>
    <li>
      <span>{label}</span>
      <span>4%</span>
    </li>
    <li>
      <span>.mp3 </span>
      <span>14%</span>
    </li>
    <li>
      <span>.pdf </span>
      <span>41%</span>
    </li>
    <li>
      <span>.mp4 </span>
      <span>12%</span>
    </li>
  </ul>
    </section>
}