import { Fragment, useState } from 'react';
import { useSnapshot } from 'valtio';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { FlameWrap } from '../components/canvasui/FlameWrap';
import { useI18n } from '../i18n/useI18n';
import { uiActions, uiStore } from '../store/ui';
import { kenseFx } from '../lib/canvasEffects';

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3 7.2 L5.8 10 L11 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BillingToggle() {
  const { t } = useI18n();
  const snap = useSnapshot(uiStore);
  const annual = snap.pricingCycle === 'annual';

  return (
    <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-1">
      <button
        type="button"
        onClick={() => uiActions.setPricingCycle('monthly')}
        className={`rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors ${
          !annual
            ? 'bg-white/[0.08] text-white'
            : 'text-ink-muted hover:text-white'
        }`}
      >
        {t.pricing.billingMonthly}
      </button>
      <button
        type="button"
        onClick={() => uiActions.setPricingCycle('annual')}
        className={`inline-flex items-center gap-2 rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors ${
          annual
            ? 'bg-white/[0.08] text-white'
            : 'text-ink-muted hover:text-white'
        }`}
      >
        {t.pricing.billingAnnual}
        <span className="rounded bg-primary/25 px-1.5 py-0.5 text-[11px] font-medium text-primary-soft">
          {t.pricing.saveBadge}
        </span>
      </button>
    </div>
  );
}

function PlanCards() {
  const { t } = useI18n();
  const snap = useSnapshot(uiStore);
  const annual = snap.pricingCycle === 'annual';

  return (
    <div className="mt-12 grid gap-4 overflow-visible lg:grid-cols-4 lg:gap-5">
      {t.pricing.plans.map((plan, index) => {
        const price = plan.custom
          ? plan.priceAnnual
          : annual
            ? plan.priceAnnual
            : plan.priceMonthly;

        const card = (
          <article
            className={`flex h-full flex-col rounded-2xl border p-6 ${
              plan.highlighted
                ? 'border-primary/40 bg-[linear-gradient(180deg,rgba(78, 96, 255,0.2),rgba(18,20,28,0.92))]'
                : 'border-white/8 bg-white/[0.02]'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm font-medium text-white">{plan.name}</h2>
            </div>

            <div className="mt-5 flex items-baseline gap-1">
              <span className="text-[40px] font-medium leading-none tracking-tight text-white">
                {price}
              </span>
              {plan.period && !plan.custom ? (
                <span className="text-sm text-ink-muted">{plan.period}</span>
              ) : null}
            </div>

            {plan.custom ? (
              <p className="mt-2 text-xs text-ink-faint">{'\u00a0'}</p>
            ) : (
              <p className="mt-2 text-xs text-ink-faint">
                {plan.meter
                  ? plan.meter
                  : annual
                    ? t.pricing.billedAnnual
                    : t.pricing.billedMonthly}
                {plan.meter
                  ? ` · ${annual ? t.pricing.billedAnnual : t.pricing.billedMonthly}`
                  : null}
              </p>
            )}

            <p className="mt-4 text-sm font-medium text-ink-muted">
              {plan.audience}
            </p>
            <p className="mt-2 text-sm leading-6 text-ink-faint">
              {plan.description}
            </p>

            <Button
              className="mt-6 w-full"
              variant={plan.highlighted ? 'primary' : 'outline'}
            >
              {plan.cta}
            </Button>

            <ul className="mt-6 flex-1 space-y-2.5 border-t border-white/8 pt-6">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-ink-muted"
                >
                  <span className="mt-0.5 text-primary-soft">
                    <CheckIcon />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            {plan.includes?.length ? (
              <div className="mt-6 border-t border-white/8 pt-5">
                <p className="text-[11px] font-medium uppercase tracking-wide text-ink-faint">
                  {t.pricing.includedLabel}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {plan.includes.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-1 text-xs text-ink-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </article>
        );

        return (
          <Reveal
            key={plan.name}
            delayMs={index * 60}
            className={`h-full ${plan.highlighted ? 'relative z-[1] overflow-visible' : ''}`}
          >
            {plan.highlighted ? (
              <FlameWrap
                className="h-full"
                color={kenseFx.accent}
                intensity={0.9}
                height={52}
                spread={14}
                radius={24}
                speed={0.4}
                scale={0.72}
                turbulence={0.55}
                turbulenceScale={0.6}
                turbulenceReach={18}
                sparks={1.35}
                sparkSize={0.4}
                sparkDensity={1.1}
                sparkSpeed={1.1}
                rim={2.2}
                melt={2.5}
                distortion={5}
                smoke={0.7}
                ember={1.6}
                scorch={0}
              >
                {card}
              </FlameWrap>
            ) : (
              card
            )}
          </Reveal>
        );
      })}
    </div>
  );
}

function StartupProgram() {
  const { t } = useI18n();
  const p = t.pricing.program;

  return (
    <Reveal>
      <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(120deg,rgba(78, 96, 255,0.18),rgba(18,20,28,0.85)_45%,rgba(78,96,255,0.08))] p-7 md:p-10">
        <p className="text-xs font-medium uppercase tracking-wide text-primary-soft">
          {p.eyebrow}
        </p>
        <div className="mt-3 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <h2 className="text-2xl font-medium tracking-tight text-white md:text-[28px]">
              {p.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-ink-muted md:text-base">
              {p.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {p.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2 text-sm text-ink-muted"
                >
                  <span className="text-primary-soft">
                    <CheckIcon />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button>{p.cta}</Button>
            <Button variant="outline">{p.secondary}</Button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function FeatureCompare() {
  const { t } = useI18n();
  const planNames = t.pricing.plans.map((p) => p.name);

  return (
    <section className="mt-24 md:mt-32">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[28px] font-medium tracking-[-0.4px] text-white md:text-[36px]">
            {t.pricing.compare.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-muted">
            {t.pricing.compare.description}
          </p>
        </div>
      </Reveal>

      <Reveal delayMs={80}>
        <div className="mt-10 overflow-x-auto rounded-2xl border border-white/8">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/8 bg-white/[0.03]">
                <th className="px-5 py-4 font-medium text-ink-faint" />
                {planNames.map((name) => (
                  <th
                    key={name}
                    className="px-4 py-4 text-center font-medium text-white"
                  >
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.pricing.compare.categories.map((cat) => (
                <Fragment key={cat.name}>
                  <tr className="bg-white/[0.02]">
                    <td
                      colSpan={5}
                      className="px-5 py-3 text-xs font-medium uppercase tracking-wide text-primary-soft"
                    >
                      {cat.name}
                    </td>
                  </tr>
                  {cat.rows.map((row) => (
                    <tr
                      key={`${cat.name}-${row.feature}`}
                      className="border-t border-white/6"
                    >
                      <td className="px-5 py-3.5 text-ink-muted">
                        {row.feature}
                      </td>
                      {row.values.map((value, i) => (
                        <td
                          key={`${row.feature}-${planNames[i]}`}
                          className="px-4 py-3.5 text-center text-ink-muted"
                        >
                          {value === '✓' ? (
                            <span className="inline-flex text-primary-soft">
                              <CheckIcon />
                            </span>
                          ) : (
                            value
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}

function PricingFaq() {
  const { t } = useI18n();
  const [open, setOpen] = useState(0);

  return (
    <section className="mt-24 md:mt-32">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[28px] font-medium tracking-[-0.4px] text-white md:text-[36px]">
            {t.pricing.faq.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-muted">
            {t.pricing.faq.subtitle}
          </p>
        </div>
      </Reveal>

      <div className="mx-auto mt-10 max-w-3xl space-y-2">
        {t.pricing.faq.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.q} delayMs={i * 40}>
              <div className="rounded-xl border border-white/8 bg-white/[0.02]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="text-sm font-medium text-white md:text-base">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 text-ink-faint transition-transform ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen ? (
                  <div className="border-t border-white/8 px-5 py-4 text-sm leading-7 text-ink-muted">
                    {item.a}
                  </div>
                ) : null}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function BottomCta() {
  const { t } = useI18n();
  const c = t.pricing.bottomCta;

  return (
    <section className="mt-24 md:mt-32">
      <Reveal>
        <div className="rounded-2xl border border-white/8 bg-[linear-gradient(180deg,rgba(28,20,76,0.4),rgba(11,12,17,0.9))] px-6 py-14 text-center md:px-10 md:py-16">
          <h2 className="mx-auto max-w-2xl text-[28px] font-medium tracking-[-0.4px] text-white md:text-[36px] md:leading-[1.25]">
            {c.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-ink-muted">
            {c.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button className="h-11 px-5">{c.primary}</Button>
            <Button variant="outline" className="h-11 px-5">
              {c.secondary}
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function PricingPage() {
  const { t } = useI18n();

  return (
    <div className="overflow-visible pb-24 pt-14 md:pb-32 md:pt-20">
      <div className="container-pricing overflow-visible">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-[36px] font-medium leading-[1.2] tracking-[-0.96px] text-white md:text-[48px] md:leading-[1.38]">
              {t.pricing.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink-muted md:text-lg">
              {t.pricing.description}
            </p>
            <div className="mt-8 flex justify-center">
              <BillingToggle />
            </div>
          </div>
        </Reveal>

        <PlanCards />
        <StartupProgram />
        <FeatureCompare />
        <PricingFaq />
        <BottomCta />
      </div>
    </div>
  );
}
