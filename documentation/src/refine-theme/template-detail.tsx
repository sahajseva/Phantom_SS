import React, { FC, PropsWithChildren, SVGProps } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { CommonLayout } from "@site/src/refine-theme/common-layout";
import { CommonHeader } from "@site/src/refine-theme/common-header";
import { LandingFooter } from "@site/src/refine-theme/landing-footer";
import { CommonCircleChevronLeft } from "./common-circle-chevron-left";
import { ShareIcon } from "./icons/share";
import * as Icons from "@site/src/assets/integration-icons";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import { CommonRunLocalPrompt } from "./common-run-local-prompt";

type Props = {
    data: {
        slug: string;
        title: string;
        description: string;
        images: string[];
        runOnYourLocalPath: string;
        liveDemo: string;
        github: string;
        tutorial: string;
        reactPlatform: string;
        uiFramework: string;
        dataProvider: string;
        authProvider: string;
    };
};

export const TemplatesDetail: FC<Props> = ({ data }) => {
    return (
        <CommonLayout description="Build React-based internal tools, admin panels, dashboards & B2B apps with unmatched flexibility.">
            <div>
                <CommonHeader />
                <div
                    className={clsx(
                        "w-full max-w-[592px] landing-sm:max-w-[656px] landing-md:max-w-[896px] landing-lg:max-w-[1200px]",
                        "px-4 landing-sm:px-0",
                        "mx-auto",
                        "flex flex-col",
                        "not-prose",
                        "mt-8 landing-lg:mt-20",
                        "px-6 landing-sm:px-0",
                        "pb-8 landing-sm:pb-12 landing-md:pb-16 landing-lg:pb-40",
                    )}
                >
                    <div>
                        <Link
                            to="/templates"
                            className={clsx(
                                "text-base",
                                "font-semibold",
                                "dark:text-gray-400 text-gray-500",
                                "hover:dark:text-gray-400 hover:text-gray-500",
                                "hover:no-underline",
                                "flex",
                                "items-center",
                                "gap-2",
                                "px-0 py-0",
                                "landing-md:px-2 landing-md:py-3",
                            )}
                        >
                            <CommonCircleChevronLeft />
                            Back to templates
                        </Link>
                        <h1
                            className={clsx(
                                "dark:text-gray-0 text-gray-900",
                                "text-4xl landing-sm:text-[56px] landing-sm:leading-[72px]",
                                "font-bold",
                                "px-0 landing-sm:px-8 landing-md:px-10",
                                "mt-6",
                            )}
                        >
                            {data.title}
                        </h1>
                    </div>
                    <div
                        className={clsx(
                            "mt-8 landing-sm:mt-12 landing-md:mt-16",
                            "rounded-lg landing-md:rounded-xl landing-lg:rounded-3xl",
                            "-mx-4 landing-sm:-mx-0",
                            "landing-sm:px-4",
                        )}
                    >
                        <img
                            className={clsx(
                                "rounded-lg landing-md:rounded-xl landing-lg:rounded-3xl",
                                "block",
                            )}
                            src={data.images[0]}
                            alt={data.title}
                        />
                    </div>

                    <div
                        className={clsx(
                            "flex",
                            "items-start",
                            "gap-6",
                            "mt-8 landing-sm:mt-12 landing-md:mt-16",
                            "px-0 landing-sm:px-10 landing-md:px-14 landing-lg:px-10",
                            "not-prose",
                        )}
                    >
                        <div
                            className={clsx(
                                "flex",
                                "flex-col",
                                "gap-8 landing-sm:gap-10",
                            )}
                        >
                            <div
                                className={clsx(
                                    "flex",
                                    "flex-wrap",
                                    "items-center",
                                    "gap-4 landing-md:gap-6",
                                    "landing-lg:pl-4",
                                )}
                            >
                                {data.liveDemo && (
                                    <ProjectLink to={data.liveDemo}>
                                        <ShareIcon width={16} height={16} />
                                        <span
                                            className={clsx(
                                                "text-xs landing-md:text-base",
                                            )}
                                        >
                                            Live demo
                                        </span>
                                    </ProjectLink>
                                )}
                                {data.tutorial && (
                                    <ProjectLink to={data.tutorial}>
                                        <ShareIcon width={16} height={16} />
                                        <span
                                            className={clsx(
                                                "text-xs landing-md:text-base",
                                            )}
                                        >
                                            Tutorial
                                        </span>
                                    </ProjectLink>
                                )}
                                {data.github && (
                                    <ProjectLink to={data.github}>
                                        <ShareIcon width={16} height={16} />
                                        <span
                                            className={clsx(
                                                "text-xs landing-md:text-base",
                                            )}
                                        >
                                            GitHub Repo
                                        </span>
                                    </ProjectLink>
                                )}
                            </div>
                            <Integrations
                                svgId="mobile"
                                className={clsx(
                                    "grid landing-md:hidden",
                                    "grid-cols-2 landing-sm:grid-cols-4",
                                    "gap-6",
                                    "flex-shrink-0",
                                )}
                                reactPlatform={data.reactPlatform}
                                uiFramework={data.uiFramework}
                                dataProvider={data.dataProvider}
                                authProvider={data.authProvider}
                            />
                            <div
                                className={clsx(
                                    "flex",
                                    "flex-col",
                                    "landing-lg:pl-4",
                                )}
                            >
                                <div className={clsx("not-prose")}>
                                    <h2
                                        className={clsx(
                                            "text-xl landing-sm:text-2xl",
                                            "dark:text-gray-0 text-gray-900",
                                        )}
                                    >
                                        Description
                                    </h2>
                                </div>
                                <div
                                    className={clsx(
                                        "dark:text-gray-200 text-gray-600",
                                        "text-sm",
                                        "mt-4 landing-sm:gap-6",
                                    )}
                                >
                                    <ReactMarkdown
                                        className={clsx("whitespace-pre-wrap")}
                                        remarkPlugins={[
                                            remarkGfm,
                                            remarkRehype,
                                        ]}
                                    >
                                        {data.description}
                                    </ReactMarkdown>
                                </div>
                            </div>
                            <div className={clsx()}>
                                <CommonRunLocalPrompt
                                    path={data.runOnYourLocalPath}
                                />
                            </div>
                        </div>
                        <Integrations
                            svgId="desktop"
                            className={clsx(
                                "hidden landing-md:grid",
                                "grid-cols-1 landing-lg:grid-cols-2",
                                "landing-md:gap-10",
                                "px-0 landing-lg:px-10",
                                "landing-md:ml-6 landing-lg:ml-0",
                                "flex-shrink-0",
                                "justify-self-end",
                            )}
                            reactPlatform={data.reactPlatform}
                            uiFramework={data.uiFramework}
                            dataProvider={data.dataProvider}
                            authProvider={data.authProvider}
                        />
                    </div>
                </div>
            </div>
            <LandingFooter />
        </CommonLayout>
    );
};

const ProjectLink: FC<PropsWithChildren<{ to: string }>> = ({
    to,
    children,
}) => {
    return (
        <Link
            to={to}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
                "w-max",
                "flex",
                "items-center",
                "gap-1 landing-md:gap-2",
                "pl-2 py-2 pr-3",
                "landing-md:pl-3 landing-md:py-3 landing-md:pr-6",
                "rounded-full",
                "dark:bg-refine-cyan-alt/10 bg-refine-blue/10",
                "dark:text-refine-cyan-alt text-refine-blue",
                "hover:no-underline",
            )}
        >
            {children}
        </Link>
    );
};

const Integrations = (props: {
    className?: string;
    svgId?: string;
    reactPlatform: string;
    uiFramework: string;
    dataProvider: string;
    authProvider: string;
}) => {
    const {
        reactPlatform,
        uiFramework,
        dataProvider,
        authProvider,
        className,
    } = props;

    return (
        <div className={clsx(className)}>
            <IntegrationBadge
                svgId={props.svgId + "-react"}
                label="React Platform"
                integration={reactPlatform}
            />
            <IntegrationBadge
                svgId={props.svgId + "-ui"}
                label="UI Framework"
                integration={uiFramework}
            />
            <IntegrationBadge
                svgId={props.svgId + "-data"}
                label="Data Provider"
                integration={dataProvider}
            />
            <IntegrationBadge
                svgId={props.svgId + "-auth"}
                label="Auth Provider"
                integration={authProvider}
            />
        </div>
    );
};

const IntegrationBadge = (props: {
    svgId: string;
    label: string;
    integration: string;
}) => {
    const Icon = integrationToIconMap?.[props.integration];

    return (
        <div className={clsx("flex", "flex-col", "gap-3", "not-prose")}>
            <h6 className={clsx("text-xs", "dark:text-gray-400 text-gray-600")}>
                {props.label}
            </h6>
            <div
                role="button"
                className={clsx(
                    "flex",
                    "items-center",
                    "py-2 pl-2 pr-4",
                    "gap-2",
                    "rounded-full",
                    "border dark:border-gray-700 border-gray-200",
                    "w-min",
                )}
            >
                <Icon id={props.svgId} width={16} height={16} />
                <span
                    className={clsx(
                        "text-sm",
                        "whitespace-nowrap",
                        "dark:text-gray-400 text-gray-900",
                    )}
                >
                    {props.integration}
                </span>
            </div>
        </div>
    );
};

const integrationToIconMap = {
    Ably: (props: SVGProps<SVGSVGElement>) => <Icons.Ably {...props} />,
    Airtable: (props: SVGProps<SVGSVGElement>) => <Icons.Airtable {...props} />,
    "Ant Design": (props: SVGProps<SVGSVGElement>) => <Icons.Antd {...props} />,
    Appwrite: (props: SVGProps<SVGSVGElement>) => <Icons.Appwrite {...props} />,
    "Chakra UI": (props: SVGProps<SVGSVGElement>) => (
        <Icons.Chakra {...props} />
    ),
    Directus: (props: SVGProps<SVGSVGElement>) => <Icons.Directus {...props} />,
    Dp: (props: SVGProps<SVGSVGElement>) => <Icons.Dp {...props} />,
    Elide: (props: SVGProps<SVGSVGElement>) => <Icons.Elide {...props} />,
    ElideGraphql: (props: SVGProps<SVGSVGElement>) => (
        <Icons.ElideGraphql {...props} />
    ),
    EntRefine: (props: SVGProps<SVGSVGElement>) => (
        <Icons.EntRefine {...props} />
    ),
    Firebase: (props: SVGProps<SVGSVGElement>) => <Icons.Firebase {...props} />,
    GraphQL: (props: SVGProps<SVGSVGElement>) => <Icons.Graphql {...props} />,
    Hasura: (props: SVGProps<SVGSVGElement>) => <Icons.Hasura {...props} />,
    Headless: (props: SVGProps<SVGSVGElement>) => <Icons.Headless {...props} />,
    "React Hook Form": (props: SVGProps<SVGSVGElement>) => (
        <Icons.HookForm {...props} />
    ),
    Hygraph: (props: SVGProps<SVGSVGElement>) => <Icons.Hygraph {...props} />,
    JSONApi: (props: SVGProps<SVGSVGElement>) => <Icons.JSONApi {...props} />,
    Kbar: (props: SVGProps<SVGSVGElement>) => <Icons.Kbar {...props} />,
    Kinde: (props: SVGProps<SVGSVGElement>) => <Icons.Kinde {...props} />,
    Mantine: (props: SVGProps<SVGSVGElement>) => <Icons.Mantine {...props} />,
    Medusa: (props: SVGProps<SVGSVGElement>) => <Icons.Medusa {...props} />,
    "Material UI": (props: SVGProps<SVGSVGElement>) => <Icons.Mui {...props} />,
    Nest: (props: SVGProps<SVGSVGElement>) => <Icons.Nest {...props} />,
    "NestJsX CRUD": (props: SVGProps<SVGSVGElement>) => (
        <Icons.Nest {...props} />
    ),
    NestQuery: (props: SVGProps<SVGSVGElement>) => (
        <Icons.NestQuery {...props} />
    ),
    "Next.js": (props: SVGProps<SVGSVGElement>) => <Icons.Nextjs {...props} />,
    Nhost: (props: SVGProps<SVGSVGElement>) => <Icons.Nhost {...props} />,
    React: (props: SVGProps<SVGSVGElement>) => <Icons.React {...props} />,
    Remix: (props: SVGProps<SVGSVGElement>) => <Icons.Remix {...props} />,
    "Rest API": (props: SVGProps<SVGSVGElement>) => <Icons.Rest {...props} />,
    Sanity: (props: SVGProps<SVGSVGElement>) => <Icons.Sanity {...props} />,
    "ShadCN UI": (props: SVGProps<SVGSVGElement>) => (
        <Icons.ShadCnUI {...props} />
    ),
    SQLite: (props: SVGProps<SVGSVGElement>) => <Icons.SQLite {...props} />,
    Strapi: (props: SVGProps<SVGSVGElement>) => <Icons.Strapi {...props} />,
    Supabase: (props: SVGProps<SVGSVGElement>) => <Icons.Supabase {...props} />,
    TailwindCSS: (props: SVGProps<SVGSVGElement>) => (
        <Icons.TailwindCss {...props} />
    ),
    UseGenerated: (props: SVGProps<SVGSVGElement>) => (
        <Icons.UseGenerated {...props} />
    ),
    SlackIcon: (props: SVGProps<SVGSVGElement>) => (
        <Icons.SlackIcon {...props} />
    ),
    Atlassian: (props: SVGProps<SVGSVGElement>) => (
        <Icons.Atlassian {...props} />
    ),
    AuthJs: (props: SVGProps<SVGSVGElement>) => <Icons.AuthJs {...props} />,
    Auth0: (props: SVGProps<SVGSVGElement>) => <Icons.Auth0 {...props} />,
    AwsCognito: (props: SVGProps<SVGSVGElement>) => (
        <Icons.AwsCognito {...props} />
    ),
    AzureActiveDirectory: (props: SVGProps<SVGSVGElement>) => (
        <Icons.AzureActiveDirectory {...props} />
    ),
    Clerk: (props: SVGProps<SVGSVGElement>) => <Icons.Clerk {...props} />,
    Expo: (props: SVGProps<SVGSVGElement>) => <Icons.Expo {...props} />,
    Google: (props: SVGProps<SVGSVGElement>) => <Icons.Google {...props} />,
    Okta: (props: SVGProps<SVGSVGElement>) => <Icons.Okta {...props} />,
    MongoDB: (props: SVGProps<SVGSVGElement>) => <Icons.MongoDB {...props} />,
    MsSqlServer: (props: SVGProps<SVGSVGElement>) => (
        <Icons.MsSqlServer {...props} />
    ),
    MySql: (props: SVGProps<SVGSVGElement>) => <Icons.MySql {...props} />,
    PostgreSql: (props: SVGProps<SVGSVGElement>) => (
        <Icons.PostgreSql {...props} />
    ),
    Oracle: (props: SVGProps<SVGSVGElement>) => <Icons.Oracle {...props} />,
};

export type Integration = keyof typeof integrationToIconMap;
