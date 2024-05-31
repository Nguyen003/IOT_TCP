import React, { memo } from 'react';
import classNames from "classnames/bind";

import styles from './BlockDiagram.module.scss'
import { ChartBarControl as Barcontrol } from "~/component/Chart/Bar";
import Img from "~/assets/images/so_do.jpg"

const cx = classNames.bind(styles);
// Mảng các tiêu đề của nút
const buttonTitles = [
    'Bơm lọc 01',
    'Bơm lọc 02',
    'Bọc lọc đĩa',
    'Auto van 01',
    'Auto van 02',
    'Auto van 03'
];

function BlockDiagram({ onClose, content, onShowModalBtn }) {
    return (
        <div className={cx('modal')}>
            <div className={cx('modal-content')}>
                <button type="button" className={cx('modal-close')} onClick={onClose}><i className="fa fa-times" aria-hidden="true"></i></button>
                {content === 'diagram' && (
                    <>
                        <img src={Img}/>
                        <button type="button" className={cx('modal-btn_tranparent', 'btn-1')} onClick={() => onShowModalBtn('1')}/>
                        <button type="button" className={cx('modal-btn_tranparent', 'btn-2')} onClick={() => onShowModalBtn('2')}/>
                    </>
                )}
                {content === 'bar' && (
                    <>
                        <div className={cx('hearder')}>
                            <h2>Dữ liệu vận hành - hệ thống lọc áp lực</h2>
                            <div className={cx('hearder-date')}>
                                <h4>Ngày: </h4>
                                <input type="text" className="form-control" value="20/05/2024 - 20/05/2024" disabled />
                            </div>
                            <div className={cx('hearder-title')}>
                                <h4>Công suất: 4.00 (kW)</h4>
                                <h4>Lưu lượng: 10.00 (m³/h)</h4>
                                <h4>Thời gian vận hành: 10.50 (h)</h4>
                            </div>
                        </div>
                        <div className={cx('body')}>
                            <div className={cx('body-btn')}>
                                <div className={cx("box-container_content")}>
                                    <ul className={cx('list-container')}>
                                        {buttonTitles.map((title, index) => (
                                            <li key={index} className={cx('list-item')}>
                                                <button type="button" className={cx('list-item_btn')}>
                                                    {title}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className={cx('body-bar')}>
                                <Barcontrol className={cx('bar')} />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default memo(BlockDiagram);