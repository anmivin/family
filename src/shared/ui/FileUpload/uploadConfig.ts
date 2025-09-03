import { Dispatch, SetStateAction } from 'react';

import { AxiosProgressEvent } from 'axios';

import { ImageItem } from './FileUpload.types';
export const uploadFileConfig = (
  setIndividualUploadProgress?: (payload: number) => void,
  massUploasPropgress?: { setMassUploasPropgress: Dispatch<SetStateAction<ImageItem[]>>; fileItem: string }
) => {
  const handleChangeUploadProgress = (progressEvent: AxiosProgressEvent) => {
    const { loaded, total } = progressEvent;
    if (!total) return;
    const progress = Math.floor((loaded / total) * 100);
    setIndividualUploadProgress?.(progress);
    massUploasPropgress?.setMassUploasPropgress((prev) =>
      prev.map((item) =>
        item.key === massUploasPropgress.fileItem
          ? {
              ...item,
              uploadProgress: progress,
            }
          : item
      )
    );

    if (loaded == total) {
      setIndividualUploadProgress?.(100);
      massUploasPropgress?.setMassUploasPropgress((prev) =>
        prev.map((item) =>
          item.key === massUploasPropgress.fileItem
            ? {
                ...item,
                uploadProgress: 100,
              }
            : item
        )
      );
    }
  };

  return {
    onUploadProgress: handleChangeUploadProgress,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
};
