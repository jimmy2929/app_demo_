count = 0;

function touch_test() {
    var change = document.getElementById('change_num');
    var vanish = document.getElementById('test');
    var show = document.getElementById('img2');
    count = count + 1;
    if (count == 3) {
        location.href = 'index.html?3';
        change.style.color = 'green';
        vanish.style.display = 'none';
        show.style.display = 'block';

    }
    change.innerHTML = count;

}

function touch_lock() {
    alert('此動物尚未解鎖。請先完成上回篇章');
}

function complete() {
    var url = location.href;
    var temp = url.split("?");
    var vars = temp[1];
    var change1 = document.getElementById('one');
    var change2 = document.getElementById('two');
    if (vars == 3) {
        change1.innerHTML = '<a href="tiger.html?1"><div class="cont"><div class="name">石虎</div><div class="img"></div><div class="process">已完成</div></div></a>'
        change2.innerHTML = '<a href="fish.html"><div class="cont"><div class="name">櫻花鉤吻鮭</div><div class="img"></div><div class="process">進行中</div></div></a>'
    }
}

function complete_tiger() {
    var url = location.href;
    var temp = url.split("?");
    var vars = temp[1];
    var change = document.getElementById('change');
    var vanish = document.getElementById('test');
    var show = document.getElementById('img2');
    var back = document.getElementById('back');
    if (vars == 1) {
        change.style.color = 'green';
        vanish.style.display = 'none';
        show.style.display = 'block';
        change.innerHTML = 3;
        back.innerHTML = '<a href="index.html?3"><i class="fas fa-angle-double-left"></i> 上一頁</a>'
    }
}

function exchange() {
    var box = document.getElementById('contain_flower')
    box.style.display = 'flex';
    box.style.flexWrap = 'wrap';
    box.style.justifyContent = 'space-around';
    box.style.alignItems = 'center';
    box.style.height = '0px';
    box.style.backgroundColor = 'white';
    box.innerHTML = '<div id="img1"><img id="img2" src="img/save.PNG"></div><div id="task1">節省塑膠袋量 <span id="change" style="color: crimson;"> 0</span> / 5</div>'
}

function open_rank() {
    var url = location.href;
    var temp = url.split("?");
    var vars = temp[1];
    var rank_box = document.getElementById('popupcontent');
    var contain = document.getElementById('contain');
    var me = document.getElementById('me');
    if (vars == 3) {
        me.innerHTML = '<img src="img/task2.png"><div class="text"><div class="text_title">我</div><div class="text_contain">成功解救石虎</div></div>'
    }
    rank_box.style.display = 'inline';
    contain.style.zIndex = '2';
    contain.style.webkitFilter = 'opacity(.2)';
}

function close_rank() {
    var rank_box = document.getElementById('popupcontent');
    var contain = document.getElementById('contain');
    rank_box.style.display = 'none';
    contain.style.zIndex = '';
    contain.style.webkitFilter = '';
}

function open_task() {
    var task_box = document.getElementById('popupcontent1');
    var contain = document.getElementById('contain');
    task_box.style.display = 'inline';
    contain.style.zIndex = '2';
    contain.style.webkitFilter = 'opacity(.2)';
}

function close_task() {
    var task_box = document.getElementById('popupcontent1');
    var contain = document.getElementById('contain');
    task_box.style.display = 'none';
    contain.style.zIndex = '';
    contain.style.webkitFilter = '';
}