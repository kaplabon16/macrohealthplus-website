import type { CSSProperties } from 'react';
import { Plus } from 'lucide-react';

type CapabilityNetworkProps = {
  product: string;
  features: string[];
};

const nodePositions = [
  { x: 17, y: 23, side: 'left' },
  { x: 50, y: 14, side: 'center' },
  { x: 83, y: 23, side: 'right' },
  { x: 17, y: 76, side: 'left' },
  { x: 50, y: 86, side: 'center' },
  { x: 83, y: 76, side: 'right' },
] as const;

const accents = ['#69b128', '#58d5ce', '#6b9cff', '#f4b63f', '#b66bea', '#f4778a'];

function connectionPath(x: number, y: number) {
  const controlY = y < 50 ? y + 17 : y - 17;
  return `M 50 50 C 50 ${controlY}, ${x} ${controlY}, ${x} ${y}`;
}

export default function CapabilityNetwork({ product, features }: CapabilityNetworkProps) {
  const items = features.slice(0, nodePositions.length);

  return (
    <div className="capability-network" style={{ '--capability-mobile-count': items.length } as CSSProperties}>
      <div className="capability-network-grid" aria-hidden="true" />
      <svg className="capability-network-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {items.map((_, index) => {
          const position = nodePositions[index];
          return (
            <path
              key={`${position.x}-${position.y}`}
              d={connectionPath(position.x, position.y)}
              pathLength={1}
              style={{ '--capability-line': accents[index] } as CSSProperties}
            />
          );
        })}
      </svg>

      <div className="capability-network-core">
        <span className="capability-network-logo" aria-hidden="true">
          <Plus strokeWidth={4} />
        </span>
        <span>
          <strong>{product}</strong>
          <small>Connected core</small>
        </span>
      </div>

      {items.map((feature, index) => {
        const position = nodePositions[index];
        const style = {
          '--capability-x': `${position.x}%`,
          '--capability-y': `${position.y}%`,
          '--capability-accent': accents[index],
          '--capability-delay': `${index * -0.55}s`,
        } as CSSProperties;

        return (
          <div
            className={`capability-network-node capability-network-node-${position.side}`}
            key={feature}
            style={style}
          >
            <i aria-hidden="true" />
            <span>{feature}</span>
          </div>
        );
      })}
    </div>
  );
}
