import React from "react";
import { Button, Table } from "flowbite-react";
import "../../Styles/OrganizationPanel/orgStyles.scss";
import { BsFileEarmarkExcel as ExcelIcon } from "react-icons/bs";
import { DownloadTableExcel } from "react-export-table-to-excel";
import ExcellentExport from "excellentexport";
const PassengersList = ({ TripID }) => {
    return (
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
                                Ali
                            </Table.Cell>
                            <Table.Cell className="text-white text-lg font-semibold">
                                Alavi
                            </Table.Cell>
                            <Table.Cell className="text-white text-lg font-semibold">
                                09123456789
                            </Table.Cell>
                            <Table.Cell className="text-white text-lg font-semibold">
                                1234567890
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
};

export default PassengersList;
