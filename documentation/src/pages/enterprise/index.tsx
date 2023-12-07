import Head from "@docusaurus/Head";
import clsx from "clsx";
import React from "react";
import { CommonHeader } from "@site/src/refine-theme/common-header";
import { CommonLayout } from "@site/src/refine-theme/common-layout";
import { EnterpriseHeroSection } from "@site/src/refine-theme/enterprise-hero-section";
import { EnterpriseGetSupport } from "@site/src/refine-theme/enterprise-get-support";
import { EnterpriseSecurity } from "@site/src/refine-theme/enterprise-secuity";
import { EnterpriseGetInTouchCta } from "@site/src/refine-theme/enterprise-get-in-touch-cta";
import { EnterpriseFlexibility } from "@site/src/refine-theme/enterprise-flexibility";
import { EnterpriseDataSource } from "@site/src/refine-theme/enterprise-data-source";
import { EnterpriseFrequentUpdates } from "@site/src/refine-theme/enterprise-frequent-updates";
import { LandingTrustedByDevelopers } from "@site/src/refine-theme/landing-trusted-by-developers";
import { EnterpriseFaq } from "@site/src/refine-theme/enterprise-faq";

const Enterprise: React.FC = () => {
    const title = "refine | Open-source Retool for Enterprise";

    return (
        <>
            <Head>
                <html data-active-page="index" />
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <link
                    rel="preload"
                    href="https://refine.new/embed-form"
                    as="document"
                />
            </Head>
            <CommonLayout description="Build React-based internal tools, admin panels, dashboards & B2B apps with unmatched flexibility.">
                <div className={clsx()}>
                    <CommonHeader />
                    <div
                        className={clsx(
                            "flex flex-col",
                            "gap-12 landing-sm:gap-20 landing-md:gap-28 landing-lg:gap-40",
                            "w-full max-w-[592px] landing-sm:max-w-[656px] landing-md:max-w-[896px] landing-lg:max-w-[1200px]",
                            "pb-12 landing-sm:pb-16 landing-md:pb-20 landing-lg:pb-40",
                            "px-2 landing-sm:px-0",
                            "mx-auto",
                        )}
                    >
                        <EnterpriseHeroSection
                            className={clsx(
                                "h-auto landing-md:h-[432px]",
                                "mt-8",
                                "px-4 landing-sm:px-0",
                                "landing-lg:pr-12",
                            )}
                        />
                        <EnterpriseGetSupport />
                        <EnterpriseSecurity />
                        <EnterpriseGetInTouchCta
                            className={clsx(
                                "w-full landing-lg:max-w-[792px] mx-auto",
                            )}
                        />
                        <EnterpriseFlexibility />
                        <EnterpriseDataSource
                            className={clsx(
                                "mt-16 landing-sm:mt-24 landing-md:mt-40",
                            )}
                        />
                        <EnterpriseGetInTouchCta
                            className={clsx(
                                "w-full landing-lg:max-w-[792px] mx-auto",
                            )}
                        />
                        <EnterpriseFrequentUpdates />
                        <LandingTrustedByDevelopers />
                        <EnterpriseFaq
                            className={clsx(
                                "px-4 landing-sm:px-10 landing-lg:px-0",
                                "w-full landing-lg:max-w-[792px] mx-auto",
                            )}
                        />
                        <EnterpriseGetInTouchCta
                            className={clsx(
                                "w-full landing-lg:max-w-[792px] mx-auto",
                            )}
                        />
                    </div>
                </div>
            </CommonLayout>
        </>
    );
};

export default Enterprise;
