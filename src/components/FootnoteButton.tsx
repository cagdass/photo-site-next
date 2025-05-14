export default function FootnoteButton({ number, note }: { number: number; note: string }) {
  return (
    <sup title={note} className="text-blue-600 cursor-help hover:underline">
      [{number}]
    </sup>
  );
}