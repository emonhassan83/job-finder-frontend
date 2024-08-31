/* eslint-disable @typescript-eslint/no-unused-vars */
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Controller } from "react-hook-form";

type TUploadProps = {
  name: string;
  label?: string;
  onFileUpload: (file: File) => void;
};

const JobFinderUpload = ({ name, label, onFileUpload }: TUploadProps) => {
  const handleChange = (info: any) => {
    if (info.file.status === "done") {
      onFileUpload(info.file.originFileObj);
    }
  };

  return (
    <div style={{ marginBottom: "7px" }}>
      {label && <p style={{ marginBottom: "5px" }}>{label}</p>}
      <Controller
        name={name}
        render={({ field }) => (
          <Upload
            {...field}
            name={name}
            
            customRequest={({ onSuccess }) => {
              setTimeout(() => {
                //@ts-ignore
                onSuccess("ok");
              }, 0);
            }}
            onChange={handleChange}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        )}
      />
    </div>
  );
};

export default JobFinderUpload;
