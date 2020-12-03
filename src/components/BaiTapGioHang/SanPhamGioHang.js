import React, { Component } from 'react'

export default class SanPhamGioHang extends Component {
    render() {
        const {sanPham, themGioHang} = this.props;
        return (
            <div>
                <div className="card text-white bg-primary">
                    <img className="card-img-top" src={sanPham.hinhAnh} height="350px" alt />
                    <div className="card-body">
                        <h4 className="card-title">{sanPham.tenSP}</h4>
                        <button className="btn btn-danger" onClick={() => themGioHang(sanPham)}>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}
