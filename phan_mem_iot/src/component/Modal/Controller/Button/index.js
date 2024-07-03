import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { memo, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';
import PopupAuthentication from '../../Popup';

const cx = classNames.bind(styles);

function Button1({ ...props }) {
    const [light, setLight] = useState('');

    return (
        <>
            <div className={cx('list-btn_1')}>
                <button type="button" className={cx('modal-close')} onClick={props.onCloseModalBtn}><i className="fa fa-times" aria-hidden="true"></i></button>
                <h4>ĐIều khiển hệ thống lọc áp lực</h4>
                <div className="container">
                    <div className="row">
                        <div className="col m-auto">
                            <div className={cx(`mt-1 ${cx('box')}`)}>
                                <div className="box-header">
                                    <p>Bơm lọc 01</p>
                                </div>
                                <div className={cx('box-list-btn')}>
                                    <div className="d-flex w-100 justify-content-evenly mb-2">
                                        <button type="button" className="list-btn_item">Auto</button>
                                        <button type="button" className="list-btn_item">Man</button>
                                    </div>
                                    <div className="d-flex w-100 justify-content-evenly">
                                        <button type="button" className="list-btn_item"
                                            data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setLight('LIGHT_1')}
                                        >
                                            {props.lightStatus[0] === 'Tắt' ? 'Bật' : 'Tắt'}
                                        </button>
                                        <button type="button" className="list-btn_item">Lỗi</button>
                                    </div>
                                </div>
                            </div>
                            <div className={`mt-1 ${cx(`mt-1 ${cx('box')}`)}`}>
                                <div className="box-header">
                                    <p>Bơm lọc 02</p>
                                </div>
                                <div className={cx('box-list-btn')}>
                                    <div className="d-flex w-100 justify-content-evenly mb-2">
                                        <button type="button" className="list-btn_item">Auto</button>
                                        <button type="button" className="list-btn_item">Man</button>
                                    </div>
                                    <div className="d-flex w-100 justify-content-evenly">
                                        <button type="button" className="list-btn_item"
                                            data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setLight('LIGHT_2')}
                                        >
                                            {props.lightStatus[1] === 'Tắt' ? 'Bật' : 'Tắt'}
                                        </button>
                                        <button type="button" className="list-btn_item">Lỗi</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={cx(`mt-1 ${cx('box')}`)}>
                                <div className="box-header">
                                    <p>Bộ lọc đĩa</p>
                                </div>
                                <div className={cx('box-list-btn')}>
                                    <div className="d-flex w-100 justify-content-evenly">
                                        <button type="button" className="list-btn_item">Lọc</button>
                                        <button type="button" className="list-btn_item">Rửa ngược</button>
                                    </div>
                                </div>
                            </div>
                            <div className={cx(`mt-1 ${cx('box')}`)}>
                                <div className="box-header">
                                    <p>Auto van 01</p>
                                </div>
                                <div className={cx('box-list-btn')}>
                                    <div className="d-flex w-100 justify-content-evenly">
                                        <button type="button" className="list-btn_item">Lọc</button>
                                        <button type="button" className="list-btn_item">Rửa xuôi</button>
                                        <button type="button" className="list-btn_item">Rửa ngược</button>
                                    </div>
                                </div>
                            </div>
                            <div className={cx(`mt-1 ${cx('box')}`)}>
                                <div className="box-header">
                                    <p>Auto van 02</p>
                                </div>
                                <div className={cx('box-list-btn')}>
                                    <div className="d-flex w-100 justify-content-evenly">
                                        <button type="button" className="list-btn_item">Lọc</button>
                                        <button type="button" className="list-btn_item">Rửa xuôi</button>
                                        <button type="button" className="list-btn_item">Rửa ngược</button>
                                    </div>
                                </div>
                            </div>
                            <div className={cx(`mt-1 ${cx('box')}`)}>
                                <div className="box-header">
                                    <p>Auto van 03</p>
                                </div>
                                <div className={cx('box-list-btn')}>
                                    <div className="d-flex w-100 justify-content-evenly">
                                        <button type="button" className="list-btn_item">Lọc</button>
                                        <button type="button" className="list-btn_item">Rửa xuôi</button>
                                        <button type="button" className="list-btn_item">Rửa ngược</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PopupAuthentication handleClick={props.onToggleLight} light={light}/>
        </>
    )
}

function Button2({ onCloseModalBtn, onToggleLight, content }) {
    return (

        <div className={cx('list-btn_2')}>
            {/* <button id="on-off-1" style={{ marginTop: '10px' }} onClick={onToggleLight}>{content === 'Tắt' ? 'Bật đèn 1' : 'Tắt đèn 1'}</button> */}
            <button type="button" className={cx('modal-close')} onClick={onCloseModalBtn}><i className="fa fa-times" aria-hidden="true"></i></button>
            <h4>ĐIều khiển hệ thống lọc UF 01</h4>
            <div className="container">
                <div className={`w-50 m-auto pb-2 ${cx('box-list-btn')}`}>
                    <div className="d-flex w-100 justify-content-evenly mb-2">
                        <button type="button" className="list-btn_item">On/Off</button>
                        <button type="button" className="list-btn_item">Man</button>
                    </div>
                    <div className="d-flex w-100 justify-content-evenly">
                        <button type="button" className="list-btn_item">Filter</button>
                        <button type="button" className="list-btn_item">Cip</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col m-auto">
                        <div className={cx(`mt-1 ${cx('box')}`)}>
                            <div className="box-header">
                                <p>Bơm cấp</p>
                            </div>
                            <div className={cx('box-list-btn')}>
                                <div className="d-flex w-100 justify-content-evenly">
                                    <button type="button" className="list-btn_item">On/Off</button>
                                    <button type="button" className="list-btn_item">Lỗi</button>
                                </div>
                            </div>
                        </div>
                        <div className={cx(`mt-1 ${cx('box')}`)}>
                            <div className="box-header">
                                <p>Bơm rửa ngược</p>
                            </div>
                            <div className={cx('box-list-btn')}>
                                <div className="d-flex w-100 justify-content-evenly">
                                    <button type="button" className="list-btn_item">On/Off</button>
                                    <button type="button" className="list-btn_item">Lỗi</button>
                                </div>
                            </div>
                        </div>
                        <div className={cx(`mt-1 ${cx('box')}`)}>
                            <div className="box-header">
                                <p>Máy thổi khí</p>
                            </div>
                            <div className={cx('box-list-btn')}>
                                <div className="d-flex w-100 justify-content-evenly">
                                    <button type="button" className="list-btn_item">On/Off</button>
                                    <button type="button" className="list-btn_item">Lỗi</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={cx(`mt-1 ${cx('box')}`)}>
                            <div className="box-header">
                                <p>Biến tần</p>
                            </div>
                            <div className={cx('box-list-btn')}>
                                <div className="d-flex w-100 justify-content-evenly">
                                    <button type="button" className="list-btn_item">On/Off</button>
                                    <button type="button" className="list-btn_item">Lỗi</button>
                                </div>
                            </div>
                        </div>
                        <div className={cx(`mt-1 ${cx('box')}`)}>
                            <div className="box-header">
                                <p>van điện tử 1</p>
                            </div>
                            <div className={cx('box-list-btn')}>
                                <div className="d-flex w-100 justify-content-evenly">
                                    <button type="button" className="list-btn_item">Đóng/Mở</button>
                                    <button type="button" className="list-btn_item">Waition</button>
                                </div>
                            </div>
                        </div>
                        <div className={cx(`mt-1 ${cx('box')}`)}>
                            <div className="box-header">
                                <p>Van điện tử 2</p>
                            </div>
                            <div className={cx('box-list-btn')}>
                                <div className="d-flex w-100 justify-content-evenly">
                                    <button type="button" className="list-btn_item">Đóng/Mở</button>
                                    <button type="button" className="list-btn_item">Waition</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Button1, Button2 };