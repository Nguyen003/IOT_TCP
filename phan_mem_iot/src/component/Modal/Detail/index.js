import 'bootstrap/dist/css/bootstrap.min.css';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames/bind";

import styles from "./Detail.module.scss";
import { ChartBarDetail as Bardetail } from "~/component/Chart/Bar";
import useTimeTracker from '~/hooks/useTimeTracker';

const cx = classNames.bind(styles);

// Mảng các tiêu đề của nút
const buttonTitles = [
    'Test 1',
    'Test 1 66',
    'Test 1 67',
    'Test 1 68',
    'Test 1 68',
    'Test 1 68',
    'Test 1 68',
    'Test 1 69'
];

function Modal({ onClose, title, onShowModal, lightStatus }) {
    const isRunning1 = lightStatus[0] === 'Bật';
    const isRunning2 = lightStatus[1] === 'Bật';
    const { timer: timer1, formatTime: formatTime1 } = useTimeTracker(isRunning1);
    const { timer: timer2, formatTime: formatTime2 } = useTimeTracker(isRunning2);

    return (
        <div className={cx('modal')}>
            <button type="button" className={cx('modal-close')} onClick={onClose}><i className="fa fa-times" aria-hidden="true"></i></button>
            <div className={cx("modal-body")}>
                <div className={cx('body-infor')}>
                    <div className={cx('body-infor_left')}>
                        <div className={cx('infor-title')}>{title}</div>
                        <div className={cx('list-btn')}>
                            <button className={cx('btn_item')}>Giám sát <br /> vận hành thiết bị</button>
                            <button className={cx('btn_item')} onClick={() => onShowModal('diagram')}>Điều khiển vận hành</button>
                            <button className={cx('btn_item')} onClick={() => onShowModal('bar')}>Dữ liệu thống kê</button>
                        </div>
                    </div>
                    <div className={cx('body-infor_content')}>
                        <p>Device ID: Teca202302</p>
                        <p>NameDevice: {title}</p>
                        <p>Address: thôn 2B, xã Ea H'leo, huyện Ea H'leo, tỉnh Đắk Lắk</p>
                        <p>Name SubDevice: bơm lọc UF 01</p>
                    </div>
                    <div className={cx('body-infor_right')}>
                        <div className={cx("box-container_content")}>
                            <ul className={cx('list-container')}>
                                <li className={cx('list-item')}>
                                    <button type="button" disabled
                                        className={cx('list-item_btn', { 'btn-on': lightStatus[0] === 'Bật', 'btn-off': lightStatus[0] === 'Tắt' })}
                                    >
                                        Bơm lọc áp lực 01 {isRunning1 && ` - ${formatTime1(timer1)}`}
                                    </button>
                                </li>
                                <li className={cx('list-item')}>
                                    <button type="button" disabled
                                        className={cx('list-item_btn', { 'btn-on': lightStatus[1] === 'Bật', 'btn-off': lightStatus[1] === 'Tắt' })}
                                    >
                                        Bơm lọc áp lực 02 {isRunning2 && ` - ${formatTime2(timer2)}`}
                                    </button>
                                </li>
                                {/* {buttonTitles.map((title, index) => (
                                    <li key={index} className={cx('list-item')}>
                                        <button type="button" disabled className={cx('list-item_btn')}>
                                            {title}
                                        </button>
                                    </li>
                                ))} */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cx('body-chart')}>
                    <Bardetail />
                </div>
            </div>

        </div>
    );
};

Modal.propTypes = {
    // children: PropTypes.node.isRequired, // Xác định rằng children phải là một node React
    onClose: PropTypes.func.isRequired,
    onShowModal: PropTypes.func.isRequired,
    // lightStatus: PropTypes.string.isRequired,  // Thêm prop này để nhận trạng thái đèn // Xác định rằng onClose phải là một function
};

export default memo(Modal);