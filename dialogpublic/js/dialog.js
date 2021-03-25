var aInput = document.getElementById('openbtn');
aInput.onclick = function() {
    var d1 = new Dialog();
    d1.init({ //配置参数
        type: 4, //弹框类型（分为1234种）
        title: '个人信息授权', //弹框标题
        content: '这是内容啊哈哈哈哈哈哈哈哈 z这是内容啊哈哈哈哈z这是内容啊哈这是内容啊哈哈哈哈z这是内容啊哈哈哈哈z这是内容啊哈哈哈哈z这是内容啊哈哈哈哈z这是内容啊哈哈哈哈' //弹框内容
    });
}

function Dialog() {
    this.oLogin = null;
    this.settings = { //默认参数
        title: '',
        content: ''
    }
}
Dialog.prototype.init = function(opt) {
    extend(this.settings, opt);
    this.create();
    this.fnClose();
}
Dialog.prototype.create = function() {
    this.dialog = document.createElement('div');
    this.dialog.className = 'dialog';
    if (this.settings.type == 1 || this.settings.type == 2) {
        this.dialog.innerHTML =
            `<div class="opacity-wrap">
                <div class="dialog-box">
                    <div class="content">${this.settings.title}</div>
                    <div style="position:relative">
                        <div class="cotentword">
                            <p>${this.settings.content}</p>
                        </div>
                        <div id="bottom_fade"></div>
                    </div>
                    <div class="btngroup">
                        <p class="close siderclose" style="">再考虑一下</p>
                        <p class="close closebtn" style="background:${this.settings.type == 1 ?'#F04E05':'#407AE9'}">我知道了</p>
                    </div>
                </div>
            </div>`;
    } else if (this.settings.type == 3 || this.settings.type == 4) {
        this.dialog.innerHTML =
            `<div class="opacity-wrap">
                <div class="dialog-box">
                    <span class="close closebtns"><img src="images/close.png" alt=""></span>
                    <div class="content">${this.settings.title}</div>
                    <div style="position:relative">
                        <div class="cotentword">
                            <p>${this.settings.content}</p>
                        </div>
                        <div id="bottom_fade"></div>
                    </div>
                    <div class="btngroup" style="padding:0px">
                        <p class="close siderclose" style="padding:0px"></p>
                        <p class="close closebtn" style="background:${this.settings.type == 3 ?'#F04E05':'#407AE9'}">我知道了</p>
                    </div>
                </div>
            </div>`;
    }
    document.body.appendChild(this.dialog);

}

function viewWidth() {
    return document.documentElement.clientWidth;
}

function viewHeight() {
    return document.documentElement.clientHeight;
}
Dialog.prototype.fnClose = function() {
    // var oClose = this.dialog.getElementsByClassName('close')[0];
    var oCloseknow = this.dialog.getElementsByClassName('siderclose')[0];
    var closebtn = this.dialog.getElementsByClassName('closebtn')[0];
    var oCloseimg = this.dialog.getElementsByClassName('closebtns')[0];
    var This = this;
    // oClose.onclick = function() {
    //     document.body.removeChild(This.dialog);
    // }
    closebtn.onclick = function() {
        document.body.removeChild(This.dialog);
    }
    if (this.settings.type == 3 || this.settings.type == 4) {
        oCloseimg.onclick = function() {
            document.body.removeChild(This.dialog);
        }
    } else {
        oCloseknow.onclick = function() {
            document.body.removeChild(This.dialog);
        }
    }
}

function extend(obj1, obj2) {
    for (var attr in obj2) {
        obj1[attr] = obj2[attr];
    }
}