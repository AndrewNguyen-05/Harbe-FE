"use client";

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const ImagePicker = ({ onFileAccepted }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      onFileAccepted(acceptedFiles);
    },
    [onFileAccepted]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
  });

  return (
    <div
      {...getRootProps()}
      className="border-[3px] w-[240px] h-[240px] flex justify-center items-center rounded-[8px] border-blue-300 bg-blue-50 cursor-pointer border-dashed"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p className="w-[200px]">
          Drag 'n' drop some files here, or click to select files
        </p>
      )}
    </div>
  );
};

export default ImagePicker;
