type ScrollableFeatureTableProps = {
  headers: string[];
  rows: string[][];
};

export default function ScrollableFeatureTable({ headers, rows }: ScrollableFeatureTableProps) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-white/12 bg-white/[0.04]">
      <table className="min-w-[680px] w-full text-left text-sm">
        <thead className="bg-white/[0.06] text-slate-100">
          <tr>
            {headers.map((header) => (
              <th className="px-5 py-4 font-semibold" key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 text-slate-300">
          {rows.map((row) => (
            <tr key={row.join('|')}>
              {row.map((cell) => (
                <td className="px-5 py-4 align-top leading-6" key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
