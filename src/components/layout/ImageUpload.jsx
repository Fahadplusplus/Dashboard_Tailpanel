import { useDropzone } from "react-dropzone";
import { useState } from "react";

function ImageUpload({ setImageFile, setError }) {
  const [preview, setPreview] = useState(null);


  const onDrop = (acceptedFiles, fileRejections) => {
  
    if (fileRejections.length > 0) {
      setError((prev) => ({
        ...prev,
        image: "Only JPG, PNG, GIF under 5MB allowed",
      }));
      return;
    }

    const file = acceptedFiles[0];

    setImageFile(file);
    setPreview(URL.createObjectURL(file));

    setError((prev) => ({
      ...prev,
      image: "",
    }));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpg", ".jpeg", ".png", ".gif"],
    },
    maxSize: 5 * 1024 * 1024, // 5MB
  });
  
  

  return (
    <div
      {...getRootProps()}
      className={` Border p-4 text-center rounded ${
        isDragActive ? "bg-light border-primary" : "border-secondary"
      }`}
      style={{ cursor: "pointer" }}
    >
      <input {...getInputProps()} />

      {isDragActive ? (
        <p>Drop the image here...</p>
      ) : (
        <p>Drag & drop image here, or click to select</p>
      )}

      {preview && (
        <img
          src={preview}
          alt="preview"
          className="mt-3 img-fluid rounded"
          style={{ maxHeight: "200px" }}
        />
      )}
    </div>
  );
}

export default ImageUpload;