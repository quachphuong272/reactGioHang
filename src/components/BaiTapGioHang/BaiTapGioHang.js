import React, { Component } from 'react'
import DanhSachSanPhamGioHang from './DanhSachSanPhamGioHang'
import ModalGioHang from './ModalGioHang'
import phoneData from '../../data/phoneData.json'



export default class BaiTapGioHang extends Component {
    constructor(props){
        super(props);
        this.state ={
            gioHang:[]
            };
    }
    
    themGioHang = (sanPhamDuocChon) => {

        let spGioHang = {
            maSP: sanPhamDuocChon.maSP,
            tenSP: sanPhamDuocChon.tenSP,
            giaBan: sanPhamDuocChon.giaBan,
            hinhAnh: sanPhamDuocChon.hinhAnh,
            soLuong: 1
          }
          var gioHangCapNhat = [...this.state.gioHang]
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === spGioHang.maSP);

        if (index!==-1){
            gioHangCapNhat[index].soLuong +=1;
        }
        else{
            gioHangCapNhat.push(spGioHang);
        }
        
        // Set state để component render lại
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    xoaGioHang = (maSP) => {
        // var gioHangCapNhat = [...this.state.gioHang];
        // let index = gioHangCapNhat.findIndex(sp =>sp.maSP === maSP);
        // if(index !== -1){
        //     gioHangCapNhat.splice(index,1);
        // }

        var gioHangCapNhat = this.state.gioHang.filter(sp => sp.maSP !== maSP);
        
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    tangGiamSoLuong = (maSP, tangGiam) => {
        // tangGiam == true: tăng ( ngược lại )
        var gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
        if(tangGiam)
        {
            gioHangCapNhat[index].soLuong+=1;
        }
        else {
            if(gioHangCapNhat[index].soLuong >1)
            {
                gioHangCapNhat[index].soLuong -=1;
            }
        }
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    render() {

        let tongSoLuong = this.state.gioHang.reduce((tongSoLuong, spGH, index) =>{
            return tongSoLuong += spGH.soLuong;
        }, 0)

        return (
            <div className="container">
                <h3 className="text-center text-success">Bài Tập Giỏ Hàng</h3>
                <ModalGioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong = {this.tangGiamSoLuong}/>
                <div className="text-right">
                <button className="btn btn-primary text-right" style={{cursor:'pointer'}} data-toggle="modal" data-target="#modelId" > Giỏ Hàng ({tongSoLuong}) </button>
                </div>
                <DanhSachSanPhamGioHang themGioHang={this.themGioHang} mangSanPham={phoneData}/>     
            </div>
        )
    }
}
