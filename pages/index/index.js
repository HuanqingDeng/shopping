//index.js
//获取应用实例
import goods from '../../api/goods.js'
const app = getApp()

Page({
  data: {
    num: 1,
    show: false,
    totalNum: 0,
    scaleCart: false,
    goods: null,
    mess:goods[1].detail,
    click:false,
    click1:false,
    click2:false,
   
  },
  onLoad(options) {
    const id = options.id || 2;
    let curGoods;
    for (let i = 0; i < goods.length; i++) {
      if (goods[i].id === id) {
        curGoods = goods[i];
        break;
      }   
    }
    
    setTimeout(() => {
      this.setData({
        goods: curGoods,
      });
    }, 1000)
  },

  addCount() {
    let num = ++this.data.num;
    // num++
    this.setData({
      num
    })
  },
  addToCart() {
    const num = this.data.num;
    const total = this.data.totalNum;
    this.setData({
      show: true
    });
    setTimeout(() => {
      this.setData({
        show: false,
        scaleCart: true
      });
      setTimeout(() => {
        this.setData({
          scaleCart: false,
          hasCarts: true,
          totalNum: num + total
        })
      }, 200)
    }, 300)
  },
  tap:function(e){
    let index=e.currentTarget.dataset.index;
    if(index==0){
      this.setData({
        mess:goods[0].detail,
        click:false,
        click1:false,
        click2:false
      })
    }
    if(index==1){
      this.setData({
        mess:goods[0].parameter,
        click1:true,
        click:true,
        click2:false
      })
    }if(index==2){
      this.setData({
        mess:goods[0].service,
        click2:true,
        click1:false,
        click:true
      })
    }
  }
})