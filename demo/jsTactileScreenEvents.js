/**
 * Object:  jsTactileScreenEvents
 * Version: master
 * Author:  Edouard Kombo
 * Twitter: @EdouardKombo
 * Github:  Edouard Kombo
 * Url:     https://github.com/edouardkombo/jsTactileScreenEvents
 * 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * 
 * Disbale multiple tactile events for touch screen applications, like mousewheel, right click, zoom, text highlighting, touchmove
 */

var jsTactileScreenEvents = function(){};

jsTactileScreenEvents.prototype = {
    
    /**
     * Disable events
     * 
     * @param {String} method
     * @returns {undefined}
     */
    disable: function(method) 
    {    
        if (method === 'highlight') {
            this.injectNoHighlightingRule();
        } else {
            document.body.addEventListener(""+method+"", this.handlerFunction.bind(this), false);
        }
    },
    
    /**
     * Inject css rule
     * 
     * @param {String} rule
     * @returns {undefined}
     */
    injectNoHighlightingRule: function ()
    {        
        var sheet = document.createElement('style');
        sheet.innerHTML = "body { -moz-user-select: none; -khtml-user-select: none; -webkit-user-select: none; user-select: none; }";
        document.body.appendChild(sheet);        
    },
    
    /**
     * Event object that disable action
     * 
     * @param {Object} event
     * @returns {Boolean}
     */
    handlerFunction: function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;        
    }
};

