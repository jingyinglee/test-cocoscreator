# hello-world

 *  http://docs.cocos.com/creator/manual/zh/physics/collision/
 *  其中：分组管理中的group概念 等同于 cocoscreator中node节点的group属性
 *  其中：onCollision*函数必须是其对应组件的js继承处理的函数。
 *  其中：cc.director.getCollisionManager的初始化，一般不是碰撞组件本身实现（避免多次调用）