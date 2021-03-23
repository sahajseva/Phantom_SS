import React from "react";
import { RcFile, UploadFile } from "antd/lib/upload/interface";

import { file2Base64, UploadFileWithBase64 } from "@definitions/upload";

export const useBase64Upload = (formData: UploadFile[], maxCount = 1) => {
    const [uploadedFiles, setUploadedFiles] = React.useState<
        UploadFileWithBase64[]
    >([]);
    const [fileList, setFileList] = React.useState<UploadFile[]>([]);

    const beforeUpload = (file: RcFile): boolean => {
        const totalFiles = fileList.length;
        if (totalFiles < maxCount) {
            setFileList([...fileList, file]);
        }

        return false;
    };

    const onRemove = (file: UploadFile) => {
        const index = fileList.indexOf(file);
        const newFileList = fileList.slice();
        newFileList.splice(index, 1);

        setFileList(newFileList);
    };

    React.useEffect(() => {
        setFileList(formData);
    }, [formData]);

    React.useEffect(() => {
        const files = [];
        (async () => {
            for (const file of fileList) {
                if (file instanceof Blob) {
                    files.push(await file2Base64(file));
                } else {
                    files.push(file);
                }
            }
            setUploadedFiles(files);
        })();
    }, [fileList]);

    return {
        uploadedFiles,
        beforeUpload,
        fileList,
        onRemove,
        maxCount,
    };
};
