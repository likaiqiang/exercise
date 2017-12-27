
function touch(options){
    var startX = 0,
        startY = 0,
        distanceX,
        distanceY,
        isClick
    var ops = merge(defaultValue,options)

    if(!this instanceof HTMLElement) return false
    this.addEventListener('touchstart',function(e){
        e.preventDefault()
        isClick = true
        ops.tap.call(this,e)
        ops.touchstart.call(this,e)
    })
    this.addEventListener('touchend',function(e){
        ops.touchend.call(this,e,{
            distanceX:distanceX,
            distanceY:distanceY
        })
    })
    this.addEventListener('touchmove',function(e){
        isClick = false
        distanceX = e.targetTouches[0].pageX - startX
        distanceY = e.targetTouches[0].pageY - startY
     
        ops.touchmove.call(this,e,{
            distanceX:distanceX,
            distanceY:distanceY
        })
        if(distanceX>0){
            ops.swiperight.call(this,e,distanceX)
        }
        if(distanceX<0){
            ops.swipeleft.call(this,e,distanceX)
        }
        if(distanceY>0){
            ops.swipedown.call(this,e,distanceY)
        }
        if(distanceY<0){
            ops.swipeup.call(this,e,distanceY)
        }
    })

    function setParams(startX,startY){
        startX = startX
        startY = startY
    }
    return {
        setParams:setParams
    }
}

var defaultValue = {
    tap:function(){
        return false
    },
    touchstart:function(){
        return false
    },
    touchend:function(){
        return false
    },
    touchmove:function(){
        return false
    },
    swipeup:function(){
        return false
    },
    swipedown:function(){
        return false
    },
    swipeleft:function(){
        return false
    },
    swiperight:function(){
        return false
    }
}
var merge = function(defaultValue,options){
    for(let key in options){
        defaultValue[key] = options[key]
    }
    return defaultValue
}

HTMLElement.prototype.touch = touch

export default touch