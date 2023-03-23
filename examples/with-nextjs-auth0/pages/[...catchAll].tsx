import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { ErrorComponent } from "@refinedev/antd";
import { GetServerSideProps } from "next";

export default function CatchAll() {
    return <ErrorComponent />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
    const authRequiredProps = withPageAuthRequired();
    const session = await getSession(context.req, context.res);
    if (!session?.user) {
        return {
            props: {},
            redirect: {
                destination: `/login?to=${encodeURIComponent("/blog-posts")}`,
            },
        };
    }

    return {
        props: {
            ...authRequiredProps,
        },
    };
};
