cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },


        sprite:cc.Sprite,

        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!',
    },

    // use this for initialization
    onLoad: function () {
        cc.log("load");
        this.label.string = this.text;

        //初始化碰撞组件开关
        this.collisionManager = cc.director.getCollisionManager();
        this.collisionManager.enabled = true;
        this.collisionManager.enabledDebugDraw = true; //白线
        this.collisionManager.enabledDrawBoundingBox = true;//蓝线
    },

    start: function(){
        cc.log("start");
        var action1 = cc.rotateTo(2, 0, 180);
        var action2 = cc.rotateTo(2, 0, 0);
        // var action = cc.repeat(action1, 1);
        var action = cc.sequence(action1, action2);
        this.label.node.runAction( cc.repeat(action, 2));

        // var action = cc.rotateTo(500, 0, 90);
        // this.sprite.node.runAction(action);
    },

    // called every frame
    update: function (dt) {

    },

});
