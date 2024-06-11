import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React, { useState, memo } from 'react';
import classNames from "classnames/bind";

import Header from "~/layout/component/Header";
import styles from "./Home.module.scss";
import Modaldetail from '~/component/Modal/Detail';
import BlockDiagram from '~/component/Modal/Controller/BlockDiagram';
import { Button1, Button2 } from '~/component/Modal/Controller/Button';
import Map from '~/component/Map';
import { useLightControl } from '~/hooks/useLightControl';

const cx = classNames.bind(styles);

function Home() {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleButtonClick = (machine) => setActiveIndex(machine)
    const handleCloseModal = () => setActiveIndex(null);

    //show điều khiển
    const [showModal, setShowModal] = useState(null);
    const [modalContent, setModalContent] = useState('');
    const handleShowModal = (content) => {
        setModalContent(content);
        setShowModal(true);
    };
    const handleCloseModalDiagram = () => setShowModal(null);

    //show btn điều khiển
    const [modal1Visible, setModal1Visible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);

    const handleShowButton = (modalId) => {
        if (modalId === '1') {
            setModal1Visible(true);
        } else if (modalId === '2') {
            setModal2Visible(true);
        }
    };

    const closeModal1 = () => setModal1Visible(false);
    const closeModal2 = () => setModal2Visible(false);

    //bật tắt đèn
    const { light1Status, light2Status, handleOnOffLight } = useLightControl();

    return (
        <div className={cx('layout')}>
            <Header />
            <div className={cx("body")}>
                <Map onClickBtn={handleButtonClick} activeIndex={activeIndex} />
                {/* thông tin chi tiết */}
                {activeIndex !== null && (
                    <div className={cx("modal-container")}>
                        <Modaldetail
                            onClose={handleCloseModal}
                            onShowModal={handleShowModal}
                            title={activeIndex.name}
                            lightStatus={[light1Status, light2Status]} // Truyền trạng thái đèn
                        />
                    </div>
                )}

                {/* sơ đồ && biểu đồ thống kê */}
                {showModal && (
                    <BlockDiagram
                        onClose={handleCloseModalDiagram}
                        content={modalContent}
                        onShowModalBtn={handleShowButton} />
                )}

                {modal1Visible &&
                    <Button1
                        onCloseModalBtn={closeModal1}
                        onToggleLight={handleOnOffLight}
                        lightStatus={[light1Status, light2Status]}
                    />
                }
                {modal2Visible &&
                    <Button2
                        onCloseModalBtn={closeModal2}
                        onToggleLight={handleOnOffLight}
                        content={light1Status}
                    />
                }
            </div>
        </div>
    )
}

export default memo(Home);