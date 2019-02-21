.box7{position:relative}
.box7:after,.box7:before{width:100%;height:100%;background:black;position:absolute;top:0;left:0;opacity:0;transition:all .5s ease 0s}
.box7:after{background:black;border:2px solid #0dab76;top:0;left:170%;opacity:1;z-index:1;transform:skewX(45deg);transition:all 1s ease 0s}
.box7:hover:before{opacity:1}
.box7:hover:after{left:-170%}
.box7 img{width:100%;height:auto}
.box7 .box-content{width:100%;position:absolute;bottom:-100%;left:0;transition:all .5s ease 0s}
.box7:hover .box-content{bottom:30%}
.box7 .title{display:block;font-size:22px;font-weight:700;color:#fff;margin:0 0 10px}
.box7 .post{display:block;font-size:15px;font-weight:600;color:#fff;margin-bottom:10px}
.box7 .icon{margin:0}
.box7 .icon li{display:inline-block}
.box7 .icon li a{display:block;width:35px;height:35px;line-height:35px;border-radius:50%;background:#0dab76;font-size:18px;color:#fff;margin-right:10px;transition:all .5s ease 0s}
.box8 .icon li,.box8 .title{display:inline-block}
.box7 .icon li a:hover{transform:rotate(360deg)}
@media only screen and (max-width:990px){.box{margin-bottom:30px}
}