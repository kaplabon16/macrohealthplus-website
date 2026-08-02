type BrandedTextProps = {
  children: string;
};

export default function BrandedText({ children }: BrandedTextProps) {
  return (
    <>
      {children.split(/\b(MIMS)\b/g).map((part, index) => (
        part === 'MIMS'
          ? <span className="mims-wordmark-text" key={`${part}-${index}`}>MIMS</span>
          : part
      ))}
    </>
  );
}
