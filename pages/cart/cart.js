// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList: false,
    carts: [],
    totalPrice: 0,
    selectAllStatus: true,
  },
  onShow: function () {
    this.setData({
      carts: [{ id: 1, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 1, selected: true },
      { id: 2, title: '素米 500g', image: '/image/s6.png', num: 1, price: 3, selected: true }
      ],
      hasList: true
    })
    this.getTotalPrice()
  },
  minusCount: function (e) {
    var index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <= 1) {
      return false
    }
    num--;
    carts[index].num = num
    this.setData({
      carts
    });
    this.getTotalPrice()
  },
  addCount: function (e) {
    var index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num++;
    carts[index].num = num
    this.setData({
      carts
    });
    this.getTotalPrice()
  },
  /**
   * 总价的计算方法
   * compute
   */
  getTotalPrice: function (e) {
    let carts = this.data.carts;
    let total = 0;
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].selected) {
        total += carts[i].num * carts[i].price;
      }
    }
    this.setData({
      totalPrice: total.toFixed(2)
    });
  },
  selectAll: function (e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;
    for (let i = 0; i < carts.length; i++) {

      carts[i].selected = selectAllStatus;
    }
    this.setData({
      carts,
      selectAllStatus,
    })
    this.getTotalPrice()
  },
  selectList: function (e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    const selected = carts[index].selected;
    carts[index].selected = !selected;
    // for(let i=0;i<carts.length;i++){
    //   if(carts[i].selected){
    //     this.setData({
    //         selectAllStatus:true,carts
    //     });
    //   }else{
    //     this.setData({
    //       selectAllStatus:false,carts
    //   });
    //   }
    // }
    const a = [];
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].selected) {
        a.push(carts[index])
      }
    }
    if (carts.length <= a.length) {
      this.setData({
        selectAllStatus: true, carts
      });
    }else{
      this.setData({
        selectAllStatus: false, carts
      });
    }
    this.getTotalPrice()
  }
})