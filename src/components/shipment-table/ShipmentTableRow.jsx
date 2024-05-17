const ShipmentTableRow = ({ details, time, date, branch }) => {
  return (
    <tr>
      <td>{details}</td>
      <td>{time}</td>
      <td>{date}</td>
      <td>
        {branch ? branch : (
          <div className="opacity-50"> - - </div>
        )}
      </td>
    </tr>
  )
}

export default ShipmentTableRow
