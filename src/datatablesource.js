export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImage">
          <img className="cellImg" src={params.row.img} alt="avater" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    cellRender:(params)=>{
        return(
            <div className="cellWithStatus">{params.row.status}</div>
        )
    }
  },
];

export const rows = [
  {
    id: 1143155,
    product: "Acer",
    img: "",
    customer: "",
    date: "",
    amount: "",
    method: "",
    status: "approved",
    email:"yu.takaki@randstad.co.jp",
    age:"23",
  },
  {
    id: 1143156,
    product: "Acer2",
    img: "",
    customer: "",
    date: "",
    amount: "",
    method: "",
    status: "approved",
    email:"yu.takaki@randstad.co.jp",
    age:"23",
  },
  {
    id: 1143157,
    product: "Acer3",
    img: "",
    customer: "",
    date: "",
    amount: "",
    method: "",
    status: "approved",
    email:"yu.takaki@randstad.co.jp",
    age:"23",
  },
  {
    id: 1143158,
    product: "Acer4",
    img: "",
    customer: "",
    date: "",
    amount: "",
    method: "",
    status: "approved",
    email:"yu.takaki@randstad.co.jp",
    age:"23",
  },
  {
    id: 1143159,
    product: "Acer5",
    img: "",
    customer: "",
    date: "",
    amount: "",
    method: "",
    status: "approved",
    email:"yu.takaki@randstad.co.jp",
    age:"23",
  },
  {
    id: 1143160,
    product: "Acer6",
    img: "",
    customer: "",
    date: "",
    amount: "",
    method: "",
    status: "rejected",
    email:"yu.takaki@randstad.co.jp",
    age:"23",
  },
];
