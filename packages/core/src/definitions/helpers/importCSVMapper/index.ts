import { ConsoleSqlOutlined } from "@ant-design/icons";
import zip from "lodash/zip";
import { MapDataFn } from "../../../components/buttons/import/csvImport.interface";
// import { BaseRecord } from "../../../interfaces";

export const importCSVMapper = (
    data: unknown[][],
    mapData: MapDataFn = (item) => item,
) => {
    const [headers, ...body] = data;

    return body
        .map((entry) => Object.fromEntries(zip(headers, entry)))
        .map((item, index, array) =>
            mapData.call(undefined, item, index, array, data),
        );
};
