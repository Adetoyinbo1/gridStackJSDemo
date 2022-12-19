// JavaScript Document
let input = document.getElementById("positionInput")
let gridUpdateForm = document.getElementById("gridUpdateForm")

var grid = GridStack.init({

    // accept widgets dragged from other grids or from outside
    // true (uses '.grid-stack-item' class filter) or false
    // string for explicit class name
    // function (i: number, element: Element): boolean
    acceptWidgets: true,

    // turns animation on
    animate: true,

    // amount of columns and rows
    column: 4,
    row: 0,

    // max/min number of rows
    maxRow: 0,
    minRow: 1,

    // minimal width before grid will be shown in one column mode (default?: 768) */
    oneColumnSize: 768,

    // set to true if you want oneColumnMode to use the DOM order and ignore x,y from normal multi column layouts during sorting. 
    // This enables you to have custom 1 column layout that differ from the rest. (default?: false)
    oneColumnModeDomSort: false,

    // widget class
    itemClass: 'grid-stack-item',

    // class for placeholder
    placeholderClass: 'grid-stack-placeholder',

    // text for placeholder
    placeholderText: 'drop here',

    // draggable handle selector
    handle: '.grid-stack-item-content',

    // class for handle
    handleClass: null,

    // allow for selecting older behavior (adding STYLE element to HEAD element instead of parentNode)
    styleInHead: false,

    // an integer (px)
    // a string (ex: '100px', '10em', '10rem'). Note: % doesn't right - see CellHeight
    // 0, in which case the library will not generate styles for rows. Everything must be defined in your own CSS files.
    // auto - height will be calculated for square cells (width / column) and up<a href="https://www.jqueryscript.net/time-clock/">date</a>d live as you resize the window
    // initial - similar to 'auto' (start at square cells) but stay that size during window resizing.
    cellHeight: '10rem',

    // throttle time delay (in ms) used when cellHeight='auto' to improve performance vs usability
    cellHeightThrottle: 100,

    // list of children items to create when calling load() or addGrid()
    // see item options below
    children: [],

    // additional class on top of '.grid-stack' (which is required for our CSS) to differentiate this instance.
    class: '',

    // cell height unit
    cellHeightUnit: 'px',

    // margin
    margin: 10,
    marginUnit: 'px',

    // or
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,

    // if false it tells to do not initialize existing items
    auto: true,

    // minimal width.
    minWidth: 768,

    // class set on grid when in one column mode
    oneColumnModeClass: 'grid-stack-one-column-mode',

    // set to true if you want oneColumnMode to use the DOM order and ignore x,y from normal multi column layouts during sorting. 
    // This enables you to have custom 1 column layout that differ from the rest.
    oneColumnModeDomSort: false,

    // enable floating widgets
    float: true,

    // makes grid static
    staticGrid: false,

    // false the resizing handles are only shown while hovering over a widget
    // true the resizing handles are always shown
    // 'mobile' if running on a mobile device, default to true (since there is no hovering per say), else false. this uses this condition on browser agent check: alwaysShowResizeHandle: /<a href="https://www.jqueryscript.net/tags.php?/Android/">Android</a>|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent )
    alwaysShowResizeHandle: 'mobile',

    // allows to owerride <a href="https://www.jqueryscript.net/tags.php?/jQuery UI/">jQuery UI</a> draggable options
    draggable: {
        handle: '.grid-stack-item-content',
        scroll: true,
        appendTo: 'body'
    },

    // specify the class of items that can be dragged into the grid
    dragIn: false,
    dragInOptions: {
        helper: 'clone',
        handle: '.grid-stack-item-content',
        appendTo: 'body'
    },

    // the type of engine to create (so you can subclass)
    engineClass: 'GridStackEngine',

    // allows to owerride jQuery UI resizable options
    resizable: { autoHide: true, handles: 'se' },

    // disallows dragging of widgets
    disableDrag: false,

    // disallows resizing of widgets
    disableResize: false,

    // if `true` turns grid to RTL. 
    // Possible values are `true`, `false`, `'auto'`
    rtl: 'auto',

    // if `true` widgets could be removed by dragging outside of the grid
    removable: false,
    removableOptions: {
        accept: 'grid-stack-item'
    },

    // time in milliseconds before widget is being removed while dragging outside of the grid
    removeTimeout: 2000,

    // disables the oneColumnMode when the grid width is less than minW
    disableOneColumnMode: 'false',

});

function save() {
    let serializedData = grid.save(saveContent = true, saveGridOpt = false);
    input.value = JSON.stringify(serializedData)
    dmx.parse("content.gridUpdateForm.submit()")

    // localStorage.setItem("windowPosition", JSON.stringify(serializedData));
}

grid.on('change', function (event, items) {
    // fired on change
    save()
});


function load(position) {
    var serializedData = JSON.parse(position);
    grid.load(serializedData, true); // update things

    //     var serializedData = JSON.parse(localStorage.getItem("windowPosition"));
    //     grid.load(serializedData, true); // update things
}


