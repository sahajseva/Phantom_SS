import clsx from "clsx";
import * as React from "react";
import { SVGProps } from "react";

const SvgSQLite = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 7 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className={clsx("text-[#081026] dark:text-white", props.className)}
  >
    <defs>
      <linearGradient
        x1="2.983"
        y1=".53"
        x2="2.983"
        y2="4.744"
        id="A"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#97d9f6" offset="0%" />
        <stop stopColor="#0f80cc" offset="92.024%" />
        <stop stopColor="#0f80cc" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M4.96.29H.847c-.276 0-.5.226-.5.5v4.536c0 .276.226.5.5.5h2.71c-.03-1.348.43-3.964 1.404-5.54z"
      fill="#0f80cc"
    />
    <path
      d="M4.81.437H.847c-.196 0-.355.16-.355.355v4.205c.898-.345 2.245-.642 3.177-.628A28.93 28.93 0 0 1 4.811.437z"
      fill="url(#A)"
    />
    <path
      d="M5.92.142c-.282-.25-.623-.15-.96.148l-.15.146c-.576.61-1.1 1.742-1.276 2.607a2.38 2.38 0 0 1 .148.426l.022.1.022.102s-.005-.02-.026-.08l-.014-.04a.461.461 0 0 0-.009-.022c-.038-.087-.14-.272-.187-.352a8.789 8.789 0 0 0-.103.321c.132.242.212.656.212.656s-.007-.027-.04-.12c-.03-.083-.176-.34-.21-.4-.06.22-.083.368-.062.404.04.07.08.2.115.324a7.52 7.52 0 0 1 .132.666l.005.062a6.11 6.11 0 0 0 .015.75c.026.313.075.582.137.726l.042-.023c-.09-.284-.128-.655-.112-1.084.025-.655.175-1.445.454-2.268C4.548 1.938 5.2.94 5.798.464c-.545.492-1.282 2.084-1.502 2.673-.247.66-.422 1.28-.528 1.873.182-.556.77-.796.77-.796s.29-.356.626-.865l-.645.172-.208.092s.53-.323.987-.47c.627-.987 1.31-2.39.622-3.002"
      fill="#003b57"
    />
  </svg>
);

export default SvgSQLite;
