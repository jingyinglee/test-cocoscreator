// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        tiledMap: cc.TiledMap,

        tmLayerRoads:cc.TiledLayer,
        tmLayerTrees:cc.TiledLayer,
        tmObjectKeyPoints:cc.TiledObjectGroup,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        cc.log("getMapSize "+this.tiledMap.getMapSize().width);
        cc.log("getTileSize "+this.tiledMap.getTileSize().width);

        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick.bind(this));
    },

    // update (dt) {},

    //将像素坐标转化为瓦片坐标(左上角0，0）
    getTilePos: function(posInPixel) {
        var mapSize = this.node.getContentSize();
        var tileSize = this.tiledMap.getTileSize();
        var x = Math.floor(posInPixel.x / tileSize.width);
        var y = Math.floor((mapSize.height - posInPixel.y) / tileSize.height);
        return cc.p(x, y);
    },



    onClick:function(event){
        cc.log( event.getLocationX() );
        cc.log( event.getLocationY() );

        var tmPos = this.getTilePos(cc.p(event.getLocationX(), event.getLocationY()));
        cc.log("tmPos:"+ tmPos.x+","+tmPos.y );

        var gid = this.tmLayerRoads.getTileGIDAt(tmPos.x, tmPos.y);
        if(gid != 0) {
            var properties = this.tiledMap.getPropertiesForGID(gid);
            cc.log("gid: tmLayerRoads " + gid + ", properties:" + properties.name);
        }

        var gid = this.tmLayerTrees.getTileGIDAt(tmPos.x, tmPos.y);
        if(gid != 0) {
            var properties = this.tiledMap.getPropertiesForGID(gid);
            cc.log("gid: tmLayerTrees " + gid + ", properties:" + properties.name);
        }


    },
});
