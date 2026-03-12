export default function DataTable({ columns, rows, scrollable = true }) {
  const table = (
    <table className="assignment-table">
      <thead>
        <tr>
          {columns.map((col, i) => (
            <th key={i} style={col.style}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri}>
            {columns.map((col, ci) => (
              <td key={ci} style={col.cellStyle}>
                {col.render ? col.render(row) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  if (scrollable) {
    return <div className="table-scroll">{table}</div>;
  }
  return table;
}
