import React , {useEffect , useState} from "react";
import { Button, Table } from "flowbite-react";
import "../../Styles/TourLeaderPanel/tourpanel.scss";
import { BsFileEarmarkExcel as ExcelIcon } from "react-icons/bs";
import { DownloadTableExcel } from "react-export-table-to-excel";

import ExcellentExport from "excellentexport";
const ExcelJS = require('exceljs');

const PassengersList = ({ TripID }) => {
    const [data , setData] =  useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then(async (data) => {
            console.log(data);
            setData(data);
        })
        .then((json) => console.log(json));
    }, []);
    const exportExcelFile = () => {
        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet("report");
        sheet.properties.defaultRowHeight = 80;

        sheet.getRow(1).border = {
            top : {style : 'thick', color : { argb : '1BA291ff'}},
            left : {style : 'thick', color : { argb : '1BA291ff'}},
            bottom : {style : 'thick', color : { argb : '1BA291ff'}},
            right : {style : 'thick', color : { argb : '1BA291ff'}},

        };
        sheet.getRow(1).fill = {
            type : 'pattern',
            pattern : 'darkHorizontal',
            fgColor: {argb : 'B193CFff'},

        };

        sheet.getRow(1).font = {
            name:'Comic Sans MS',
            family: 3,
            size: 14,
            bold:true,
        };
    
        sheet.columns = [
            {
                header : "#",
                key : "id",
                width : 5
            },
            {
                header : "FirstName",
                key : "firstname",
                width : 20
            },
            {
                header : "LastName",
                key : "lastname",
                width : 20
            },
            {
                header : "Phone No.",
                key : "num",
                width : 30
            },
            {
                header : "NationalCode",
                key : "national",
                width : 30
            },
        ];

        data?.products?.map(product => {
            sheet.addRow({
                id:product?.id,
                firstname: product?.firstname,
                lastname: product?.lastname,
                num: product?.num,
                national: product?.national
            })
        });

        workbook.xlsx.writeBuffer().then(data => {
            const blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheet.sheet",
            });
            const url = window.URL.createObjectURL(blob);
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = 'download.xlsx';
            anchor.click();
            window.URL.revokeObjectURL(url);
        })
    }
    
    const[Loading , setLoading] = React.useState(false)
    React.useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, [])
    return (
        <>
        {!Loading && (
        <div className="card-bg rounded-2xl border border-pallate-persian_green flex flex-col p-4 items-center gap-2 h-[518px]">
            <p className="font-semibold text-3xl text-white">
                Trip ID: {TripID}
            </p>
            <Table hoverable className="w-[1000px]">
                <Table.Head className="bg-pallate-celeste_lowOp w-full">
                    <Table.HeadCell className="text-white text-xl">
                        #
                    </Table.HeadCell>
                    <Table.HeadCell className="text-white text-xl">
                        FirstName
                    </Table.HeadCell>
                    <Table.HeadCell className="text-white text-xl">
                        LastName
                    </Table.HeadCell>
                    <Table.HeadCell className="text-white text-xl">
                        Phone No.
                    </Table.HeadCell>
                    <Table.HeadCell className="text-white text-xl">
                        NationalCode
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {[
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                    ].map((num) => (
                        <Table.Row className="bg-pallate-celeste_lowOp hover:bg-pallate-persian_green">
                            <Table.Cell className="text-white text-lg font-semibold">
                                {num}
                            </Table.Cell>
                            <Table.Cell className="text-white text-lg font-semibold">
                                Pooria
                            </Table.Cell>
                            <Table.Cell className="text-white text-lg font-semibold">
                                Rahimi
                            </Table.Cell>
                            <Table.Cell className="text-white text-lg font-semibold">
                                09216321669
                            </Table.Cell>
                            <Table.Cell className="text-white text-lg font-semibold">
                                02165251587
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
            <Button className="bg-pallate-persian_green rounded-2xl text-white font-semibold text-lg w-96 hover:bg-pallate-blue_munsell" onClick = {exportExcelFile}>
                                        More Info
                                    </Button>
        </div>
        ) || 
        Loading && (
            <div className="card-bg rounded-2xl border border-pallate-persian_green flex flex-col p-4 items-center gap-2 h-[518px]">
                <p className="font-semibold text-3xl text-white">
                Trip ID: {TripID}
            </p>
                <div className="w-[749.73px] h-[440px] rounded-lg card-bg animate-pulse"></div>
                
            </div>
        )}
        </>
    );
};

export default PassengersList;
