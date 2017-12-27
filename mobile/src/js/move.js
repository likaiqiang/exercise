import './touch.js'

function move(){
    var target = this,
        curTop = parseInt(getComputedStyle(target).top),
        curLeft = parseInt(getComputedStyle(target).left),
        halfWidth = parseInt(getComputedStyle(target).width) / 2,
        halfHeight = parseInt(getComputedStyle(target).height) / 2
    var move = target.touch({
        swipeleft: function(e,distanceX){
            curLeft = distanceX - halfWidth
            target.style.left = curLeft + 'px'
        },
        swiperight: function(e,distanceX){
            curLeft = distanceX - halfWidth
            target.style.left = curLeft + 'px'
        },
        swipedown: function(e,distanceY){
            curTop = distanceY - halfHeight
            target.style.top = curTop + 'px'
        },
        swipeup: function(e,distanceY){
            curTop = distanceY - halfHeight
            target.style.top = curTop + 'px'
        },
        touchend: function(e,{distanceX,distanceY}){
            curLeft = distanceX
            curTop = distanceY
        },
        touchstart: function(e){
            move.setParams(curLeft,curTop)
        }
    })
}
HTMLElement.prototype.move = move
export default move