import { Button, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { t } from "i18next";
import Swal from "sweetalert2";
import { useState } from "react";
import { Slide, toast } from "react-toastify"; 
import React, { useEffect } from "react";
import { useForm } from "react-hook-form"; 
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../../Services/Interceptor";
import { CommonTable } from "../../../Common/CommonTable/CommonTable"; 
import { convertToBanglaNumerals } from "../../../Common/CommonFunctions/ConvertBnToEN";
import i18next from "i18next";
import Tokenvalidation from "../../../Authentication/Tokenvalidation";
import Breadcrumb from "../../../Common/CommonBreadcrumb/Breadcrumb";
import { useTranslation } from "react-i18next";
import HashTagModal from "./HashTagModal";
import { getHashTagData } from "../../../Redux/OthersCompo/HashTag/HashTagAction";

const HashTag = (props) => {
    const { permission } = props;
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const [tabledata, setTabledata] = useState([]);
    const [btnState, setBtnState] = useState("add");
    const [showModal, setShowModal] = useState(false);
    const [updateHashTagData, setUpdateHashTagData] = useState({});
    const { hashTagData } = useSelector((state) => state.hashTagData);
    const [key, setKey] = useState(1);

    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            description: "",
        },
    });

    useEffect(() => {
        Tokenvalidation();
        dispatch(getHashTagData(1));
    }, [dispatch]);

    useEffect(() => {
        const alldata = hashTagData?.map((item, index) => ({
            Sl_No:
                i18next.language === "en"
                    ? index + 1
                    : convertToBanglaNumerals(index + 1),
            titleBn: item?.nameBn,
            titleEn: item?.nameEn,
            Status: (
                <span
                    className={
                        item?.status === "Active"
                            ? "  text-success   fw-bold  "
                            : "  text-danger  fw-bold  "
                    }
                >
                    {item?.status === "Active" ? t("CommonBtn.active") : t("CommonBtn.inactive")}
                </span>
            ), 
            Action: (
                <span className="">
                    {permission?.edit && (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>{t("CommonBtn.edit")} </Tooltip>}
                        >
                            <Button
                                onClick={() => EditModal(item)}
                                variant="none"
                                className="btn btn-primary btn-sm rounded-11 me-2"
                            >
                                <i>
                                    <svg
                                        className="table-edit"
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        width="16"
                                    >
                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
                                    </svg>
                                </i>
                            </Button>
                        </OverlayTrigger>
                    )}
                    {permission?.delete && (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>{t("CommonBtn.delete")}</Tooltip>}
                        >
                            <Button
                                onClick={() => handleDelete(item)}
                                variant="none"
                                className="btn btn-danger btn-sm rounded-11"
                            >
                                <i>
                                    <svg
                                        className="table-delete"
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        width="16"
                                    >
                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
                                    </svg>
                                </i>
                            </Button>
                        </OverlayTrigger>
                    )}
                </span>
            ),
        }));
        console.log(alldata,'alldata')
        if (alldata?.length !== 0 && alldata !== undefined) {
            setTabledata(alldata);
        }else{
            setTabledata([]);
        }
    }, [hashTagData]);

    const COLUMNS = [
        {
            Header: `${t("CommonBtn.si_no")}`,
            accessor: "Sl_No",
            className: "wd-10p text-center text-wrap",
        },
        {
            Header: `${t("Toolkit.titleBn")}`,
            accessor: "titleBn",
            className: "text-start text-wrap wd-30p",
        },

        {
            Header: `${t("Toolkit.titleEn")}`,
            accessor: "titleEn",
            className: "text-start text-wrap wd-30p",
        },

        {
            Header: `${t("CommonBtn.status")}`,
            accessor: "Status",
            className: "text-center wd-20p  ",
        },
        {
            Header: `${t("CommonBtn.action")}`,
            accessor: "Action",
            className: "text-center text-wrap",
        },
    ];

    const handleOpenModal = () => {
        setShowModal(true);
        setBtnState("add");
        reset(updateHashTagData);
        setUpdateHashTagData({});
        Tokenvalidation();
    };

    const EditModal = (item) => {
        setShowModal(true);
        setBtnState("update");
        setUpdateHashTagData(item);
        Tokenvalidation();
    };

    const handleStatus = (key) => {
        setKey(key);
        dispatch(getHashTagData(key));
    };
    const handleDelete = (item) => {
        Tokenvalidation();
        Swal.fire({
            title: t("CommonToast.areYouSure"),
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: t("CommonBtn.yes"),
            cancelButtonText: t("CommonBtn.no"),
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance
                    .delete(`/apa-config/api/v1/hashtags/${item.id}`)
                    .then((res) => {
                        dispatch(getHashTagData());
                        toast.error(t("CommonToast.delete"), {
                            position: toast.POSITION.TOP_RIGHT,
                            hideProgressBar: false,
                            autoClose: 500,
                            transition: Slide,
                            theme: "colored",
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        });
    };

    const toolkitDatas = {
        title: t("Breadcrumb.configuration.hashTag"),
        description: t("toolkitDescription.hashTagDesc"),
    };


    return (
        <div className="main-container container">
            {/* breadcrumb-start */}
            <Breadcrumb
                toolkit={true}
                toolkitData={toolkitDatas}
                currentMenu={false}
                mainMenu={t("Breadcrumb.configuration.configuration")}
                subMenu={t("Breadcrumb.configuration.masterData")}
                subSubMenu={t("Breadcrumb.configuration.hashTag")}
            />
            {/* breadcrumb-end */}

            <Card className="custom-card">
                <Card.Body>
                    <div className="d-flex justify-content-start align-items-center gap-1 py-1">
                        <Button
                            variant="none"
                            className={
                                key === 1 ? "btn btn-sm btn-success" : "btn btn-sm btn-light"
                            }
                            onClick={() => handleStatus(1)}
                        >
                            {t("CommonBtn.active")}
                        </Button>
                        <Button
                            variant="none"
                            className={
                                key === 2 ? "btn btn-sm btn-success" : "btn btn-sm  btn-light"
                            }
                            onClick={() => handleStatus(2)}
                        >
                            {t("CommonBtn.inactive")}
                        </Button>
                    </div>
                    <div className="table-responsive fileexport pos-relative">
                        <CommonTable
                            DATATABLE={tabledata}
                            COLUMNS={COLUMNS}
                            add={permission?.add}
                            btnAction={handleOpenModal}
                            btnTitle={i18n.language === "en" ? "Add New" : "নতুন যোগ করুন"}
                            filter={true}
                            sortBy={true}
                            pagination={true}
                        />
                    </div>
                </Card.Body>
            </Card>

            {showModal && (
                <HashTagModal
                    reset={reset}
                    errors={errors}
                    control={control}
                    register={register}
                    btnState={btnState}
                    showModal={showModal}
                    setBtnState={setBtnState}
                    setShowModal={setShowModal}
                    handleSubmit={handleSubmit}
                    updateHashTagData={updateHashTagData}
                    setUpdateHashTagData={setUpdateHashTagData}
                />
            )}  
        </div>
    );
};

export default HashTag;
