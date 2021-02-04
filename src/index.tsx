import JsonServer from "./dataProviders/jsonServer";

export { JsonServer };
export { Admin, Resource } from "./containers";
export {
    List,
    Column,
    Table,
    Form,
    FormItem,
    Create,
    Edit,
    TextInput,
    TextareaInput,
    SelectInput,
    AutoCompleteInput,
    ReferenceInput,
} from "./components";

export { IAuthContext as AuthProvider, Sort, Pagination } from "./interfaces";
export { IDataContext as DataProvider } from "./interfaces";
