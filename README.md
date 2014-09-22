Js Html5 Tactile Screen Events
==============================

JsTactileScreenEvents helps you sublime your native web touch screen applications.
You can disable text highlighting, right click, zoom, mousewheel and touchmoves.
It has only few code lines and is in native javascript.


1) How to install
-----------------

    bower install js-tactile-screen-events


2) How to use it?
-----------------

    //Instantiate the object
    var tactileEvents = new jsTactileScreenEvents();
    
    tactileEvents.disable('contextmenu');
    tactileEvents.disable('zoom');
    tactileEvents.disable('mousewheel');
    tactileEvents.disable('touchmove');
    tactileEvents.disable('highlight'); //disable text highlighting

        
3) Live Demonstration
---------------------

http://edouardkombo.github.io/jsTactileScreenEvents/demo/
    

Contributing
-------------

If you do contribute, please make sure it conforms to the PSR coding standard. The easiest way to contribute is to work on a checkout of the repository, or your own fork, rather than an installed version.

Want to learn more? Visit my blog http://creativcoders.wordpress.com


Issues
------

Bug reports and feature requests can be submitted on the [Github issues tracker](https://github.com/edouardkombo/jsTactileScreenEvents/issues).

For further informations, contact me directly at edouard.kombo@gmail.com.
