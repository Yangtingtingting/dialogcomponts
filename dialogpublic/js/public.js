var body = document.getElementsByTagName('body')[0];
console.log(body)
var wrodstr = `<div class="box">
<div class="dialog">
</div>
<div class="diacontent">
    <div class="contentword">
        <p class="titileword">个人信息授权</p>
        <div class="deatailword">
            <p>本政策下"个人信息"特指您的手机号码，以及页面中的访问、操作行为数据。我们努力为用户的信息安全提供保障，采取符合业界标准的合理可行的安全措施和技术手段存储和保护您的个人信息。您选择点击同意按钮之后，表示您同意本平台在法律允许的范围内，获取您的手机号码，并且通过脱敏处理后显示在广告页面中，我们可通过电话号码信息对您进行回访（不限次数）。
            您点击同意按钮的行为，视为您已充分理解本《隐私协议条款》并同意授权我们收集、使用您的"个人信息"。</p>
            <div id="bottom_fade"></div>
        </div>
    </div>
    <p class="readconsider">再考虑一下</p>
    <p class="readknow">我知道了</p>
</div>
</div>`
body.innerHTML = body.innerHTML + wrodstr;