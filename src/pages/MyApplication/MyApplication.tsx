import { useState } from "react";
import { useDeleteAApplicationMutation, useGetMyApplicationsQuery } from "../../redux/features/applicationApi";
import { TApplication, TQueryParam } from "../../types";
import { Button, Pagination, Table, TableColumnsType, TableProps } from "antd";
import { toast } from "sonner";

export type TTableData = Pick<TApplication, "status"> & {
  key: string;
  userName: string;
  userEmail: string;
  jobTitle: string;
  jobType: string;
};

const MyApplications = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching } = useGetMyApplicationsQuery([
    { name: "page", value: page },
    ...params,
  ]);
  const [deleteAApplication] = useDeleteAApplicationMutation();

  const applicationData = data?.data;
  const metaData = data?.meta;

  const tableData = applicationData?.map(({ id, user, job, status }: any) => ({
    key: id,
    userName: user?.name,
    userEmail: user?.email,
    jobTitle: job?.title,
    jobType: job?.type,
    status,
  }));

  const handleDeleteApplication = async(id: string) => {
    try {
        const res = await deleteAApplication(id).unwrap();
        if (res.success) {
          toast.success("Application deleted successfully!", {
            duration: 2000,
          });
        }
      } catch (error: any) {
        toast.error(error.message);
      }
  };

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Applicant Name",
      dataIndex: "userName",
    },
    {
      title: "Email",
      dataIndex: "userEmail",
    },
    {
      title: "Job Title",
      dataIndex: "jobTitle",
    },
    {
      title: "Job Type",
      dataIndex: "jobType",
    },
    {
      title: "Application Status",
      dataIndex: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (item) => (
        <Button
          danger
          onClick={() => handleDeleteApplication(item.key)}
          type="link"
          size="small"
          style={{ fontSize: "12px", fontWeight: "600" }}
        >
          Delete
        </Button>
      ),
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];

      filters?.type?.forEach((item) =>
        queryParams.push({ name: "type", value: item })
      );

      filters?.color?.forEach((item) =>
        queryParams.push({ name: "color", value: item })
      );

      filters?.size?.forEach((item) =>
        queryParams.push({ name: "size", value: item })
      );

      setParams(queryParams);
    }
    if (isLoading) {
      return <p>Loading...</p>;
    }
  };

  return (
    <>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        pagination={false}
      />
      <Pagination
        style={{ margin: "20px 0" }}
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
      />
    </>
  );
};

export default MyApplications;
