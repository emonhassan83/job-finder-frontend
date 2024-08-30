import { Input, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const Banner = ({setSearchTerm}: any) => { 
  const onSearch = (value: string) => setSearchTerm(value);
  
  return (
    <div
      style={{
        backgroundColor: "#DADBF0",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h2 style={{fontSize: "48px", fontWeight: "600", color: "#333", marginTop: "0px" }}>
        Find Your Dream Job?
      </h2>

      <div style={{ width: "100%", maxWidth: "500px" }}>
      <Input.Search
          placeholder="Search..."
          size="large"
          enterButton={
            <Button icon={<ArrowRightOutlined />} />
          }
          onSearch={onSearch}
        />
      </div>
    </div>
  );
};

export default Banner;