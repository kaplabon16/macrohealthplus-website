import { paymentMethods } from '../../data/paymentMethods';

type PaymentMethodsStripProps = {
  className?: string;
};

export default function PaymentMethodsStrip({ className = '' }: PaymentMethodsStripProps) {
  return (
    <section className={`bg-black px-4 py-7 sm:px-6 sm:py-9 lg:py-12 ${className}`} aria-label="Payment methods">
      <div className="mx-auto max-w-6xl border-y border-white/10 py-5 sm:py-6 lg:py-8">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-green-300 sm:mb-8">Accepted payment methods</p>
        <div className="grid grid-cols-2 items-start gap-x-4 gap-y-6 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-7">
          {paymentMethods.map((method) => (
            <span
              className="group inline-flex min-w-0 flex-col items-center justify-start gap-3 bg-transparent"
              key={method.title}
              title={method.title}
            >
              <span className="flex h-16 w-44 max-w-full items-center justify-center overflow-visible">
                <img
                  className="payment-method-logo h-14 w-44 max-w-full object-contain"
                  src={method.logoPath}
                  alt={method.altText}
                  loading="lazy"
                  decoding="async"
                  style={{ transform: `scale(${method.opticalScale})` }}
                />
              </span>
              <span className="payment-method-name text-center text-xs font-medium">{method.title}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
