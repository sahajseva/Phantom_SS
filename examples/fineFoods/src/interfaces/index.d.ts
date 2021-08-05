export interface IOrderChart {
    count: number;
    status:
        | "waiting"
        | "ready"
        | "on the way"
        | "delivered"
        | "could not be delivered";
}

export interface IOrderTotalCount {
    total: number;
    totalDelivered: number;
}

export interface ISalesChart {
    date: string;
    title: "Order Count" | "Order Amount";
    value: number;
}

export interface IOrderStatus {
    id: string;
    text: "pending" | "ready" | "on the way" | "delivered" | "cancelled";
}

export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    fullName: string;
    gender: string;
    gsm: string;
    createdAt: string;
    isActive: boolean;
    avatar: IFile[];
    addresses: IAddress[];
}

export interface IAddress {
    text: string;
    coordinate: [string, string];
}

export interface IFile {
    name: string;
    percent: number;
    size: number;
    status: "error" | "success" | "done" | "uploading" | "removed";
    type: string;
    uid: string;
    url: string;
}

export interface IEvent {
    date: string;
    name: string;
}

export interface IStore {
    id: string;
    title: string;
    isActive: boolean;
    createdAt: string;
    address: IAddress;
    products: IProduct[];
}

export interface ICourier {
    id: string;
    name: string;
    surname: string;
    gender: string;
    gsm: string;
    createdAt: string;
    isActive: boolean;
    avatar: IFile[];
}
export interface IOrder {
    id: string;
    user: IUser;
    createdAt: string;
    products: IProduct[];
    status: IOrderStatus;
    adress: IAddress;
    store: IStore;
    courier: {};
    events: IEvent[];
    orderNumber: number;
    amount: number;
}

export interface IProduct {
    id: string;
    name: string;
    isActive: boolean;
    description: string;
    images: IFile[];
    createdAt: string;
    price: number;
    category: ICategory;
    stock: number;
}

export interface ICategory {
    id: string;
    title: string;
    isActive: boolean;
}

export interface IOrderFilterVariables {
    q: string;
    store: string;
    user: string;
    createdAt: [Dayjs, Dayjs];
    status: string;
}

export interface IUserFilterVariables {
    q: string;
    status: boolean;
}

export interface ICourier {
    id: string;
    name: string;
    surname: string;
    gender: string;
    gsm: string;
    createdAt: string;
    isActive: boolean;
    avatar: IFile[];
}
