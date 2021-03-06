/**
 * Created by rodey on 14/12/5.
 *
 * 商店内容  购买金币 item
 */


module game {


    export class BuyJBItemRender extends egret.gui.ItemRenderer{

        //追加一个 商品图
        public imgId: egret.gui.UIAsset;
        private _image: string;

        //追加一个 数量显示
        public incomeLabel: egret.gui.Label;
        private _incomeText: string;

        //追加一个 数量显示
        public giveLabel: egret.gui.Label;
        private _giveText: string;

        //追加一个 价格
        public priceLabel: egret.gui.Label;
        private _priceText: string;

        constructor(){
            super();
            this.skinName = skins.uicompenet.BuyGold.BuyJBItemRenderSkin;

            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goBuyCoin, this);
        }



        /**
         * 默认处理数据填充函数，
         * 覆写
         */
        public dataChanged():void{
            //console.log(this.data);
            this.imgId.source = this.data.imgId;
            this.incomeLabel.text = String(this.data.coinBuy);
            this.priceLabel.text = String(this.data.diamond);
            this.giveLabel.text = String('+' + this.data.coinBonus); //this.data.coinPre; //'+' + this.data.coinBonus;
        }


        /**
         * 继承实现
         * @param partName
         * @param instance
         */
        public partAdded(partName:string, instance:any):void{
            super.partAdded(partName, instance);
        }

        private goBuyCoin(evt: egret.TouchEvent): void{
            var self = this;
            TweenIt.tweenBigThenNormal(this.imgId, ()=>{

                if(!UserController.instance.isDiamondEnough(Number(this.priceLabel.text))){
                    return;
                }

                UserController.instance.sendBuyCoin(self.data);
                UserController.instance.currentBuyItem = self;
            });

        }


    }

}
