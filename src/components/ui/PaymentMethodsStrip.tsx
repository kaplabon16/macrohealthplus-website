import { paymentMethods } from '../../data/paymentMethods';

type PaymentMethodsStripProps = {
  className?: string;
};

export default function PaymentMethodsStrip({ className = '' }: PaymentMethodsStripProps) {
  return (
    <section className={`bg-black px-6 py-14 ${className}`} aria-label="Payment methods">
      <div className="mx-auto max-w-7xl border-y border-white/10 py-8">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10">
          {paymentMethods.map((method) => (
            <span
              className={`inline-flex h-20 items-center justify-center transition duration-300 hover:opacity-100 ${
                method.wide ? 'min-w-72' : 'min-w-36'
              } ${
                method.needsBacking
                  ? 'rounded-md border border-white bg-[#ffffff] px-5 py-3 shadow-[0_20px_60px_rgba(255,255,255,0.1)]'
                  : ''
              }`}
              key={method.title}
              title={method.title}
            >
              <img
                className={`${
                  method.needsBacking ? (method.wide ? 'h-16 max-w-72' : 'h-14 max-w-40') : method.wide ? 'h-14 max-w-72' : 'h-12 max-w-36'
                } object-contain opacity-95`}
                src={method.logoPath}
                alt={method.altText}
                loading="lazy"
                decoding="async"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
