import cn from "clsx";
import { LayoutProps, useList } from "@pankod/refine-core";
import dynamic from "next/dynamic";

import { Sidebar, Button, LoadingDots } from "@components/ui";
import { CheckoutProvider } from "@components/checkout/context";
import { MenuSidebarView, Footer, Navbar } from "@components/common";
import { useUI } from "@components/ui/context";
import LoginView from "@components/auth/LoginView";
import { CartSidebarView } from "@components/cart";
import { useAcceptCookies } from "@lib/hooks/useAcceptCookies";

import s from "./Layout.module.css";

const Loading = () => (
    <div className="flex h-80 w-80 items-center justify-center p-3 text-center">
        <LoadingDots />
    </div>
);

const dynamicProps = {
    loading: Loading,
};

const SignUpView = dynamic(() => import("@components/auth/SignUpView"), {
    ...dynamicProps,
});

const ForgotPassword = dynamic(
    () => import("@components/auth/ForgotPassword"),
    {
        ...dynamicProps,
    },
);

const FeatureBar = dynamic(() => import("@components/common/FeatureBar"), {
    ...dynamicProps,
});

const Modal = dynamic(() => import("@components/ui/Modal"), {
    ...dynamicProps,
    ssr: false,
});

const ModalView: React.FC<{ modalView: string; closeModal(): any }> = ({
    modalView,
    closeModal,
}) => {
    return (
        <Modal onClose={closeModal}>
            {modalView === "LOGIN_VIEW" && <LoginView />}
            {modalView === "SIGNUP_VIEW" && <SignUpView />}
            {modalView === "FORGOT_VIEW" && <ForgotPassword />}
        </Modal>
    );
};

const ModalUI: React.FC = () => {
    const { displayModal, closeModal, modalView } = useUI();
    return displayModal ? (
        <ModalView modalView={modalView} closeModal={closeModal} />
    ) : null;
};

const SidebarView: React.FC<{
    sidebarView: string;
    closeSidebar: () => void;
    links: any[];
}> = ({ sidebarView, closeSidebar, links }) => {
    return (
        <Sidebar onClose={closeSidebar}>
            {sidebarView === "CART_VIEW" && <CartSidebarView />}
            {sidebarView === "MOBILE_MENU_VIEW" && (
                <MenuSidebarView links={links} />
            )}
        </Sidebar>
    );
};

const SidebarUI: React.FC<{ links: any[] }> = ({ links }) => {
    const { displaySidebar, closeSidebar, sidebarView } = useUI();
    return displaySidebar ? (
        <SidebarView
            links={links}
            sidebarView={sidebarView}
            closeSidebar={closeSidebar}
        />
    ) : null;
};

const Layout: React.FC<LayoutProps & { categories: any }> = ({
    children,
    categories,
    ...rest
}) => {
    const { acceptedCookies, onAcceptCookies } = useAcceptCookies();

    const { data: collectionsData } = useList({
        resource: "collections",
        queryOptions: {
            initialData: categories,
        },
    });
    const collections = collectionsData?.data.slice(0, 2).map((col) => ({
        title: col.title,
        id: col.handle,
    }));

    return (
        <div className={cn(s.root)}>
            <Navbar links={collections} />
            <main className="fit">{children}</main>
            <Footer />
            <ModalUI />
            <CheckoutProvider>
                <SidebarUI links={collections as any[]} />
            </CheckoutProvider>
            <FeatureBar
                title="This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy."
                hide={acceptedCookies}
                action={
                    <Button className="mx-5" onClick={() => onAcceptCookies()}>
                        Accept cookies
                    </Button>
                }
            />
        </div>
    );
};

export default Layout;
