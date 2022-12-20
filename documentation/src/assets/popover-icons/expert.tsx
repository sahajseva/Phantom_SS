import * as React from "react";
import { SVGProps } from "react";

const SvgExpert = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
    <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className ? className : undefined}
        {...props}
    >
        <path
            opacity="0.75"
            d="M15.9982 2.02601e-05C12.9902 2.02601e-05 10.5311 2.46092 10.5311 5.46893C10.5311 7.22998 11.3775 8.79829 12.6801 9.79993C10.0138 11.051 8.1616 13.7517 8.1616 16.8899V18.9671C8.16055 19.2179 8.25981 19.4587 8.43734 19.6362C8.6146 19.8135 8.85569 19.9128 9.10647 19.912H22.8991C23.4188 19.9099 23.8387 19.4868 23.8366 18.9671V16.8898C23.8366 13.7511 21.9844 11.0507 19.3181 9.79991C20.6206 8.79834 21.4671 7.22997 21.4671 5.46891C21.4671 2.46097 19.0062 0 15.9981 0L15.9982 2.02601e-05ZM15.9982 1.88242C17.989 1.88242 19.5847 3.47802 19.5847 5.46893C19.5847 7.45977 17.9891 9.05356 15.9982 9.05356C14.0073 9.05356 12.4135 7.45977 12.4135 5.46893C12.4135 3.47809 14.0073 1.88242 15.9982 1.88242V1.88242ZM15.9982 10.9361C19.3141 10.9361 21.9597 13.5743 21.9597 16.8903V18.03H10.0441V16.8903C10.0441 13.574 12.6823 10.9361 15.9983 10.9361H15.9982ZM5.01234 22.0154C4.66727 22.0038 4.35503 22.2184 4.2421 22.5448L3.38359 25.0136L0.769545 25.0669C0.4355 25.0743 0.142693 25.2917 0.0389725 25.6092C-0.0647613 25.927 0.0431741 26.2752 0.308149 26.4788L2.39089 28.0597L1.63719 30.5616C1.53898 30.8825 1.65479 31.2302 1.92607 31.428C2.19708 31.6257 2.56395 31.6299 2.83943 31.4385L4.98288 29.944L7.13003 31.4367C7.40498 31.6284 7.77133 31.625 8.04259 31.4283C8.31387 31.2313 8.43099 30.8844 8.33409 30.5633L7.57487 28.0613L9.66131 26.4804C9.92786 26.2777 10.0368 25.9281 9.93312 25.6099C9.82912 25.2913 9.535 25.0733 9.19992 25.0668L6.58587 25.0116L5.72925 22.5428V22.5431C5.63156 22.2634 5.38496 22.0622 5.09136 22.0228C5.0651 22.0189 5.03884 22.0163 5.01231 22.0152L5.01234 22.0154ZM16.0271 22.0154C15.682 22.0038 15.3698 22.2184 15.2568 22.5448L14.3965 25.0136L11.7825 25.0669C11.4484 25.0743 11.1556 25.2917 11.0519 25.6092C10.9482 25.927 11.0561 26.2752 11.3211 26.4788L13.4057 28.0597L12.6483 30.5616C12.549 30.8831 12.6651 31.2321 12.9372 31.4301C13.209 31.6281 13.5769 31.6315 13.8523 31.4385L15.9976 29.944L18.1448 31.4367C18.4197 31.6284 18.7861 31.625 19.0573 31.4283C19.3286 31.2313 19.4457 30.8844 19.3488 30.5632L18.5896 28.0613L20.6742 26.4804C20.9408 26.2776 21.0498 25.9281 20.946 25.6098C20.842 25.2913 20.5479 25.0733 20.2128 25.0668L17.6007 25.0116L16.744 22.5428V22.543C16.6464 22.2634 16.3998 22.0622 16.1062 22.0228C16.0799 22.0189 16.0536 22.0162 16.0271 22.0152L16.0271 22.0154ZM27.0405 22.0154C26.6962 22.0046 26.3847 22.2192 26.272 22.5448L25.4117 25.0136L22.7958 25.0669C22.4623 25.0751 22.17 25.2928 22.0666 25.6103C21.9633 25.9275 22.0713 26.2755 22.3363 26.4787L24.4209 28.0597L23.6635 30.5616C23.5653 30.8825 23.6811 31.2302 23.9524 31.428C24.2234 31.6257 24.5902 31.6299 24.8657 31.4385L27.0129 29.944L29.1581 31.4367C29.4331 31.6284 29.7994 31.625 30.0707 31.4283C30.342 31.2313 30.4591 30.8844 30.3622 30.5632L29.603 28.0613L31.6894 26.4804C31.956 26.2776 32.0649 25.9281 31.9612 25.6098C31.8572 25.2913 31.5631 25.0733 31.228 25.0667L28.614 25.0116L27.7574 22.5428V22.543C27.6597 22.2633 27.4131 22.0622 27.1195 22.0228C27.0932 22.0189 27.0669 22.0162 27.0404 22.0152L27.0405 22.0154Z"
            fill="url(#paint0_linear_1502_105)"
        />
        <defs>
            <linearGradient
                id="paint0_linear_1502_105"
                x1="16"
                y1="0"
                x2="16"
                y2="31.581"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#3FDCF7" />
                <stop offset="1" stopColor="#1890FF" />
            </linearGradient>
        </defs>
    </svg>
);

export default SvgExpert;
