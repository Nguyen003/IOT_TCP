import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';

import config from '~/config';
import styles from './Home.module.scss';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import img from '~/assets/images/so_do.jpg'

const cx = classNames.bind(styles);

function Home() {
    const [hiddenStates, setHiddenStates] = useState({
        section1: true,
        section2: true,
        section3: true,
    });
    useEffect(() => {
        var userID = sessionStorage.getItem('user')
    }, []);

    const handleToggle = (section) => {
        setHiddenStates(prevState => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    const sections = [
        {
            id: 'section1',
            title: 'Nước sạch',
            items: [
                { route: config.routes.nuocSach, label: "Trạm xử lý nước sạch" },
                // { route: null, label: "Trạm xử lý nước thải" },
                // { route: null, label: "Trạm quản lý kho" },
                // { route: null, label: "Trạm quản lý kho" },
                // { route: null, label: "Trạm xử lý nước sạch" },
                // { route: null, label: "Trạm xử lý nước thải" },
                // { route: null, label: "Trạm quản lý kho" },
                // { route: null, label: "Trạm quản lý kho" }
            ]
        },
        {
            id: 'section2',
            title: 'Nước thải',
            items: [
                { route: null, label: "Trạm xử lý nước sạch" },
                { route: null, label: "Trạm xử lý nước thải" },
                { route: null, label: "Trạm quản lý kho" },
                { route: null, label: "Trạm quản lý kho" },
                { route: null, label: "Trạm xử lý nước sạch" },
                { route: null, label: "Trạm xử lý nước thải" },
                { route: null, label: "Trạm quản lý kho" },
                { route: null, label: "Trạm quản lý kho" }
            ]
        },
        {
            id: 'section3',
            title: 'Kho hàng',
            items: [
                { route: null, label: "Trạm xử lý nước sạch" },
                { route: null, label: "Trạm xử lý nước thải" },
                { route: null, label: "Trạm quản lý kho" },
                { route: null, label: "Trạm quản lý kho" },
                { route: null, label: "Trạm xử lý nước sạch" },
                { route: null, label: "Trạm xử lý nước thải" },
                { route: null, label: "Trạm quản lý kho" },
                { route: null, label: "Trạm quản lý kho" }
            ]
        }
    ];

    return (
        <div className={`d-flex ${cx("container")}`}>
            <div className="m-auto w-75 pt-4 pb-4">
                {sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="row">
                        <div className="w-100 col-12 text-start p-0">
                            <span className={`d-block position-relative fw-bold text-center text-uppercase p-1 ${cx("title")}`}>{section.title}</span>
                        </div>
                        <div className="col-12 position-relative p-0 mb-5">
                            <div className={cx("content", { "hidden": hiddenStates[section.id] })}>
                                <div className={`row col-12 m-0 pt-3 pb-3 ${cx("content__height")}`}>
                                    {section.items.map((item, index) => (
                                        <div key={index} className={`col-3`}>
                                            <div className={`w-100 ${cx("box-item")}`}>
                                                <div className={`w-100 overflow-hidden ${cx("box-img")}`}>
                                                    <img alt='Ảnh' src={img} />
                                                </div>
                                                <div className="mt-2">
                                                    <NavLink to={item.route} className="btn btn-primary">{item.label}</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {section.items.length > 4 && (
                                <button
                                    type="button"
                                    className={`position-absolute ${cx("toggle-hidden", { "toggle-hidden__rotate": !hiddenStates[section.id] })}`}
                                    onClick={() => handleToggle(section.id)}
                                >
                                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;