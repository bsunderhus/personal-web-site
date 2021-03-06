import { Event } from "components/Event";
import { Link } from "components/Link";
import { List, ListItem } from "components/List";
import { TimeStamp } from "components/TimeStamp";
import { SVGProps } from "react";
import style from "./style.module.scss";

export function BarclaysEvent() {
  return (
    <Event
      className={style.sectionEvent}
      title={<h3 className={style.sectionTitle}>Senior Frontend Web Engineer</h3>}
      location={(
        <Link className={style.sectionAnchor} href="https://www.barclays.co.uk/">
          Barclays
        </Link>
      )}
      timestamp={<TimeStamp from="08/20" to="02/21" className={style.caption}/>}
    >
      <div className={style.sectionContent}>
        <BarclaysIcon className={style.logo} width={150} height={150}/>
        <p className={style.text}>
          Barclays is a British multinational investment bank and financial services company,
          headquartered in London, England.
          Apart from investment banking, Barclays is organized into four core businesses: personal banking,
          corporate banking, wealth management, and investment management.
        </p>
        <p className={style.text}>
          I've worked in the <abbr className={style.abbreviation} title="Risk Finance & Treasury">RFT</abbr> department,
          Working on the OneRisk UI internal application, for analyzing risks.
          The application is mainly developed under the <Link className={style.sectionAnchor} href="https://angular.io/">Angular</Link>.
        </p>
      </div>
    </Event>
  )
}

function BarclaysIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 27.8 30" {...props}>
      <radialGradient
        id="prefix__a"
        cx={-328.717}
        cy={310.873}
        r={0.428}
        gradientTransform="matrix(71.4087 0 0 -71.4086 23474.04 22204.375)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#20c4f4" />
        <stop offset={0.304} stopColor="#09b4f0" />
        <stop offset={0.5} stopColor="#00aeef" />
        <stop offset={0.8} stopColor="#0092c8" />
        <stop offset={1} stopColor="#006e98" />
      </radialGradient>
      <path
        d="M26.7 6.5c-.3-.6-.8-1.4-1.5-2-.3-.3-.7-.5-1.2-.6-.4-.1-.8-.2-1.2-.2h-.1c-.5 0-1.5.1-2.1.9-.3.3-.4.8-.3 1.3.1.4.3.7.7.8 0 0 .1 0 .3.1-.1 0-.2.2-.2.2-.2.3-.7.8-2.1.8h-.1c-.7 0-1.3-.2-2-1.1-.4-.6-.7-1.5-.7-3.1 0-.8-.1-1.5-.3-2-.1-.4-.4-.7-.7-.9-.2-.2-.5-.3-.9-.4-.4-.3-1-.3-1.5-.3-.6 0-.9.1-1.1.4 0 0 0 .1-.1.1h-.4c-.3 0-.6.1-.9.1-.6.1-.9.3-1.3.6-.1.1-.4.4-.5.8-.1.3 0 .5.1.6 0 0 0 .1.1.1.2-.2.5-.3 1-.3.6 0 1.5.3 1.8.8.4.7.3 1.2.2 1.9-.2 1.7-.9 2.6-2.2 2.8h-.7c-1 0-1.7-.3-2-.9-.2-.2-.2-.3-.2-.3s.1 0 .2-.1c.4-.2.6-.4.7-.8.1-.4 0-.9-.3-1.3-.5-.5-1.2-.8-2.1-.8-.5 0-.9.1-1.2.2-1.2.3-2.1 1.1-2.8 2.6-.5 1-.9 2.4-1 3.8C0 11.7 0 12.9.1 14c.2 1.8.5 2.9.9 4 .4 1.2 1 2.3 1.6 3.3.2.4.3.6.4.7.1-.1.2-.2.3-.4.2-.2.9-1.1 1.1-1.4.3-.2.6-.8.8-1.2l.1-.2.2.2c.2.2.3.4.3.7 0 .3-.1.6-.2 1.2-.2.6-.5 1.4-.9 2 0 .1-.1.2-.1.2-.2.4-.3.6-.2.7.1 0 .4-.1.7-.4.3-.2 1-.8 1.9-2.1.7-.9 1.2-1.9 1.7-3l.1-.2.2.1c.1 0 .2.1.2.2.1.2.1.4.1.7-.1.7-.5 1.7-.8 2.4-.5 1.2-1.5 2.6-2.2 3.6 0 0-.2.2-.2.3.1.1.2.2.4.3l.3.2c1 .8 1.9 1.5 3.1 2.1.9.5 2.8 1.5 4 1.8 1.2-.3 3.1-1.3 4-1.8 1.2-.7 2.1-1.3 3.1-2.1l.3-.2c.2-.1.3-.3.4-.3 0 0-.1-.1-.1-.2l-.1-.1c-.7-1-1.7-2.4-2.2-3.6-.3-.7-.7-1.8-.8-2.4 0-.3 0-.5.1-.7 0-.1.1-.1.2-.2s.2-.1.2-.1l.1.2c.5 1.1 1.1 2 1.7 3 .9 1.3 1.6 1.9 1.9 2.1.3.2.6.4.7.4h.1c.1-.1 0-.3-.2-.7 0-.1-.1-.2-.1-.2-.4-.7-.7-1.4-.9-2-.2-.6-.3-.9-.3-1.2 0-.3.1-.6.3-.7l.2-.1.1.2c.2.4.6 1 .7 1.2.2.3.9 1.1 1.1 1.4l.3.3c.1-.1.2-.3.4-.6v-.1c.6-1 1.1-2.1 1.6-3.3.4-1.2.7-2.2.9-4 .1-1.1.2-2.3 0-3.7 0-1.4-.3-2.8-.9-3.8z"
        fill="url(#prefix__a)"
      />
    </svg>
  )
}
