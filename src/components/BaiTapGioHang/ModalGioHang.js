import React, { Component } from 'react'

export default class ModalGioHang extends Component {
    render() {

        const {gioHang,xoaGioHang, tangGiamSoLuong} = this.props;


        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{maxWidth:"800px", width:"800px", marginLeft: "-150px"}}>
                        <div className="modal-header">
                            <h5 className="modal-title">Thông tin giỏ hàng</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                    <tr>
                                        <td>Mã SP</td>
                                        <td>Hình ảnh</td>
                                        <td>Tên SP</td>
                                        <td>Số lượng</td>
                                        <td>Đơn giá</td>
                                        <td>Thành tiền</td>
                                        <td></td>
                                    </tr>
                                    {gioHang.map((spGH,index) => {
                                        return (<tr key ={index}>
                                            <td>{spGH.maSP}</td>
                                            <td><img src={spGH.hinhAnh} width={50}height={50}/></td>
                                            <td>{spGH.tenSP}</td>
                                            <td><button className="btn btn-primary" onClick={() => tangGiamSoLuong(spGH.maSP, false)}>-</button>
                                                {spGH.soLuong}
                                                <button className="btn btn-primary" onClick={() => tangGiamSoLuong(spGH.maSP, true)}>+</button></td>
                                            <td>{spGH.giaBan.toLocaleString()}</td>
                                            <td>{(spGH.soLuong* spGH.giaBan).toLocaleString()}</td>
                                            <td><button className="btn btn-danger" onClick={() => xoaGioHang(spGH.maSP)}>Xóa</button></td>
                                        </tr>)
                                    })}
                                    <tfoot>
                                        <tr>
                                            <td colSpan="5"></td>
                                            <td>Tổng tiền</td>
                                            <td>{this.props.gioHang.reduce((tongTien, spGioHang, index) => {
                                            return tongTien += spGioHang.soLuong*spGioHang.giaBan
                                            }, 0).toLocaleString()}</td>
                                        </tr>
                                    </tfoot>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
