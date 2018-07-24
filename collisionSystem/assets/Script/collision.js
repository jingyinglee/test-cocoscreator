/**
 *  http://docs.cocos.com/creator/manual/zh/physics/collision/
 *  其中：分组管理中的group概念 等同于 cocoscreator中node节点的group属性
 *  其中：onCollision*函数必须是其对应组件的js继承处理的函数。
 *  其中：cc.director.getCollisionManager的初始化，一般不是碰撞组件本身实现（避免多次调用）
 */
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        cc.log("load");

    },

    // called every frame
    update: function (dt) {

    },

    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionEnter: function (other, self) {
        cc.log('on collision enter '+self.tag);
    },

    /**
     * 当碰撞产生后，碰撞结束前的情况下，每次计算碰撞结果后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionStay: function (other, self) {
        // cc.log('on collision stay');
    },

    /**
     * 当碰撞结束后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionExit: function (other, self) {
        cc.log('on collision exit'+self.tag);
    }
});
