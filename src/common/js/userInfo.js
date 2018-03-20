export default class userInfo {                                          //创建用户信息
  constructor({id, mobile, name, image="../../imgs/personal/wodetouzi.jpg", email}) {                                            //解构赋值 等调用的时候 传入指定的id数据和name数据
    this.id = id;
    this.mobile = mobile;
    this.name = name;
    this.image = image;
    this.email = email;
  }
}




