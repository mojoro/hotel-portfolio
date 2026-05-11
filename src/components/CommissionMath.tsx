import { useMemo, useState } from 'react';

export default function CommissionMath() {
  const [rooms, setRooms] = useState(48);
  const [adr, setAdr] = useState(285);
  const [occupancy, setOccupancy] = useState(68);
  const [otaShare, setOtaShare] = useState(55);

  const numbers = useMemo(() => {
    const annualRevenue = rooms * (adr * (occupancy / 100)) * 365;
    const otaRevenue = annualRevenue * (otaShare / 100);
    const commissionLow = otaRevenue * 0.15;
    const commissionHigh = otaRevenue * 0.25;
    const recoverable = (commissionLow + commissionHigh) / 2;
    return {
      annualRevenue,
      otaRevenue,
      commissionLow,
      commissionHigh,
      recoverable,
    };
  }, [rooms, adr, occupancy, otaShare]);

  const fmt = (n: number) =>
    n.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    });

  return (
    <section className="relative overflow-hidden bg-sand-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="The math nobody wants to do"
          title="Every commission is margin leaving the property."
          description="OTA commissions typically take 15–25% of every booking. For a mid-size hotel, that's six or seven figures walking out the door every year. Move the sliders."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <Slider
              label="Rooms"
              value={rooms}
              min={10}
              max={250}
              step={1}
              suffix=""
              onChange={setRooms}
            />
            <Slider
              label="Average Daily Rate (ADR)"
              value={adr}
              min={120}
              max={900}
              step={5}
              prefix="$"
              onChange={setAdr}
            />
            <Slider
              label="Annual occupancy"
              value={occupancy}
              min={40}
              max={95}
              step={1}
              suffix="%"
              onChange={setOccupancy}
            />
            <Slider
              label="Share of bookings from OTAs"
              value={otaShare}
              min={20}
              max={90}
              step={1}
              suffix="%"
              onChange={setOtaShare}
            />
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl bg-ink-900 p-7 text-sand-50 shadow-[var(--shadow-card-dark-hover)]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-sand-300">
                Estimated annual OTA commission, this property
              </p>
              <div className="mt-3 flex flex-wrap items-baseline gap-x-3">
                <span className="font-display text-[2.75rem] leading-none font-medium text-sand-50 sm:text-[3.25rem]">
                  {fmt(numbers.commissionLow)}
                </span>
                <span className="text-sand-300">to</span>
                <span className="font-display text-[2.75rem] leading-none font-medium text-brass-500 sm:text-[3.25rem]">
                  {fmt(numbers.commissionHigh)}
                </span>
              </div>
              <p className="mt-3 text-sm text-sand-200">
                15–25% commission on revenue routed through Booking.com,
                Expedia, and similar channels.
              </p>
            </div>

            <div className="rounded-3xl bg-sand-50 p-7 shadow-card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-ink-500">
                    Modeled recovery scenario
                  </p>
                  <p className="mt-2 font-display text-2xl font-medium text-ink-900">
                    {fmt(numbers.recoverable * 0.3)} – {fmt(numbers.recoverable * 0.6)}
                    <span className="ml-2 text-sm font-normal text-ink-600">
                      per year
                    </span>
                  </p>
                </div>
                <span className="rounded-full bg-leaf-600/10 px-2.5 py-1 text-[11px] font-medium text-leaf-600">
                  Illustrative
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-700">
                If OTA demand shifts to direct over 12–18 months, this is the
                order of magnitude in play. A directional model, not a promise —
                we'll model your actual numbers in the audit.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <Mini label="Scenario A" value="~30%" />
                <Mini label="Scenario B" value="~45%" />
                <Mini label="Scenario C" value="~60%" />
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-ink-500">
          Estimates only. We don't promise specific outcomes. Figures use
          industry-typical OTA commission bands and assume a healthy property.
          We'll model your actual numbers in the free audit.
        </p>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brass-700">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-[1.1] text-ink-900 sm:text-[2.5rem]">
        {title}
      </h2>
      <p className="mt-5 text-pretty text-base leading-relaxed text-ink-700 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  prefix = '',
  suffix = '',
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block rounded-2xl bg-sand-50 p-5 shadow-[var(--shadow-inset-line)]">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-ink-800">{label}</span>
        <span className="font-display text-xl font-medium text-ink-900">
          {prefix}
          {value.toLocaleString('en-US')}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="mt-3 w-full accent-[color:var(--color-ink-900)]"
      />
      <div className="mt-1 flex justify-between text-[11px] text-ink-500">
        <span>
          {prefix}
          {min.toLocaleString('en-US')}
          {suffix}
        </span>
        <span>
          {prefix}
          {max.toLocaleString('en-US')}
          {suffix}
        </span>
      </div>
    </label>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-sand-100 px-3 py-3">
      <p className="text-[10.5px] uppercase tracking-wider text-ink-500">
        {label}
      </p>
      <p className="mt-1 font-display text-lg font-medium text-ink-900">
        {value}
      </p>
    </div>
  );
}
