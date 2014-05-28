var PubSub = {};

(function(m) {

    var topics = {},
        spId = -1;

    function getNextToken() {
        return spId += 1;
    }

    m.publish = function(topic, args) {
        if (!topics[topic]) {
            return false
        }

        setTimeout(function() {
            var subscribers = topics[topic];
            var subLen = subscribers ? subscribers.length : 0;
            console.log('xxx ' + subLen)
            
            for(var i = 0; i < subLen; i++) {
                subscribers[i].fn(topic, args)
            }
            
        }, 100)
        

    }

    m.subscribe = function(topic, fn) {

        if (topics[topic] === undefined) {
            topics[topic] = []
        }

        var token = getNextToken();
        topics[topic].push({
            token : token,
            fn : fn
        });
        return token;
    }

    m.unsubscribe = function(token) {
        for (i in topics) {
            if (topics[i]) {
                var tLen = topics[i].length;
                for (var k = 0; k < tLen; k += 1) {
                    if (topics[i][k].token === token) {
                        topics[i].splice(i, 1);
                        return token;
                    }
                }

            }
        }
        return false;
    }

    

})(PubSub);

var x = PubSub.subscribe('first', function() {
    console.log('first eh....')
})

var x = PubSub.subscribe('first', function() {
    console.log('first eh....again')
})


PubSub.publish('first', 'hoo hoo')



